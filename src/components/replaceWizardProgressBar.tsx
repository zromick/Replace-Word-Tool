import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
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