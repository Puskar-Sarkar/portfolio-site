import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent! (This is a demo)");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <input type="text" placeholder="Your Name" required className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />
      <input type="email" placeholder="Your Email" required className="w-full p-2 mb-3 rounded bg-gray-700 text-white" />
      <textarea placeholder="Your Message" required rows="4" className="w-full p-2 mb-3 rounded bg-gray-700 text-white"></textarea>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
        Send
      </button>
      <p className="mt-3 text-sm text-gray-400">{status}</p>
    </form>
  );
}