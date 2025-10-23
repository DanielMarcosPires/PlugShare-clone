import './styles.css'
import { useState } from 'react'
import { Heart, Zap, Bell, Home, ChevronLeft, ChevronRight, Share, MapPin, Calendar, Phone, MessageCircle, Star } from "lucide-react";

export default function CarDetailPages() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [showContactOptions, setShowContactOptions] = useState(false)

  // Mock data for car details
  const carDetails = {
    name: 'KIA EV6',
    price: '$45,000',
    rating: 4.8,
    reviewCount: 128,
    location: 'Downtown Charging Station',
    distance: '1.2 km',
    description: 'The KIA EV6 is a fully electric vehicle that combines innovative technology with elegant design. Experience zero emissions without compromising on performance or comfort.',
    features: [
      '450 km Range',
      '4.2s 0-100 km/h',
      '220 km/h Top Speed',
      '320 HP Power',
      'Fast Charging',
      'Autonomous Driving'
    ],
    images: [
      '/car-vermelho.png',
      '/car-azul2.png',
      '/car-branco2.png',
      '/carro.png'
    ],
    owner: {
      name: 'John Smith',
      rating: 4.9,
      responseTime: 'within 2 hours',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@example.com'
    }
  }

  const handlePreviousImage = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? carDetails.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setSelectedImageIndex(prev => 
      prev === carDetails.images.length - 1 ? 0 : prev + 1
    )
  }

  // Function to add event to Google Calendar
  const addToGoogleCalendar = () => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
    const formatGoogleCalendarDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };
    
    const title = encodeURIComponent(`Test Drive: ${carDetails.name}`);
    const details = encodeURIComponent(`Test drive appointment for ${carDetails.name}. Location: ${carDetails.location}`);
    const location = encodeURIComponent(carDetails.location);
    const start = formatGoogleCalendarDate(startDate);
    const end = formatGoogleCalendarDate(endDate);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  // Function to share car details
  const shareCarDetails = async () => {
    const shareData = {
      title: `Check out this ${carDetails.name}`,
      text: carDetails.description,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
      // Fallback
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Function to contact owner
  const contactOwner = (method: 'call' | 'message') => {
    setShowContactOptions(false);
    if (method === 'call') {
      window.location.href = `tel:${carDetails.owner.phone}`;
    } else {
      window.location.href = `sms:${carDetails.owner.phone}`;
    }
  };

  // Function to select date for test drive
  const selectDate = (day: number) => {
    setSelectedDate(day);
  };

  // Function to book test drive
  const bookTestDrive = () => {
    if (selectedDate) {
      alert(`Test drive booked for October ${selectedDate}, 2025`);
    } else {
      alert('Please select a date for the test drive');
    }
  };

  // Function to open location in maps
  const openLocationInMaps = () => {
    // This will open the location in Google Maps or the default maps app
    const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(carDetails.location)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="cdp-container">
      {/* Header with back button */}
      <div className="cdp-header">
        <button className="cdp-back-btn" onClick={() => window.history.back()}>
          ←
        </button>
        <div className="cdp-header-actions">
          <button 
            className={`cdp-favorite-btn ${isFavorite ? 'cdp-favorite-active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={20} />
          </button>
          <button className="cdp-share-btn" onClick={shareCarDetails}>
            <Share size={20} />
          </button>
        </div>
      </div>

      {/* Image carousel */}
      <div className="cdp-image-section">
        <button className="cdp-carousel-btn cdp-carousel-btn-left" onClick={handlePreviousImage}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="cdp-image-container">
          <img 
            src={carDetails.images[selectedImageIndex]} 
            alt={`${carDetails.name} view ${selectedImageIndex + 1}`} 
            className="cdp-car-image" 
          />
        </div>
        
        <button className="cdp-carousel-btn cdp-carousel-btn-right" onClick={handleNextImage}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Image indicators */}
      <div className="cdp-image-indicators">
        {carDetails.images.map((_, index) => (
          <div 
            key={index} 
            className={`cdp-indicator ${index === selectedImageIndex ? 'cdp-indicator-active' : ''}`}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>

      {/* Car details */}
      <div className="cdp-content">
        <div className="cdp-title-section">
          <h1 className="cdp-main-title">{carDetails.name}</h1>
          <div className="cdp-price">{carDetails.price}</div>
        </div>

        <div className="cdp-rating-section">
          <div className="cdp-rating">
            <span>⭐ {carDetails.rating}</span> 
            <span className="cdp-review-count">({carDetails.reviewCount} reviews)</span>
          </div>
          <button className="cdp-location-btn" onClick={openLocationInMaps}>
            <MapPin size={16} />
            <span>{carDetails.distance}</span>
          </button>
        </div>

        <div className="cdp-location-details">
          <MapPin size={16} className="cdp-location-icon" />
          <span>{carDetails.location}</span>
        </div>

        <div className="cdp-description">
          <p>{carDetails.description}</p>
        </div>

        <div className="cdp-features-section">
          <h2 className="cdp-section-title">Key Features</h2>
          <div className="cdp-features-grid">
            {carDetails.features.map((feature, index) => (
              <div key={index} className="cdp-feature-item">
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Owner section */}
        <div className="cdp-owner-section">
          <h2 className="cdp-section-title">Owner Information</h2>
          <div className="cdp-owner-card">
            <div className="cdp-owner-info">
              <div className="cdp-owner-name">{carDetails.owner.name}</div>
              <div className="cdp-owner-rating">
                <Star size={16} className="cdp-star-icon" />
                {carDetails.owner.rating} • Responds {carDetails.owner.responseTime}
              </div>
            </div>
            <button 
              className="cdp-contact-btn"
              onClick={() => setShowContactOptions(!showContactOptions)}
            >
              <MessageCircle size={20} />
              Contact
            </button>
          </div>
          
          {showContactOptions && (
            <div className="cdp-contact-options">
              <button 
                className="cdp-contact-option"
                onClick={() => contactOwner('call')}
              >
                <Phone size={16} />
                Call
              </button>
              <button 
                className="cdp-contact-option"
                onClick={() => contactOwner('message')}
              >
                <MessageCircle size={16} />
                Message
              </button>
            </div>
          )}
        </div>

        {/* Calendar section */}
        <div className="cdp-calendar-section">
          <h2 className="cdp-section-title">Schedule Test Drive</h2>
          <div className="cdp-calendar">
            <div className="cdp-calendar-header">
              <button className="cdp-calendar-nav">
                <ChevronLeft size={20} />
              </button>
              <div className="cdp-calendar-title">October 2025</div>
              <button className="cdp-calendar-nav">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="cdp-calendar-grid">
              <div className="cdp-calendar-days">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={index} className="cdp-calendar-day-header">{day}</div>
                ))}
              </div>
              <div className="cdp-calendar-dates">
                {[...Array(31)].map((_, index) => (
                  <div 
                    key={index} 
                    className={`cdp-calendar-date ${index > 10 && index < 20 ? 'cdp-date-available' : ''} ${
                      selectedDate === index + 1 ? 'cdp-date-selected' : ''
                    }`}
                    onClick={() => selectDate(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="cdp-google-calendar-btn" onClick={addToGoogleCalendar}>
            <Calendar size={20} />
            Add to Google Calendar
          </button>
          <button className="cdp-book-btn" onClick={bookTestDrive}>
            Book Test Drive
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="cdp-actions">
        <button className="cdp-primary-btn">Reserve Now</button>
        <button className="cdp-secondary-btn">Contact Owner</button>
      </div>

      {/* Bottom navigation bar */}
      <div className="cdp-bottom-bar">
        <Home size={24} className="cdp-bottom-icon" />
        <Zap size={24} className="cdp-bottom-icon" />
        <Bell size={24} className="cdp-bottom-icon" />
      </div>
    </div>
  )
}