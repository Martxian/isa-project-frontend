// src/components/VerifyRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifySignature } from "../utils/verification";

export function VerifyRoute({ children }) {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      const signature = localStorage.getItem("signature");
      const payload = `${window.location.pathname}`;
      if (!signature || !(await verifySignature(signature, payload))) {
        navigate("/login");
      } else {
        setIsVerified(true);
      }
    };
    verify();
  }, [navigate]);

  return isVerified ? children : null;
}
