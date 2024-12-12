import React, { useState } from "react";

const ContactForm = () => {
  const [details, setDetails] = useState({
    yourName: "",
    yourEmail: "",
    yourMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent browser default
    e.preventDefault();
    if (
      details.yourName === "" ||
      details.yourEmail === "" ||
      details.yourMessage === ""
    ) {
      alert("All Fields are required");
    } else {
      console.log(details);
      setDetails({
        yourName: "",
        yourEmail: "",
        yourMessage: "",
      });
    }
  };

  return (
    <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
      <input
        name="yourName"
        value={details.yourName}
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border rounded-md"
        onChange={handleChange}
      />
      <input
        name="yourEmail"
        value={details.yourEmail}
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border rounded-md"
        onChange={handleChange}
      />
      <textarea
        name="yourMessage"
        value={details.yourMessage}
        placeholder="Your Message"
        rows="4"
        className="w-full px-4 py-2 border rounded-md"
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
