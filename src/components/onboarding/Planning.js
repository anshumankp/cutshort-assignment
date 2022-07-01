import { useEffect } from "react";
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";
import SelfIcon from '../../assets/images/self.png';
import TeamIcon from '../../assets/images/team.png'
import Button from "../Button";

const Planning = () => {
  const { values, errors, handleChange, handleKeydown, gotoNextStep } =
    useOnboardingFormContext();

    useEffect(() => {
      window.addEventListener("keydown", handleKeydown);
  
      return () => window.removeEventListener("keydown", handleKeydown);
    }, [handleKeydown]);

  return (
    <div className="form-container">
      <h1 className="text-align-center">How are you planning to use Eden?</h1>
      <h4 className="text-align-center">
        We'll streamline your setup experience accordingly.
      </h4>
      <div className="radio-group mx-auto">
        <div className="form-group">
          <input
            onChange={handleChange}
            name="usage"
            value="self"
            id="self"
            type="radio"
            checked={values.usage === "self"}
          />
          <label htmlFor="self">
            <img src={SelfIcon} alt="self" className="radio-icon" />
            <div className="title">For myself</div>
            <p className="desc">
              Write better. Think more clearly. Stay organized.
            </p>
          </label>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="usage"
            value="team"
            type="radio"
            id="team"
            checked={values.usage === "team"}
          />
          <label htmlFor="team">
            <img src={TeamIcon} alt="team" className="radio-icon" />
            <div className="title">With my team</div>
            <p className="desc">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </label>
        </div>
      </div>
      {errors.usage && (
        <span
          className="form-error mx-auto"
          style={{ display: "block", marginBottom: 15, maxWidth: 320 }}
        >
          {errors.usage}
        </span>
      )}

      <Button
        variant="primary block"
        onClick={gotoNextStep}
        text="Create Workspace"
      />
    </div>
  );
};

export default Planning;
