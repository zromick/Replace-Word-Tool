import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ReplaceWizardSteps from './replaceWizardSteps';

interface ReplaceWizardProgressBarProps {
  step: ReplaceWizardSteps;
}

const ReplaceWizardProgressBar = (props: ReplaceWizardProgressBarProps) => {
  const { step } = props;
  const steps = ['Introduction', 'Input Text', 'Manage Words', 'Generate Text'];

  return (
    <div>
      <Stepper
        activeStep={step}
        alternativeLabel
        style={{ backgroundColor: 'transparent' }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ReplaceWizardProgressBar;