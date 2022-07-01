import { useState, useContext, createContext, useEffect } from "react";

const OnboardingFormContext = createContext();

export const useOnboardingFormContext = () => useContext(OnboardingFormContext);

export const OnboardingFormContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    userName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    usage: "",
  });

  const [errors, setErrors] = useState({});
  const [movingToNextStep, setMovingToNextStep] = useState(false);
  const [onboardingCompleteAndSuccessful, setOnboardingCompleteAndSuccessful] = useState(false);

  function handleKeydown(e) {
    if (e.code === "Enter") {
      gotoNextStep();
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function gotoNextStep() {
    validateFields();
    setMovingToNextStep(true);
  }

  function validateFields() {
    let validationErrors = {};
    switch (step) {
      case 1:
        if (values.userName === "")
          validationErrors.userName = "Username cannot be blank";
        if (values.displayName === "")
          validationErrors.displayName = "Display name cannot be blank";
        break;
      case 2:
        if (values.workspaceName === "")
          validationErrors.workspaceName = "You must provide a workspace name";
        break;
      case 3:
        if (values.usage === "")
          validationErrors.usage = "Please select an option to proceed";
        break;
      case 4:
        //
        break;
      default:
        return;
    }

    Object.keys(validationErrors).length > 0
      ? setErrors(validationErrors)
      : setErrors({});
  }

  useEffect(() => {
    if (movingToNextStep && Object.keys(errors).length === 0) {
      if (step === 4) {
        setOnboardingCompleteAndSuccessful(true);
      } else {
        setStep((prev) => prev + 1);
      }
    }
  }, [movingToNextStep, errors]);

  useEffect(() => {
    setMovingToNextStep(false);
  }, [step]);

  return (
    <OnboardingFormContext.Provider
      value={{
        values,
        handleChange,
        handleKeydown,
        validateFields,
        step,
        errors,
        gotoNextStep,
        onboardingCompleteAndSuccessful,
      }}
    >
      {children}
    </OnboardingFormContext.Provider>
  );
};
