import { Highlight } from "prism-react-renderer";
import { selectTheme } from "../../utils/helpers";

interface HighlighterProps {
    code: string;  
    language: string;
    theme: string;
}
export const Highlighter: React.FC<HighlighterProps> = ({
    code,
    language,
    theme,
}) => {
    return(
        <div>
             <Highlight theme={selectTheme(theme)} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
        </div>
    )
}