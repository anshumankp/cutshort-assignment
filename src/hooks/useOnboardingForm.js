import { useState, useContext, createContext, useEffect } from "react";

const formHeadingInfo = [
  {
    step: 1,
    title: "Welcome! First things first..",
    subTitle: "You can always change them later.",
  },
  {
    step: 2,
    title: "Let's set up a home for all your work",
    subTitle: "You can always change create another workspace later.",
  },
  {
    step: 3,
    title: "How are you planning to use Eden?",
    subTitle: "We'll streamline your setup experience accordingly.",
  },
  {
    step: 4,
    title: "Congratulations, Eren!",
    subTitle: "You have completed onboarding, you can start using the Eden.",
  },
];

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
        formHeadingInfo,
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
