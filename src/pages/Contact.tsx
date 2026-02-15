import React, { useState } from 'react';
import TextComponent from '../component/TextComponent';
import ButtonCompo from '../component/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import contactImage from '../assets/Image/contact.png'

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="contact-section">
      <div  id="contact" className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            {/* Header Section */}
            <div className="text-center mb-5">
              <div className="icon-wrapper mb-4">
               <img
              src={contactImage}
              alt="Contact"
              className="img-fluid rounded shadow"
              // style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
              </div>
              <h1 className="contact-title">Get in touch</h1>
              <p className="contact-subtitle">We'd love to hear from you</p>
            </div>
         
            {/* Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <TextComponent
                    type="text"
                    className="form-control form-control-lg"
                    id="fullName"
                    name="fullName"
                    label="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <TextComponent
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    label="Email address"
                      //placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <TextComponent
                    type="tel"
                    className="form-control form-control-lg"
                    id="phone"
                    name="phone"
                    label="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <TextComponent
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    rows={5}
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <ButtonCompo type="submit" className="btn btn-secondary w-100 submit-btn" text={' Submit'}>
                 
                </ButtonCompo>
              </form>
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default ContactForm;