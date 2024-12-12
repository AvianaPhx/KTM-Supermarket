import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="flex-grow p-8">
      <h1 className="text-2xl font-bold mb-4">Point of Contact</h1>
      <p className="mb-8">We are here for you!</p>
      <div className="flex flex-wrap justify-around gap-6 my-8">
        <ContactInfo icon={faMapMarkerAlt} title="Location" content="+Abc, XYZ" />
        <ContactInfo icon={faEnvelope} title="Email" content="abc@gmail.com" />
        <ContactInfo icon={faPhone} title="Phone" content="+123456789" />
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
