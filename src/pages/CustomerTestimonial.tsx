import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
    author: "Client Name",
    location: "Location"
  },
  {
    id: 2,
    text: "The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
    author: "Client Name",
    location: "Location"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section " >
  <div className="container "style={{ maxWidth: "700px" }}>
    {/* Section Header */}
    <div className="text-center mb-5  mx-auto" >
      <h2 className="testimonials-title">Customer testimonials</h2>
      <p className="testimonials-subtitle text-muted">Our customers love working with us</p>
    </div>

    {/* Testimonial Cards */}
    <div className="row justify-content-center ">
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="col-12   mb-4">
          <div className="card testimonial-card border-0 shadow-sm">
            <div className="card-body p-2">
              <div className="d-flex align-items-start">
                <div className="quote-icon me-3 flex-shrink-0">
                  {/* SVG icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="#0d6efd" />
                    <path d="M8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5V11.5C11 12.3284 10.3284 13 9.5 13C8.67157 13 8 12.3284 8 11.5V10.5Z" fill="white" />
                    <path d="M13 10.5C13 9.67157 13.6716 9 14.5 9C15.3284 9 16 9.67157 16 10.5V11.5C16 12.3284 15.3284 13 14.5 13C13.6716 13 13 12.3284 13 11.5V10.5Z" fill="white" />
                    <path d="M8.5 13C8.5 13 8.5 15.5 10 15.5M13.5 13C13.5 13 13.5 15.5 15 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="testimonial-content">
                  <p className="card-text mb-3">{testimonial.text}</p>
                  <p className="text-muted small mb-0">
                    - {testimonial.author}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Testimonials;