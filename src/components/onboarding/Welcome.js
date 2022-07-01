import React, { useEffect, useRef } from "react";
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";
import Button from "../Button";

const Welcome = () => {
  const { values, handleChange, gotoNextStep, errors, handleKeydown } =
    useOnboardingFormContext();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div className="form-container">
      <h1 className="text-align-center">Welcome! First things first..</h1>
      <h4 className="text-align-center">You can always change them later.</h4>
      <div className="form-group mx-auto">
        <label htmlFor="username">Username</label>
        <input
          value={values.userName}
          onChange={handleChange}
          name="userName"
          placeholder="Anshuman Kashyap"
          type="text"
          ref={inputRef}
        />
        {errors.userName && (
          <span className="form-error">{errors.userName}</span>
        )}
      </div>
      <div className="form-group mx-auto">
        <label htmlFor="displayName">Display Name</label>
        <input
          value={values.displayName}
          onChange={handleChange}
          name="displayName"
          placeholder="Kp"
          type="text"
        />
        {errors.displayName && (
          <span className="form-error">{errors.displayName}</span>
        )}
      </div>
      <Button
        variant="primary block"
        onClick={gotoNextStep}
        text="Setup Workspace"
      />
    </div>
  );
};

export default Welcome;
