import './Forms.css'
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";
import FinalStep from "./FinalStep";
import Planning from "./Planning";
import Setup from "./Setup";
import Success from "./Success";
import Welcome from "./Welcome";

const ActiveForm = () => {
  const { step } = useOnboardingFormContext();
  function getActiveForm() {
    switch (step) {
      case 1:
        return <Welcome />;
      case 2:
        return <Setup />;
      case 3:
        return <Planning />;
      case 4:
        return <FinalStep />;
      default:
        return <Success />;
    }
  }

  return <>{getActiveForm()}</>;
};

export default ActiveForm;
