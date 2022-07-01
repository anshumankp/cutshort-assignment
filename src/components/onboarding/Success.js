import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";

const Success = () => {
  const { values } = useOnboardingFormContext();
  return (
    <div>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default Success;
