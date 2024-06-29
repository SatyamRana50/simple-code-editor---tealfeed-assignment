import {
  vs,
  darcula,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism"; // Import available themes

// Function to select the appropriate theme based on the prop
export const selectTheme = (theme: string) => {
  switch (theme) {
    case "vs":
      return vs;
    case "darcula":
      return darcula;
    case "atomDark":
      return atomDark;
    default:
      return vs; // Default theme
  }
};

// Function to select the background color based on the theme
export const selectBackgroundColor = (theme: string) => {
  switch (theme) {
    case "vs":
      return "#ffffff"; // White background for VS theme
    case "darcula":
      return "#2b2b2b"; // Dark background for Darcula theme
    case "atomDark":
      return "#1e1e1e"; // Slightly lighter black background for Atom Dark theme
    default:
      return "#ffffff"; // Default to white background
  }
};
// Available languages and themes data
export const availableLanguages = [
  { name: "JavaScript (default)", value: "javascript" },
  { name: "Python", value: "python" },
  { name: "Java", value: "java" },
  { name: "C++", value: "cpp" },
  { name: "Ruby", value: "ruby" },
  { name: "TypeScript", value: "typescript" },
  { name: "Swift", value: "swift" },
  { name: "Go", value: "go" },
  { name: "Rust", value: "rust" },
  { name: "Kotlin", value: "kotlin" },
];
export const availableThemes = [
  { name: "vs (default)", value: "vs" },
  { name: "Darcula", value: "darcula" },
  { name: "AtomDark", value: "atomDark" },
];
