import React from "react";
import "./orderBtn.css";
import { useNavigate, useLocation } from "react-router-dom";

function OrderBtn({ text }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const currentPath = location.pathname;
    const nextPath = currentPath === "/order" ? "/tickets" : "/order";
    navigate(nextPath);
    console.log("Navigated to:", nextPath);
  };

  return (
    <button className="order-btn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default OrderBtn;
