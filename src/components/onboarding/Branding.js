import { useThemeContext } from "../../hooks/useTheme";

const Branding = () => {
  const { toggleDarkMode } = useThemeContext();
  return (
    <div className="heading">
      <img className="logo" src="/images/eden-logo.png" alt="Eden Logo" />
      <span className="title">Eden</span>
      <button style={{ display: 'none' }} type='button' onClick={toggleDarkMode}>
      </button>
    </div>
  );
};

export default Branding;
