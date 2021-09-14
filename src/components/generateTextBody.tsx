import React, { Dispatch, SetStateAction } from 'react';
import {
  Grid,
  Typography,
  Button,
  TextareaAutosize,
} from '@material-ui/core';
import { SnackbarModel } from '../models';
import styles from '../styles.module.scss';

export interface GenerateTextBodyProps {
  replaceAllIncludedWords: () => void,
  setSnackbar: Dispatch<SetStateAction<SnackbarModel>>,
}

const GenerateTextBody = (props: GenerateTextBodyProps) => {
  const {
    replaceAllIncludedWords,
    setSnackbar,
  } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Generate Text
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.introSpacing}>
          <Typography variant="body1" >
            Click "Replace" to generate a new body of text using your replacement words.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.introSpacing}>
          <Typography variant="body1" >
            Click "Copy" to copy the new text to clipboard.
          </Typography>
        </div>
      </Grid>
      <Grid item container justify="center" xs={12} id='GenerateTextBody'>
        <Grid item container justify="center" xs={12}>
          <TextareaAutosize
            className={styles.basicMargin}
            id="finalTextArea"
            cols={80}
            rowsMin={8}
          />
        </Grid>
        <Grid item container justify="space-between" xs={12}>
          <div className={styles.introMargin}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                replaceAllIncludedWords();
                setSnackbar({ open: true, message: `Your input text has been replaced above!`, severity: 'success' });
              }}
            >
              Replace
            </Button>
          </div>
          <div className={styles.introMargin}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                const finalTextArea = document.getElementById('finalTextArea') as HTMLTextAreaElement;;
                navigator.clipboard.writeText(finalTextArea.value);
                setSnackbar({ open: true, message: `The generated text has been copied to clipboard!`, severity: 'success' });
              }}
            >
              Copy
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GenerateTextBody;