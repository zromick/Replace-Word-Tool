import React, { Dispatch, SetStateAction } from 'react';
import {
  Grid,
  TextareaAutosize,
  Typography,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import styles from '../styles.module.scss';

export interface InputTextBodyProps {
  sortWords: () => void,
  setAutoExcludeOSPD: Dispatch<SetStateAction<boolean>>,
  autoExcludeOSPD: boolean,
}

const InputTextBody = (props: InputTextBodyProps) => {
  const {
    sortWords,
    setAutoExcludeOSPD,
    autoExcludeOSPD }
    = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Input Text
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.introSpacing}>
          <Typography variant="body1" >
            Enter a body of text below, or type one. Try pasting an <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noopener noreferrer">article</a> or <a href="https://www.azlyrics.com/lyrics/queen/bohemianrhapsody.html" target="_blank" rel="noopener noreferrer">song lyrics</a>.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.introSpacing}>
          <Typography variant="body1" >
            The input text you provide will be sorted on the next page.
          </Typography>
        </div>
      </Grid>
      <div id='pasteTextBody'>
        <Grid item container justify="center" xs={12}>
          <TextareaAutosize
            id="userTextArea"
            cols={80}
            rowsMin={8}
            onChange={() => sortWords()}
          />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <div className={styles.basicMargin}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={autoExcludeOSPD}
                  onChange={(event) => setAutoExcludeOSPD(event.target.checked)}
                  color="primary"
                />
              }
              label="Automatically Ignore Words in the Official Scrabble Players Dictionary*"
            />
          </div>
        </Grid>
      </div>
      <Grid item xs={12}>
        <div className={styles.introSpacing}>
          <Typography variant="body1" >
            *This feature is useful if you want to change names or spelling errors within your text.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default InputTextBody;