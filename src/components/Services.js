import React from 'react';

function Services() {
  const services = [
    { title: 'Custom Furniture', description: 'Handcrafted furniture made to your specifications.' },
    { title: 'Home Renovation', description: 'Complete carpentry for kitchen, living room, and more.' },
    { title: 'Wood Repairs', description: 'Repair and restore your wooden furniture and fittings.' },
    { title: 'Interior Design Carpentry', description: 'Custom interior solutions for modern homes.' }
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
