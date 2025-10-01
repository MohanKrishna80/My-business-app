import React from "react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    alert("Message sent!");
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-900 text-center">
        Contact Us
      </h1>

      <form
        className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className={`w-full border rounded-lg p-2 focus:outline-amber-900 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full border rounded-lg p-2 focus:outline-amber-900 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <textarea
          placeholder="Your Message"
          rows={5}
          {...register("message", { required: "Message is required" })}
          className={`w-full border rounded-lg p-2 focus:outline-amber-900 resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
