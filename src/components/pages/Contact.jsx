// Contact.jsx
import React, { useState } from 'react';
import ContactHero from './Contact/ContactHero';
import ContactInfoSection from './Contact/ContactInfoSection';
import ContactFormSection from './Contact/ContactFormSection';
import WhyChooseUsSection from './Contact/WhyChooseUsSection';
import FAQSection from './Contact/FAQSection';
import ContactCTASection from './Contact/ContactCTASection';
import QuickContactSection from './Contact/QuickContactSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information */}
      <ContactInfoSection />

      {/* Contact Form & Why Choose Us */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactFormSection 
              submitted={submitted}
              setSubmitted={setSubmitted}
              formData={formData}
              setFormData={setFormData}
            />
            
            {/* Why Choose Us Section */}
            <WhyChooseUsSection />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <ContactCTASection />

      {/* Quick Contact */}
      <QuickContactSection />
      
      <hr/>
    </div>
  );
};

export default Contact;