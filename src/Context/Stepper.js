import React from 'react';
import {Link} from "react-router-dom";

export const StepperContext = React.createContext();

const StepsContext = React.createContext([]);

export const StepBody = ({children}) => {
  const context = React.useContext(StepperContext);
  const {activeStepState} = context;
  return (<div className={`flex flex-col ${activeStepState === 0 ? "flex-1" : ""}`}>
    {children}
  </div>);
}
export const StepLabel = ({children}) => {
  return children;
}

export const StepHeader = ({children}) => {
  const context = React.useContext(StepperContext);
  const {activeStep} = context;
  const childArray = React.Children.toArray(children);

  const headerNew = <div
    className="steps steps-light pt-2 pb-3 mb-5"
  >
    {childArray.length ? React.Children.map(children, (child, index) => {
      const isActive = index <= activeStep;
      return (<Link className={`step-item ${isActive && "active"}`} to={""}>
        <div className="step-progress">
          <span className="step-count">{index + 1}</span>
        </div>
        <div className="step-label">
          {child.props?.image && <i className={child.props.image}/>}
          {child.props?.label}
        </div>
      </Link>)
    }) : null}
  </div>
  return (<>
    <StepsContext.Provider value={children}>
      {headerNew}
      {(children && children.length > activeStep) && children[activeStep]}
    </StepsContext.Provider>
  </>);
}

export const Step = ({children}) => {
  return <>
    {React.Children.map(children, child => {
      if (child.type.name === "StepLabel") {
        return <StepLabel>{child}</StepLabel>;
      } else if (child.type.name === "StepBody") {
        return child;
      } else {
        return null;
      }
    })}
  </>
}
const Stepper = ({children, activeStep}) => {
  return (<StepperContext.Provider value={{activeStep}}>
    {children}
  </StepperContext.Provider>);
};

export default Stepper;