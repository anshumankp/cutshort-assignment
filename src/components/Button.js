import './Buttons.css'
import { useThemeContext } from "../hooks/useTheme";
const SUPPORTED_VARIANTS = ["primary", "block"];

const Button = ({ text, variant, onClick }) => {
  const { isDarkMode } = useThemeContext();
  let classNames = [isDarkMode ? "btn dark" : "btn"];
  if (variant) {
    const validVariants = variant
      .split(" ")
      .filter((item) => SUPPORTED_VARIANTS.includes(item));
    validVariants.forEach((item) => classNames.push(`btn-${item}`));
  }

  return (
    <button
      className={classNames.join(" ")}
      onClick={typeof onClick === "function" ? onClick : undefined}
    >
      {text}
    </button>
  );
};

export default Button;
