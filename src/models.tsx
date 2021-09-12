export interface SnackbarModel {
  open: boolean,
  severity: 'error' | 'info' | 'success' | 'warning',
  message: string,
}

export interface Word {
  [word: string]: Replacement
}

export interface Replacement {
  [newWord: string]: number[]
}

/*
Examples:

Excluded word "perfect"
Perfect: { default:[66, 78] }
Simply lists locations of the word

Included word, "Evan"
Evan: { default: [], Chad: [0, 2, 45], Ryan: [4, 8] }
Replaces Evan with Chad at the listed locations. Replaces with Ryan at listed locations.
*/