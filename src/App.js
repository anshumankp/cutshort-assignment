import "./App.css";
import Onboarding from "./components/onboarding";
import { OnboardingFormContextProvider } from "./hooks/useOnboardingForm";
import { ThemeContextProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeContextProvider>
      <OnboardingFormContextProvider>
        <Onboarding />
      </OnboardingFormContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
