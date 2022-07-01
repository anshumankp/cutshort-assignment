import StepIndicator from "./StepIndicator";
import ActiveForm from "./ActiveForm";
import Branding from "./Branding";
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";
import Success from "./Success";

const Onboarding = () => {
  const { onboardingCompleteAndSuccessful } = useOnboardingFormContext();
  return (
    <div className="container">
      {!onboardingCompleteAndSuccessful ? (
        <>
          <Branding />
          <StepIndicator />
          <ActiveForm />
        </>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Onboarding;
