import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Replace with actual backend API later
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">Contact Us</h1>
      
      <form 
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-amber-900"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-amber-900"
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-amber-900 resize-none"
          rows={5}
          required
        ></textarea>
        
        <button 
          type="submit" 
          className="bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
