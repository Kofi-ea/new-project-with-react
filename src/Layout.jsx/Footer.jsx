import React from "react";

const Footer = () => {
  const today = new Date();
  const myDate = today.getFullYear();

  return (
    <div className="Footer">
      <h2>Copyright &copy; {myDate}</h2>
    </div>
  );
};

export default Footer;
