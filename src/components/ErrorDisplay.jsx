import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function ErrorDisplay({ setErrors }) {
  const { formData } = useContext(GlobalContext);

  useEffect(() => {
    validateInputs();
  }, [formData]);

  function validateInputs() {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Contact name is required";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Contact phone number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should only contain digits";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors); // Update parent component with new errors
  }

  return null; // This component does not need to render anything
}

export default ErrorDisplay;
