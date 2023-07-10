import React from "react";
import image404 from "../../public/images/image_processing20211110-16422-1ieyfnh.jpg";

const NotFound404 = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${image404})` }}
      className="w-full h-full"
      ></div>
    </div>
  );
};

export default NotFound404;
