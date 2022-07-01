import './StepIndicator.css'
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";

const StepIndicator = () => {
  const { step } = useOnboardingFormContext();
  return (
    <div className="steps-indicator__container">
      <div className="steps-indicator__progress-bar">
        <div
          style={{
            width:
              step === 1
                ? "17%"
                : step === 2
                ? "50%"
                : step === 3
                ? "85%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="steps-indicator__indicator">
        <span className="indicator active">1</span>
        <span className={`indicator ${step >= 2 && "active"} `}>2</span>
        <span className={`indicator ${step >= 3 && "active"} `}>3</span>
        <span className={`indicator ${step >= 4 && "active"} `}>4</span>
      </div>
    </div>
  );
};

export default StepIndicator;
