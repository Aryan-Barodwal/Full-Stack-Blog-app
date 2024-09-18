import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// useNavigate :- usenavigate hm islie use karte ha jisse hm user ko kisi or jagah navigate kar paye!

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); //Ye hame InitialState deta ha auth ki!!!

  useEffect(() => {
    // TODO: Make it more easy to understand!!
    // if (authStatus === true) {
    //   navigate("/")
    // }
    // else if(
    //   navigate("/login")
    // )

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloader(false);

    
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
