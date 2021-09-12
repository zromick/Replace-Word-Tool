import React from 'react';
import { Grid, Typography, Button, TextareaAutosize } from '@material-ui/core';
import styles from '../styles.module.scss';

export interface ImportExportBodyProps {
  handleImport: () => any,
  handleExport: () => any,
}

const ImportExportBody = (props: ImportExportBodyProps) => {
  const {
    handleExport,
    handleImport,
  } = props;
  return (
    <Grid item container justify="center" xs={12}>
      <Grid item container justify="center" xs={12}>
        <div className={styles.basicMargin}>
          <Grid container item xs={12}>
            <Typography variant="h5">
              Import or Export
            </Typography>
          </Grid>
        </div>
        <Grid item container justify="center" xs={12}>
          <div id='importExportBody' style={{ display: "none" }} className={styles.basicMargin}>
            <TextareaAutosize
              placeholder={
                `Click "Export" to generate a replacement list. Copy it as is. \
									An imported replacement list will add replacement words to an include list for a new body of text. \
									As such, you won't have to remember changing "David" to "Daniel." It will be saved. \
									When imported on a new text, all words in the replacement list will automatically be replaced. \
									Got an import ready? Paste it below and click "Import."`
              }
              id="importTextArea"
              cols={80}
              rowsMin={8}
            />
          </div>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Button
            className={styles.basicMargin}
            color="primary"
            variant="contained"
            onClick={() => handleExport()}
          >
            Export
          </Button>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Button
            className={styles.basicMargin}
            color="primary"
            variant="contained"
            onClick={() => handleImport()}
          >
            Import
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ImportExportBody;
