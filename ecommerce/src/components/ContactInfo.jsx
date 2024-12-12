import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="text-center">
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContactInfo;
