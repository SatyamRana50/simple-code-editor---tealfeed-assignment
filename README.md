
# Code Editor

A powerful and customizable code editor built with React and Prism React Renderer library. This project allows you to write, edit, copy, and download code snippets in various programming languages with syntax highlighting and theming options.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
  - [Select a Language](#select-a-language)
  - [Select a Theme](#select-a-theme)
  - [Write Code](#write-code)
  - [Copy Code](#copy-code)
  - [Download Code](#download-code)
- [Components](#components)
  - [CodeEditorWrapper](#codeeditorwrapper)
  - [Header](#header)
  - [CodeEditor](#codeeditor)
  - [Footer](#footer)
  - [Button](#button)
  - [DropdownField](#dropdownfield)
- [Contributing](#contributing)
- [License](#license)

## Features

- Syntax highlighting using Prism React Renderer
- Language selection
- Theme selection
- Copy code to clipboard
- Download code as a text file

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/code-editor.git
   cd code-editor
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

   or

   \`\`\`bash
   yarn install
   \`\`\`

### Running the Project

Start the development server:

\`\`\`bash
npm start
\`\`\`

or

\`\`\`bash
yarn start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

\`\`\`
code-editor/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── CodeEditor.tsx
│   │   ├── CodeEditorWrapper.tsx
│   │   ├── DropdownField.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── helpers.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── README.md
├── package.json
└── ...
\`\`\`

## Available Scripts

In the project directory, you can run:

- \`npm start\` or \`yarn start\`: Runs the app in development mode.
- \`npm run build\` or \`yarn build\`: Builds the app for production.
- \`npm test\` or \`yarn test\`: Launches the test runner.

## Usage

### Select a Language

Use the dropdown in the header to select the programming language for syntax highlighting.

### Select a Theme

Use the dropdown in the header to choose a theme for the code editor.

### Write Code

Enter your code in the textarea provided in the CodeEditor component.

### Copy Code

Click the "Copy" button in the header to copy the code to your clipboard.

### Download Code

Click the "Download" button in the header to download the code as a text file.

## Components

### CodeEditorWrapper

The main wrapper component that holds the \`Header\`, \`CodeEditor\`, and \`Footer\` components. It manages the state for the selected language, theme, and code.

### Header

Contains dropdowns for selecting the language and theme, as well as buttons for copying and downloading the code.

### CodeEditor

The main code editor component where users write and edit their code. It uses Prism React Renderer for syntax highlighting.

### Footer

A simple footer component.

### Button

A reusable button component.

### DropdownField

A reusable dropdown component.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/your-feature-name\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add some feature'\`).
5. Push to the branch (\`git push origin feature/your-feature-name\`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
