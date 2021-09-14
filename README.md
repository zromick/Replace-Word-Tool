## Replace Word Tool

Hi! Welcome to a passion project of mine. This app is built using TypeScript, React, and Material-UI and is hosted on GitHub Pages.

This app allows for global, one-time replacement of words within a body of text.

Other useful features:
* Visualize word frequency by providing every context in which a word appears throughout a text.
* Identify and change redundant vocabulary.
* Isolates proper nouns and spelling errors. (See example below)

## Workflow Example: Mask Identities in a Published Article

Changing names from this excerpt:

"It's the best way to treat infections,” said *Gerald Jang*, associate professor in the Department of Biochemistry and Biophysics at *Winthrup* University. *Jang* works with Dr. *Corbella*, one of the principal investigators in the research study.

To:

"It's the best way to treat infections,” said *Henry Williams*, associate professor in the Department of Biochemistry and Biophysics at *Darnell* University. *Williams* works with Dr. *Diamond*, one of the principal investigators in the research study.

#### Step 1: INTRODUCTION. Click "Next" to begin.

![Introduction Example](public/images/intro-1.png "Introduction")

#### Step 2: INPUT TEXT. Add the text that will be replaced. Check the box next to "Automatically Ignore Words in the Official Scrabble Player's Dictionary" to isolate proper nouns. Click "Next" to continue.

![Input Text Example](public/images/inputText-1.png "Input Text")

#### Step 3: MANAGE WORDS. Use the pagination system to view and replace your words. The "Replacing" section already contains the proper nouns in your text (words not found in the Scrabble Dictionary). For each word you would like to replace, click the "+" icon under it and type a replacement word. Click "Next" to continue.

![Manage Words Example](public/images/manageWords-1.png "Manage Words")

![Manage Words Example](public/images/manageWords-2.png "Manage Words")

#### Step 4: GENERATE TEXT. Click "Replace" to generate output text. Click "Copy" to copy the result to clipboard.

![Generate Text Example](public/images/generateText-1.png "Generate Text")