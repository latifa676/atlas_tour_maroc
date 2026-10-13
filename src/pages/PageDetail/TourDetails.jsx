import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Tag,
  Users,
  Languages,
  Mountain,
  Ticket,
  UserRound,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  XCircle,
  BadgeCheck,
  ChevronRight
} from "lucide-react";
import { getTour, getTours } from "../../api/toursApi";
import SEO from "../../components/SEO";
import "./TourDetails.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  tour: "",
  preferredDate: "",
  adults: "2",
  children: "0",
  pickupLocation: "",
  transportation: "",
  accommodation: "",
  additionalRequests: "",
  terms: false
};

const bookingWhatsAppNumber = "212701276075";

function getTitleContent(tour) {
  if (!tour) return "Tour details";
  if (typeof tour.title === "string") return tour.title;
  return tour.title?.rendered || tour.titleText || "Tour details";
}

function getTextContent(value, fallback = "") {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value?.rendered || fallback;
}

function getArrayValue(value, fallback = []) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return fallback;
}

export default function TourDetailPage() {
  const { id } = useParams();
  const { search } = useLocation();
  const bookingParams = new URLSearchParams(search);
  const requestedDate = bookingParams.get("date") || "";
  const requestedTravelers = bookingParams.get("travelers") || "";
  const bookingRef = useRef(null);
  const [tourResult, setTourResult] = useState({ id: null, tour: null, error: "" });
  const [relatedTours, setRelatedTours] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const isTourLoaded = tourResult.id === id;
  const tour = isTourLoaded ? tourResult.tour : null;
  const error = isTourLoaded ? tourResult.error : "";
  const loading = !isTourLoaded;

  useEffect(() => {
    let cancelled = false;

    getTour(id)
      .then((data) => {
        if (!cancelled) {
          setTourResult({ id, tour: data, error: "" });
          setFormData((current) => ({
            ...current,
            tour: getTitleContent(data),
            preferredDate: requestedDate || current.preferredDate,
            adults: requestedTravelers || current.adults
          }));
          setIsSubmitted(false);
        }
      })
      .catch((requestError) => {
        if (!cancelled) {
          setTourResult({
            id,
            tour: null,
            error: requestError.message || "Tour not found."
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id, requestedDate, requestedTravelers]);

  useEffect(() => {
    getTours()
      .then((tours) => {
        if (tour) {
          const filtered = tours.filter((item) => String(item.id) !== String(tour.id) && String(item.slug || item.id) !== String(tour.slug || tour.id));
          setRelatedTours(filtered.slice(0, 3));
        }
      })
      .catch(() => setRelatedTours([]));
  }, [tour]);

  const title = useMemo(() => getTitleContent(tour), [tour]);
  const description = useMemo(
    () => getTextContent(tour?.longDescription || tour?.description || tour?.content?.rendered, ""),
    [tour]
  );
  const itinerary = getArrayValue(tour?.itinerary, []);
  const included = getArrayValue(tour?.included, []);
  const notIncluded = getArrayValue(tour?.notIncluded, []);
  const importantInfo = getArrayValue(tour?.importantInformation, []);
  const transportationOptions = getArrayValue(tour?.transportationOptions, []);
  const accommodationOptions = getArrayValue(tour?.accommodationOptions, []);

  const formattedPrice =
    tour?.price !== undefined && tour?.price !== null && tour?.price !== ""
      ? `${tour.currency || "MAD"} ${Number(tour.price).toLocaleString()} / person`
      : "Price on request";
  const originalPrice = Number(tour?.originalPrice ?? tour?.acf?.original_price);
  const hasDiscount = Number.isFinite(originalPrice) && originalPrice > Number(tour?.price);
  const tripCode = tour?.tripCode || tour?.trip_code || tour?.slug || tour?.id;
  const checkIn = tour?.checkIn || tour?.check_in || tour?.acf?.check_in;
  const checkOut = tour?.checkOut || tour?.check_out || tour?.acf?.check_out;
  const guideDetails = included.find((item) => /guide/i.test(item));
  const serviceDetails = included.find((item) => /transport|hotel|accommodation/i.test(item));
  const summaryFeatures = [
    {
      icon: UserRound,
      title: "Tour Guides",
      description: guideDetails || "Ask about guide availability when booking."
    },
    {
      icon: ShieldCheck,
      title: "Basic Level Service",
      description: serviceDetails || "Review the included services for this tour."
    },
    {
      icon: Users,
      title: "Small Group",
      description: tour?.groupSize || "Group size confirmed before booking."
    },
    {
      icon: Mountain,
      title: "Physical Rating",
      description: tour?.difficulty || "Ask us about the activity level."
    },
    {
      icon: Languages,
      title: "Languages",
      description: tour?.languages || "Confirmed when booking."
    },
    {
      icon: MapPin,
      title: "Location",
      description: tour?.location || "Confirmed when booking."
    },
    {
      icon: Clock3,
      title: "Duration",
      description: tour?.duration || "Confirmed when booking."
    },
    {
      icon: CalendarDays,
      title: "Availability",
      description: tour?.availability || "Confirmed when booking."
    }
  ];
  const meetingPointName = tour?.meetingPoint || tour?.location || "Morocco";
  const meetingPointMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meetingPointName)}`;
  const meetingPointEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(meetingPointName)}&output=embed`;
  const galleryImages = getArrayValue(tour?.gallery);
  const tourImages = getArrayValue(tour?.images);
  const heroGallery = (galleryImages.length ? galleryImages : tourImages.length ? tourImages : [tour?.image])
    .filter(Boolean);
  const featuredImage = heroGallery[0];
  const structuredData = tour ? {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: title,
      description: description || `${title} guided excursion in ${tour.location || "Morocco"}.`,
      ...(featuredImage && { image: featuredImage }),
      url: `https://atlastour-iota.vercel.app/tours/${tour.slug || tour.id}`,
      ...(tour.price != null && {
        offers: {
          "@type": "Offer",
          price: Number(tour.price),
          priceCurrency: tour.currency || "MAD"
        }
      })
    } : undefined;

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));

    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s()-]{8,}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.preferredDate) {
      nextErrors.preferredDate = "Please select a date.";
    } else {
      const selectedDate = new Date(`${formData.preferredDate}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        nextErrors.preferredDate = "Please select a future date.";
      }
    }

    if (!formData.adults || Number(formData.adults) < 1) {
      nextErrors.adults = "Adults must be at least 1.";
    }

    if (Number(formData.children) < 0) {
      nextErrors.children = "Children cannot be less than 0.";
    }

    if (!formData.terms) {
      nextErrors.terms = "Please agree to the Terms & Conditions and Privacy Policy.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const message = [
      "New tour booking request",
      `Tour: ${formData.tour}`,
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Client phone / WhatsApp: ${formData.phone}`,
      `Preferred date: ${formData.preferredDate}`,
      `Adults: ${formData.adults}`,
      `Children: ${formData.children}`,
      `Pickup location: ${formData.pickupLocation || "Not provided"}`,
      `Transportation: ${formData.transportation || "Not selected"}`,
      `Accommodation: ${formData.accommodation || "Not selected"}`,
      `Additional requests: ${formData.additionalRequests || "None"}`
    ].join("\n");
    const url = `https://wa.me/${bookingWhatsAppNumber}?text=${encodeURIComponent(message)}`;

    setWhatsAppUrl(url);
    setIsSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) {
    return (
      <>
        <SEO
          title={`Tour ${id} | Morocco Excursions`}
          description="Explore guided excursions and tours in Agadir, Morocco."
          path={`/tours/${id}`}
        />
        <main className="page-container tour-state" aria-live="polite">
          <p>Loading tour details...</p>
        </main>
      </>
    );
  }

  if (error || !tour) {
    return (
      <>
        <SEO
          title="Excursion not found | Morocco Excursions"
          description="The requested excursion could not be found. Explore our available tours in Morocco."
          noIndex
        />
        <main className="page-container tour-state">
          <h1>{error || "Tour not found."}</h1>
          <Link to="/">Back to tours</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${title} | Morocco Excursions`}
        description={description || `${title} guided excursion in ${tour.location || "Morocco"}. Check tour details and request a booking.`}
        path={`/tours/${tour.slug || tour.id}`}
        image={featuredImage}
        structuredData={structuredData}
      />
      <main className="page-container tour-detail-page">
      <section className="tour-hero">
        <div className="tour-hero__media">
          <h1 className="tour-hero__title">{title}</h1>
          <div className="tour-hero__details">
            <span><Clock3 size={13} /> {tour.duration || "Flexible"}</span>
            <span><MapPin size={13} /> {tour.location || "Morocco"}</span>
            <span><CalendarDays size={13} /> {tour.availability || "Availability confirmed when booking"}</span>
            <span><Tag size={13} /> {tour.category || "Tour"}</span>
          </div>
          <div className="tour-hero__gallery">
            {heroGallery.map((galleryImage, index) => (
              <img
                key={`${galleryImage}-${index}`}
                className={index === 0 ? "tour-hero__gallery-main" : ""}
                src={galleryImage}
                alt={`${title} tour view ${index + 1}`}
                width={tour.imageWidth}
                height={tour.imageHeight}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
                decoding="async"
              />
            ))}
          </div>
        </div>

        <div className="tour-hero__content">
          <div className="tour-summary-header">
            <h2>Tour Summary</h2>
            <span className="tour-badge">{hasDiscount ? "Discount" : "Featured"}</span>
          </div>

          <div className="tour-summary-title-row">
            <div>
              <h2>{title}</h2>
              <p className="tour-summary__location">{tour.location || "Morocco"}</p>
            </div>
          </div>
          {description && <p className="tour-summary">{description}</p>}

          <div className="tour-meta-row">
            {[
              { label: "Check-in", value: checkIn || "Date selected after booking", icon: CalendarDays },
              { label: "Check-out", value: checkOut || "Date selected after booking", icon: CalendarDays },
              { label: "Total length", value: tour.duration || "Flexible", icon: Clock3 }
            ].map(({ label, value, icon: Icon }) => (
              <div className="meta-item" key={label}>
                <Icon size={14} />
                <div>
                  <span className="meta-item__label">{label}</span>
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="tour-price-box">
            <strong>{formattedPrice}</strong>
            {hasDiscount && (
              <span className="tour-original-price">
                {tour.currency || "MAD"} {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="tour-code">
            <Ticket size={14} />
            <span>Trip Code: {tripCode}</span>
          </div>

          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={scrollToBooking}>
              Book Your Trip Now
            </button>
          </div>

          <div className="tour-summary-features">
            {summaryFeatures.map(({ icon: Icon, title: featureTitle, description: featureDescription }) => (
              <div className="tour-summary-feature" key={featureTitle}>
                <Icon size={15} />
                <div>
                  <h3>{featureTitle}</h3>
                  <p>{featureDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-layout">
        <div className="detail-main">
          <section className="content-section">
            <div className="section-heading">
              <h2>Your Journey</h2>
            </div>
            <div className="timeline-list">
              {itinerary.length > 0 ? (
                itinerary.map((day, index) => (
                  <details key={day.day || day.title} className="timeline-item" open={index === 0}>
                    <summary className="timeline-summary">
                      <span className="timeline-marker" aria-hidden="true" />
                      <span className="timeline-day">{day.day || `Day ${index + 1}`}</span>
                      <ChevronDown className="timeline-chevron" size={16} aria-hidden="true" />
                    </summary>
                    <div className="timeline-content">
                      <h3>{day.title}</h3>
                      <div className="timeline-description">
                        {(day.items || []).map((item) => <p key={item}>{item}</p>)}
                      </div>
                    </div>
                  </details>
                ))
              ) : (
                <div className="empty-state">This tour itinerary is being prepared.</div>
              )}
            </div>
          </section>

          <section className="content-section split-columns">
            <div className="info-column">
              <div className="section-heading">
                <h2>Included</h2>
              </div>
              <ul className="check-list">
                {included.length > 0 ? (
                  included.map((item) => (
                    <li key={item}><CheckCircle2 size={18} /> {item}</li>
                  ))
                ) : (
                  <li>Included services will be confirmed when booking.</li>
                )}
              </ul>
            </div>

            <div className="info-column">
              <div className="section-heading">
                <h2>Not Included</h2>
              </div>
              <ul className="check-list negative-list">
                {notIncluded.length > 0 ? (
                  notIncluded.map((item) => (
                    <li key={item}><XCircle size={18} /> {item}</li>
                  ))
                ) : (
                  <li>Exclusions will be confirmed when booking.</li>
                )}
              </ul>
            </div>
          </section>

          <section className="content-section">
            <div className="section-heading">
              <h2>Meeting Point</h2>
            </div>
            <div className="meeting-point-box">
              <div className="meeting-point-icon"><MapPin size={18} /></div>
              <div>
                <span>{meetingPointName}</span>
                <p>
                  <a href={meetingPointMapUrl} target="_blank" rel="noreferrer">
                    Open this location in Google Maps
                  </a>
                </p>
              </div>
            </div>
            <iframe
              className="meeting-point-map"
              src={meetingPointEmbedUrl}
              title={`Map showing ${meetingPointName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>

          <section className="content-section">
            <div className="section-heading">
              <h2>Important Information</h2>
            </div>
            <div className="info-list">
              {importantInfo.length > 0 ? (
                importantInfo.map((item) => (
                  <div key={item.label} className="info-list-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))
              ) : (
                <p className="empty-state">Information will be confirmed when booking.</p>
              )}
            </div>
          </section>
        </div>

        <aside className="booking-panel" id="booking" ref={bookingRef}>
          <div className="booking-card">
            <div className="booking-card__header">
              <span className="booking-card__eyebrow">Request to Book</span>
              <h3>Tell us about your trip and we'll get back to you shortly.</h3>
            </div>

            {isSubmitted ? (
              <div className="success-box" role="status">
                <BadgeCheck size={24} />
                <h4>Your booking details are ready in WhatsApp.</h4>
                <p>Review the message and tap Send in WhatsApp to deliver your booking request.</p>
                <a className="primary-button" href={whatsAppUrl} target="_blank" rel="noreferrer">
                  Open WhatsApp to Send
                </a>
                <Link to="/" className="primary-button success-back-button">Back to Tours</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleFieldChange} className={errors.fullName ? "input-error" : ""} aria-invalid={Boolean(errors.fullName)} />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email*</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleFieldChange} className={errors.email ? "input-error" : ""} aria-invalid={Boolean(errors.email)} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="phone">Phone / WhatsApp*</label>
                  <input id="phone" name="phone" type="tel" placeholder="+212 6 XX XX XX XX" value={formData.phone} onChange={handleFieldChange} className={errors.phone ? "input-error" : ""} aria-invalid={Boolean(errors.phone)} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="tour">Tour</label>
                  <input id="tour" name="tour" type="text" value={formData.tour} readOnly />
                </div>

                <div className="field-group">
                  <label htmlFor="preferredDate">Preferred Date*</label>
                  <input id="preferredDate" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleFieldChange} className={errors.preferredDate ? "input-error" : ""} aria-invalid={Boolean(errors.preferredDate)} />
                  {errors.preferredDate && <span className="field-error">{errors.preferredDate}</span>}
                </div>

                <div className="field-row two-columns">
                  <div className="field-group">
                    <label htmlFor="adults">Adults*</label>
                    <input id="adults" name="adults" type="number" min="1" value={formData.adults} onChange={handleFieldChange} className={errors.adults ? "input-error" : ""} aria-invalid={Boolean(errors.adults)} />
                    {errors.adults && <span className="field-error">{errors.adults}</span>}
                  </div>
                  <div className="field-group">
                    <label htmlFor="children">Children</label>
                    <input id="children" name="children" type="number" min="0" value={formData.children} onChange={handleFieldChange} className={errors.children ? "input-error" : ""} aria-invalid={Boolean(errors.children)} />
                    {errors.children && <span className="field-error">{errors.children}</span>}
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="pickupLocation">Pickup Location</label>
                  <input id="pickupLocation" name="pickupLocation" type="text" placeholder="Enter your hotel or pickup location" value={formData.pickupLocation} onChange={handleFieldChange} />
                </div>

                {(transportationOptions.length > 0 || accommodationOptions.length > 0) && (
                  <div className="field-row two-columns">
                    {transportationOptions.length > 0 && (
                      <div className="field-group">
                        <label htmlFor="transportation">Transportation</label>
                        <select id="transportation" name="transportation" value={formData.transportation} onChange={handleFieldChange}>
                          <option value="">Select</option>
                          {transportationOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {accommodationOptions.length > 0 && (
                      <div className="field-group">
                        <label htmlFor="accommodation">Accommodation</label>
                        <select id="accommodation" name="accommodation" value={formData.accommodation} onChange={handleFieldChange}>
                          <option value="">Select</option>
                          {accommodationOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}

                <div className="field-group">
                  <label htmlFor="additionalRequests">Additional Requests</label>
                  <textarea id="additionalRequests" name="additionalRequests" rows="4" placeholder="Tell us about any special requests, dietary requirements, questions, or anything else we should know." value={formData.additionalRequests} onChange={handleFieldChange} />
                </div>

                <label className="checkbox-row">
                  <input type="checkbox" name="terms" checked={formData.terms} onChange={handleFieldChange} />
                  <span>I agree to the Terms & Conditions and Privacy Policy.</span>
                </label>
                {errors.terms && <span className="field-error checkbox-error">{errors.terms}</span>}

                <button type="submit" className="submit-button" disabled={!formData.terms}>
                  Send Booking Request via WhatsApp
                </button>
              </form>
            )}
          </div>
        </aside>
      </section>

      <section className="related-section">
        <div className="section-heading">
          <h2>You May Also Like</h2>
        </div>
        <div className="related-grid">
          {relatedTours.map((relatedTour) => (
            <Link key={relatedTour.id} to={`/tours/${relatedTour.slug || relatedTour.id}`} className="related-card">
              <img
                src={relatedTour.image || relatedTour.images?.[0]}
                alt={getTitleContent(relatedTour)}
                width={relatedTour.imageWidth}
                height={relatedTour.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <div className="related-card__body">
                <div className="related-card__meta">
                  <span>{relatedTour.location || "Morocco"}</span>
                  <span>{relatedTour.duration || "Flexible"}</span>
                </div>
                <h3>{getTitleContent(relatedTour)}</h3>
                <div className="related-card__footer">
                  <strong>{relatedTour.price ? `${relatedTour.currency || "MAD"} ${Number(relatedTour.price).toLocaleString()}` : "Price on request"}</strong>
                  <span>
                    View Tour
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}
