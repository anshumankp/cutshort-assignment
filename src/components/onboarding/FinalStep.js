import { useEffect } from "react";
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";
import Button from "../Button";

const FinalStep = () => {
  const { values, gotoNextStep, handleKeydown } = useOnboardingFormContext();

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div className="form-container">
      <div className="circle mx-auto">
        <div className="checkmark"></div>
      </div>
      <h1 className="text-align-center">
        Congratulations, {values?.displayName}!
      </h1>
      <h4 className="text-align-center">
        You have completed onboarding, you can start using the Eden!
      </h4>

      <Button
        variant="primary block"
        onClick={gotoNextStep}
        text="Launch Eden"
      />
    </div>
  );
};

export default FinalStep;
