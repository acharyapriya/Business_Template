import React from "react";
import client1 from "../assets/Image/quote.png";


interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
    author: "Client Name",
    location: "Location",
    image: client1
  },
  {
    id: 2,
    text: "The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
    author: "Client Name",
    location: "Location",
    image: client1
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container" style={{ maxWidth: "700px" }}>
        {/* Section Header */}
        <div className="text-center mb-5 mx-auto">
          <h2 className="testimonials-title">Customer testimonials</h2>
          <p className="testimonials-subtitle text-muted">
            Our customers love working with us
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="row justify-content-center">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="col-12 mb-4">
              <div className="card testimonial-card border-0 shadow-sm p-3">
                <div className="d-flex align-items-start">
                  {/* Avatar Image */}
                  <div className="testimonial-avatar me-3 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-circle border border-white"
                      width="60"
                      height="60"
                    />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
