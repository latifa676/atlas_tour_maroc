import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './Testimonial.css';

const reviewsData = [

  {

    id: 1,

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",

    rating: 5,

    name: "Ryan Almeida",

    timeAgo: "1 day ago",

    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"

  },

  {

    id: 2,

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",

    rating: 5,

    name: "Blossom Menezes",

    timeAgo: "3 days ago",

    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"

  },

  {

    id: 3,

    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",

    rating: 5,

    name: "Jason Roy",

    timeAgo: "1 week ago",

    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"

  },

  {

    id: 4,

    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    rating: 5,

    name: "Elena Rostova",

    timeAgo: "2 weeks ago",

    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"

  }

];

export default function Testimonials() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < reviewsData.length - 2 ? prev + 1 : prev));
  };

  return (
    <section className="reviews-container">
      <div className="reviews-wrapper">
        
        {/* Left Headline & Navigation Column */}
        <motion.div 
          className="reviews-header-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="large-quote-icon" 
            aria-hidden="true"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            “
          </motion.div>
          <h2 className="reviews-title">
            What our<br />
            customers are<br />
            saying
          </h2>

          <div className="carousel-nav">
            <button 
              onClick={handlePrev} 
              className="nav-arrow" 
              disabled={scrollIndex === 0}
              aria-label="Previous reviews"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="nav-track">
              <motion.div 
                className="nav-thumb" 
                animate={{ left: `${(scrollIndex / (reviewsData.length - 2)) * 60}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <button 
              onClick={handleNext} 
              className="nav-arrow" 
              disabled={scrollIndex >= reviewsData.length - 2}
              aria-label="Next reviews"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Right Scrolling Cards Area */}
        <div className="cards-slider-viewport">
          <motion.div 
            className="cards-slider-track"
            // Replaced inline style with Framer Motion animate for smooth scrolling
            animate={{ x: -(scrollIndex * 330) }}
            transition={{ type: "spring", stiffness: 250, damping: 28 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
          >
            {reviewsData.map((review) => (
              <motion.div 
                key={review.id} 
                className="review-card-wrapper"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Speech Bubble Card */}
                <div className="speech-bubble">
                  <p className="review-body">{review.text}</p>
                  <div className="rating-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" size={16} />
                    ))}
                  </div>
                  <div className="bubble-tail" />
                </div>

                {/* Author Info */}
                <div className="card-author-info">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="author-avatar" 
                  />
                  <div>
                    <h4 className="author-name">{review.name}</h4>
                    <span className="author-time">{review.timeAgo}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}