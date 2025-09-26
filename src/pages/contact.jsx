import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); 
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-900 text-center">
        Contact Us
      </h1>

      <form
        className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-amber-900"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-amber-900"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-amber-900 resize-none"
          rows={5}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
