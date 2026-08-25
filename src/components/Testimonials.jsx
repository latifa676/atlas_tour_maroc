import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: "Mark Thompson",
    role: "CEO Tripper",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    quote: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Co-Founder Tripper",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    quote: "Booking our corporate retreat was seamless. The transparent pricing and detailed itineraries saved us countless hours of planning. Highly recommended for anyone looking for a hassle-free experience!"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial-container">
      <div className="testimonial-wrapper">
        {/* Left Column: Author Info & Controls */}
        <div className="author-column">
          <div className="author-info">
            <img 
              src={current.avatar} 
              alt={current.name} 
              className="author-avatar" 
            />
            <div className="author-details">
              <h3 className="author-name">{current.name}</h3>
              <p className="author-role">{current.role}</p>
            </div>
          </div>

          <div className="navigation-controls">
            <button 
              onClick={handlePrev} 
              className="nav-btn" 
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext} 
              className="nav-btn" 
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Quote Block */}
        <div className="quote-column">
          <div className="quote-mark" aria-hidden="true">“</div>
          <p className="quote-text">{current.quote}</p>
        </div>
      </div>
    </section>
  );
}