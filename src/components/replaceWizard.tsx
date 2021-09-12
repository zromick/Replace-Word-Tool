import React, { Dispatch, SetStateAction } from 'react';
import { Grid, Paper, Button, Box } from '@material-ui/core';
import { Word, SnackbarModel } from '../models';
import ReplaceWizardProgressBar from './replaceWizardProgressBar';
import ReplaceWizardSteps from './replaceWizardSteps';
import TitleBody from './titleBody';
import IntroductionBody from './introductionBody';
import InputTextBody from './inputTextBody';
import ManageWordsBody from './manageWordsBody';
import GenerateTextBody from './generateTextBody';
import GlobalSnackbar from './globalSnackbar';
import styles from '../styles.module.scss';

export interface ReplaceWizardProps {
  sortWords: () => void,
  sortByFrequency: () => void,
  sortAlphabetically: () => void,
  handleImport: () => void,
  handleExport: () => void,
  handleIncludeWord: (word: Word) => void,
  handleExcludeWord: (word: Word) => void,
  replaceAllIncludedWords: () => void,
  addReplacementWord: (key: string, replacementWord: string, wordIndeces: number[]) => void,
  updateReplacementWord: (key: string, oldReplacement: string, newReplacement: string) => void,
  setCopied: Dispatch<SetStateAction<boolean>>,
  setTransferToReplacing: Dispatch<SetStateAction<boolean>>,
  setTransferToIgnoring: Dispatch<SetStateAction<boolean>>,
  setSnackbar: Dispatch<SetStateAction<SnackbarModel>>,
  setAutoExcludeOSPD: Dispatch<SetStateAction<boolean>>,
  handleNext: (step: ReplaceWizardSteps) => void;
  handlePrevious: (step: ReplaceWizardSteps) => void;
  handleCancel: () => void;
  nextDisabled: boolean;
  previousDisabled: boolean;
  currentStep: ReplaceWizardSteps;
  excludedWords: Word[],
  includedWords: Word[],
  allWordsRaw: string[];
  copied: boolean,
  transferToReplacing: boolean,
  transferToIgnoring: boolean,
  snackbar: SnackbarModel,
  autoExcludeOSPD: boolean,
}

const ReplaceWizard = (props: ReplaceWizardProps) => {
  const {
    sortWords,
    // sortByFrequency,
    // sortAlphabetically,
    // handleImport,
    // handleExport,
    handleExcludeWord,
    handleIncludeWord,
    replaceAllIncludedWords,
    addReplacementWord,
    updateReplacementWord,
    setCopied,
    setTransferToReplacing,
    setTransferToIgnoring,
    setSnackbar,
    setAutoExcludeOSPD,
    handleNext,
    handlePrevious,
    handleCancel,
    nextDisabled,
    previousDisabled,
    currentStep,
    excludedWords,
    includedWords,
    allWordsRaw,
    copied,
    transferToReplacing,
    transferToIgnoring,
    snackbar,
    autoExcludeOSPD,
  } = props;
  return (
    <div>
      <Grid className={styles.components} container spacing={3}>
        <Grid container item xs={10} justify="center">
          <Grid item>
            <Paper elevation={2} className={styles.paper}>
              <TitleBody />
              <div className={styles.progressBar}>
                <ReplaceWizardProgressBar step={currentStep} />
              </div>
              {currentStep === ReplaceWizardSteps.INTRODUCTION && (
                <IntroductionBody />
              )}
              {currentStep === ReplaceWizardSteps.INPUT_TEXT && (
                <InputTextBody
                  sortWords={sortWords}
                  setAutoExcludeOSPD={setAutoExcludeOSPD}
                  autoExcludeOSPD={autoExcludeOSPD}
                />
              )}
              {currentStep === ReplaceWizardSteps.MANAGE_WORDS && (
                <ManageWordsBody
                  handleExcludeWord={handleExcludeWord}
                  handleIncludeWord={handleIncludeWord}
                  addReplacementWord={addReplacementWord}
                  updateReplacementWord={updateReplacementWord}
                  setTransferToReplacing={setTransferToReplacing}
                  setTransferToIgnoring={setTransferToIgnoring}
                  setSnackbar={setSnackbar}
                  excludedWords={excludedWords}
                  includedWords={includedWords}
                  allWordsRaw={allWordsRaw}
                  transferToReplacing={transferToReplacing}
                  transferToIgnoring={transferToIgnoring}
                />
              )}
              {currentStep === ReplaceWizardSteps.GENERATE_TEXT && (
                <GenerateTextBody
                  replaceAllIncludedWords={replaceAllIncludedWords}
                  setSnackbar={setSnackbar}
                  setCopied={setCopied}
                  copied={copied}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={10} justify="center">
          <Grid item>
            <Box className={styles.buttonBox}>
              <Grid container xs={12} justify="space-between">
                <Grid item>
                  <Button
                    onClick={() => handleCancel()}
                    variant="contained"
                    color="primary"
                  >
                    Start Over
                  </Button>
                </Grid>
                <Grid item>
                  <Grid container>
                    <div className={styles.buttonMargin}>
                      <Button
                        onClick={() => handlePrevious(currentStep)}
                        variant="contained"
                        color="primary"
                        disabled={previousDisabled}
                      >
                        Previous
                      </Button>
                    </div>
                    <Button
                      onClick={() => handleNext(currentStep)}
                      variant="contained"
                      color="primary"
                      disabled={nextDisabled}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <GlobalSnackbar
        setSnackbar={setSnackbar}
        snackbar={snackbar}
      />
    </div>
  );
};

export default ReplaceWizard;
