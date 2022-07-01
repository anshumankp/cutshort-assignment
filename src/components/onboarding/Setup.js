import { useRef, useEffect } from "react";
import { useOnboardingFormContext } from "../../hooks/useOnboardingForm";
import Button from "../Button";

const Setup = () => {
  const { values, handleChange, handleKeydown, gotoNextStep, errors } =
    useOnboardingFormContext();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return (
    <div className="form-container">
      <h1 className="text-align-center">Let's setup a home for all your work.</h1>
      <h4 className="text-align-center">You can always create another workspace later.</h4>
      <div className="form-group mx-auto">
        <label htmlFor="workspaceName">Workspace Name</label>
        <input
          value={values.workspaceName}
          onChange={handleChange}
          name="workspaceName"
          placeholder="Cutshort"
          type="text"
          ref={inputRef}
        />
        {errors.workspaceName && (
          <span className="form-error">{errors.workspaceName}</span>
        )}
      </div>
      <div className="form-group mx-auto">
        <label htmlFor="workspaceUrl">
          Workspace URL<span style={{ color: "lightgrey" }}>(optional)</span>
        </label>
        <input
          value={values.workspaceUrl}
          onChange={handleChange}
          name="workspaceUrl"
          placeholder="Example"
          type="text"
        />
      </div>
      <Button
        variant="primary block"
        onClick={gotoNextStep}
        text="Plan Workspace"
      />
    </div>
  );
};

export default Setup;
