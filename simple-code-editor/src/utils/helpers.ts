import { themes } from "prism-react-renderer";

// Function to select the appropriate theme based on the prop
export const selectTheme = (theme: string) => {
  switch (theme) {
    case "dracula":
      return themes.dracula;
    case "duotoneDark":
      return themes.duotoneDark;
    case "duotoneLight":
      return themes.duotoneLight;
    case "github":
      return themes.github;
    case "jettwaveDark":
      return themes.jettwaveDark;
    case "jettwaveLight":
      return themes.jettwaveLight;
    case "nightOwl":
      return themes.nightOwl;
    case "nightOwlLight":
      return themes.nightOwlLight;
    case "oceanicNext":
      return themes.oceanicNext;
    case "okaidia":
      return themes.okaidia;
    case "oneDark":
      return themes.oneDark;
    case "oneLight":
      return themes.oneLight;
    case "palenight":
      return themes.palenight;
    case "shadesOfPurple":
      return themes.shadesOfPurple;
    case "synthwave84":
      return themes.synthwave84;
    case "ultramin":
      return themes.ultramin;
    case "vsDark":
      return themes.vsDark;
    case "vsLight":
      return themes.vsLight;
    default:
      return themes.vsLight; // Default theme
  }
};

// Function to select the background color based on the theme
export const selectBackgroundColor = (theme: string) => {
  switch (theme) {
    case "dracula":
      return "#282a36";
    case "duotoneDark":
      return "#2a2734";
    case "duotoneLight":
      return "#faf8f5";
    case "github":
      return "#F6F8FA";
    case "jettwaveDark":
      return "#011627";
    case "jettwaveLight":
      return "#F1F5F9";
    case "nightOwl":
      return "#011627";
    case "nightOwlLight":
      return "#fbfbfb";
    case "oceanicNext":
      return "#282C34";
    case "okaidia":
      return "#272822";
    case "oneDark":
      return "#282c34";
    case "oneLight":
      return "#fafafa";
    case "palenight":
      return "#292d3e";
    case "shadesOfPurple":
      return "#2d2b55";
    case "synthwave84":
      return "#2E2E8F0";
    case "ultramin":
      return "#FFFFFF";
    case "vsDark":
      return "#1e1e1e";
    case "vsLight":
      return "#ffffff";
    default:
      return "#ffffff"; // Default to white background
  }
};

// Available languages and themes data
export const availableLanguages = [
  { name: "JSX(default)", value: "jsx" },
  { name: "TSX", value: "tsx" },
  { name: "Swift", value: "swift" },
  { name: "Kotlin", value: "kotlin" },
  { name: "Objective-C", value: "objectivec" },
  { name: "JavaScript Extras", value: "js-extras" },
  { name: "Reason", value: "reason" },
  { name: "Rust", value: "rust" },
  { name: "GraphQL", value: "graphql" },
  { name: "YAML", value: "yaml" },
  { name: "Go", value: "go" },
  { name: "C++", value: "cpp" },
  { name: "Markdown", value: "markdown" },
];

export const availableThemes = [
  { name: "VS Light", value: "vsLight" },
  { name: "VS Dark(default)", value: "vsDark" },
  { name: "Dracula", value: "dracula" },
  { name: "Duotone Dark", value: "duotoneDark" },
  { name: "Duotone Light", value: "duotoneLight" },
  { name: "GitHub", value: "github" },
  { name: "Jettwave Dark", value: "jettwaveDark" },
  { name: "Jettwave Light", value: "jettwaveLight" },
  { name: "Night Owl", value: "nightOwl" },
  { name: "Night Owl Light", value: "nightOwlLight" },
  { name: "Oceanic Next", value: "oceanicNext" },
  { name: "Okaidia", value: "okaidia" },
  { name: "One Dark", value: "oneDark" },
  { name: "One Light", value: "oneLight" },
  { name: "Palenight", value: "palenight" },
  { name: "Shades of Purple", value: "shadesOfPurple" },
  { name: "Synthwave '84", value: "synthwave84" },
  { name: "Ultramin", value: "ultramin" },
  
];
