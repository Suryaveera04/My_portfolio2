import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  contact: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (form.name && form.contact && form.message) {
      const templateParams = {
        from_name: form.name,
        from_email: form.contact,
        message: form.message
      };

      emailjs.send('service_5gvrv2c', 'template_2dl65fp', templateParams, 'mVOjOyHLgyVQVFv6b')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setForm({ name: '', contact: '', message: '' });
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contact"
            placeholder="Email / Phone *"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message *"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="send-btn">
          SEND ▶
        </button>
      </form>
    </div>
  );
}
