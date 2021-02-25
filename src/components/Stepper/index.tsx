import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import styled from 'styled-components';

export type VerticalLinearStepperProps = {
  steps: string[];
};

export default function VerticalLinearStepper({
  steps
}: VerticalLinearStepperProps) {
  const [activeStep, setActiveStep] = React.useState(steps.length - 1);

  const handleNext = () => {
    setActiveStep((previousActiveStep) => previousActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((previousActiveStep) => previousActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="right-side">
      <BillStepper
        // @ts-expect-error
        style={style}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              style={stepLabelStyles}
              StepIconProps={{completed: false}}
              classes={{
                active: 'stepper'
              }}
              onClick={() => {
                setActiveStep(index);
              }}
            >
              <span className="stepLabel">{label}</span>
            </StepLabel>
            <StepContent>
              <span className="stepContent">{label}</span>
            </StepContent>
          </Step>
        ))}
      </BillStepper>
    </div>
  );
}

const BillStepper = styled(Stepper)`
  min-width: 270px;
  max-width: 20vw;

  .stepper {
    background: var(--color-background);
    color: var(--color-text);
  }

  .stepLabel {
    background: var(--color-background);
    color: var(--color-text);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: concourse_t4;
  }

  .stepContent {
    background: var(--color-background);
    color: var(--color-text);
    font-family: concourse_t2;
  }

  .MuiStepIcon-root.MuiStepIcon-active {
    fill: var(--color-secondary);
  }

  .MuiStepIcon-text {
    fill: var(--color-text);
  }

  .MuiSvgIcon-root {
    border: thin solid var(--color-secondary);
    border-radius: 100%;
    fill: transparent;
  }
`;

const stepLabelStyles = {
  background: 'var(--color-background)',
  color: 'var(--color-text)'
};

const style = {
  background: 'var(--color-background)',
  color: 'var(--color-text)',
  flexDirection: 'column-reverse'
};
