import React, { Dispatch, SetStateAction } from 'react';
import { Snackbar } from '@material-ui/core';
import { SnackbarModel } from '../models';
import { Alert } from '@material-ui/lab';

export interface GlobalSnackbarProps {
  setSnackbar: Dispatch<SetStateAction<SnackbarModel>>,
  snackbar: SnackbarModel
}

const GlobalSnackbar = (props: GlobalSnackbarProps) => {
  const {
    setSnackbar,
    snackbar
  } = props;
  return (
    snackbar.open ?
      <Snackbar
        open={snackbar.open}
        autoHideDuration={10000}
        onClose={() => setSnackbar({ open: false, message: '', severity: 'error' })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      : <></>
  )
}

export default GlobalSnackbar;