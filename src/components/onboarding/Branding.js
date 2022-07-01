import { useThemeContext } from "../../hooks/useTheme";
import Logo from '../../assets/images/eden-logo.png'

const Branding = () => {
  const { toggleDarkMode } = useThemeContext();
  return (
    <div className="heading">
      <img className="logo" src={Logo} alt="Eden Logo" />
      <span className="title">Eden</span>
      <button style={{ display: 'none' }} type='button' onClick={toggleDarkMode}>
      </button>
    </div>
  );
};

export default Branding;
