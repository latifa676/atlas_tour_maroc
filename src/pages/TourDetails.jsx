import React, { useState } from 'react';
import { 
  Star, Clock, Users, MapPin, Languages, CheckCircle2, 
  XCircle, ChevronDown, Calendar, User, Check
} from 'lucide-react';
import './TourDetails.css';
import Navbar from "../components/Navbar";

export default function TourDetailPage() {
  const [selectedTime, setSelectedTime] = useState('morning');
  const [activeFaq, setActiveFaq] = useState(0);

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000", alt: "Santorini View" },
    { src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=500", alt: "Couple in Santorini" },
    { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=500", alt: "Santorini Sunset" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500", alt: "Santorini Windmill" },
  ];

  const tourDetails = [
    { icon: Clock, label: "Duration", value: "5 Hours" },
    { icon: Users, label: "Group Size", value: "Up to 6 Guests" },
    { icon: MapPin, label: "Pickup", value: "Hotel or Cruise Port" },
    { icon: Languages, label: "Language", value: "English" },
  ];

  const timeline = [
    { time: "09:00", title: "Hotel Pickup & Introduction", desc: "Meet your private guide at your hotel or cruise port." },
    { time: "09:30", title: "Oia Village & Blue Domes", desc: "Explore the famous blue-domed churches and narrow streets." },
    { time: "11:00", title: "Imerovigli Caldera View", desc: "Enjoy panoramic views from the highest point of the caldera." },
    { time: "12:30", title: "Red Beach Stop", desc: "Characterized by iconic red volcanic sand and unique rock formations." },
    { time: "14:00", title: "Return to Hotel", desc: "Comfortable return transfer to your accommodation." },
  ];

  const included = [
    "Private vehicle with A/C",
    "Professional local guide",
    "Bottled water",
    "Hotel/port pickup & drop-off",
    "All taxes and fees"
  ];

  const excluded = [
    "Food and drinks",
    "Entrance fees to museums",
    "Gratuities"
  ];

  const faqs = [
    { q: "Can I customize the tour?", a: "Yes, absolutely! Our tours are fully customizable. Let us know your preferences when booking." },
    { q: "Is hotel pickup included?", a: "Yes, pickup and drop-off from any hotel or cruise port terminal in Santorini is included." },
    { q: "What's the cancellation policy?", a: "Free cancellation up to 24 hours before the activity starts for a full refund." },
    { q: "What should I bring?", a: "Comfortable walking shoes, sun protection (hat, sunscreen), sunglasses, and a camera!" },
  ];

  const reviews = [
    {
      name: "Daniel M.",
      country: "USA",
      rating: 5,
      text: "Perfectly organized tour. Our guide was knowledgeable and friendly. The views were absolutely breathtaking!"
    },
    {
      name: "Sarah H.",
      country: "Australia",
      rating: 5,
      text: "Best decision we made during our trip. The private tour allowed us to explore at our own pace."
    }
  ];

  return (
    
    <div className="page-container">
      {/* Breadcrumb */}
            <Navbar />

      {/* <nav className="breadcrumb">
        <a href="#">Home</a>
        <span>/</span>
        <a href="#">Experiences</a>
        <span>/</span>
        <span className="current">Santorini Highlights Private Tour</span>
      </nav> */}

      {/* Main Grid Section */}
      <div className="hero-grid">
        {/* Left Column: Image Gallery */}
        <div className="gallery-section">
          <div className="main-image-container">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} />
          </div>
          <div className="sub-images-grid">
            {galleryImages.slice(1).map((img, idx) => (
              <div key={idx} className="sub-image-container">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Title & Booking Form */}
        <div className="booking-hero-section">
          <div>
            <h1 className="tour-title">Santorini Highlights Private Tour</h1>
            
            <div className="price-rating-row">
              <div>
                <span className="meta-label">Starting from</span>
                <div className="price-tag">
                  <span className="amount">€420</span>
                  <span className="unit">per group</span>
                </div>
              </div>
              <div className="text-right">
                <span className="meta-label">Rating</span>
                <div className="rating-box">
                  <span className="rating-score">4.9</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="star-icon" />
                    ))}
                  </div>
                  <span className="reviews-count">(48 reviews)</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="specs-grid">
              {tourDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <div key={idx} className="spec-card">
                    <div className="icon-wrapper">
                      <Icon className="spec-icon" />
                    </div>
                    <div>
                      <span className="spec-label">{detail.label}</span>
                      <span className="spec-value">{detail.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Booking Card */}
            <div className="booking-card">
              <h3>Book This Experience</h3>
              
              <div className="time-switcher">
                <button 
                  onClick={() => setSelectedTime('morning')}
                  className={selectedTime === 'morning' ? 'active' : ''}
                >
                  Morning
                </button>
                <button 
                  onClick={() => setSelectedTime('afternoon')}
                  className={selectedTime === 'afternoon' ? 'active' : ''}
                >
                  Afternoon
                </button>
              </div>

              <div className="input-field">
                <label>Date</label>
                <div className="relative-input">
                  <input type="text" readOnly value="Select date" />
                  <Calendar className="input-icon" />
                </div>
              </div>

              <div className="input-field">
                <label>Persons</label>
                <div className="relative-input">
                  <select>
                    <option>2 Persons</option>
                    <option>3 Persons</option>
                    <option>4 Persons</option>
                    <option>5 Persons</option>
                    <option>6 Persons</option>
                  </select>
                  <ChevronDown className="input-icon" />
                </div>
              </div>

              <button className="btn-primary">
                Book This Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Details Grid */}
      <div className="details-grid">
        {/* Left Detailed Content */}
        <div className="details-content">
          {/* Overview */}
          <section>
            <h2>Experience Overview</h2>
            <p className="overview-text">
              Discover Santorini's most iconic locations with a private local guide. Enjoy comfort, flexibility, and breathtaking views at your own pace. This comprehensive tour takes you through the island's most stunning vistas, charming villages, and hidden gems.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <h2>Your Journey</h2>
            <div className="timeline-card">
              <div className="timeline-container">
                <div className="timeline-line"></div>
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <span className="timeline-time">{item.time}</span>
                    <div className="timeline-badge">
                      <Check className="check-icon" />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Inclusions / Exclusions */}
          <div className="inc-exc-grid">
            <div className="inc-card">
              <h3>What's Included</h3>
              <ul>
                {included.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 className="inc-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="exc-card">
              <h3>Not Included</h3>
              <ul>
                {excluded.map((item, idx) => (
                  <li key={idx}>
                    <XCircle className="exc-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <section>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                    className="faq-header"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`chevron-icon ${activeFaq === idx ? 'open' : ''}`} />
                  </button>
                  {activeFaq === idx && (
                    <div className="faq-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section>
            <h2>Guest Reviews</h2>
            <div className="reviews-grid">
              {reviews.map((rev, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-header">
                    <div className="user-info">
                      <div className="avatar">
                        <User className="avatar-icon" />
                      </div>
                      <div>
                        <h4>{rev.name}</h4>
                        <span className="country">{rev.country}</span>
                      </div>
                    </div>
                    <div className="stars">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Mini Sticky Card */}
        <div className="sticky-sidebar">
          <div className="mini-booking-card">
            <span className="meta-label">Starting from</span>
            <div className="price-tag">
              <span className="amount">€420</span>
              <span className="unit">per group</span>
            </div>

            <div className="mini-specs">
              <div className="mini-spec-item">
                <Clock className="mini-icon" />
                <span>5 Hours</span>
              </div>
              <div className="mini-spec-item">
                <Users className="mini-icon" />
                <span>Up to 6 Guests</span>
              </div>
            </div>

            <button className="btn-primary">
              Book Your Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}