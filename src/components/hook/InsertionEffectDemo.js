import { useInsertionEffect, useState } from "react";

const getsColorsFor = (theme) => {
    if (theme === "light") {
      return { color: "black", bgColor: "white" };
    }
    return { color: "white", bgColor: "black" };
  };

let buttonColor = "";
let buttonBgColor = "";

const getStyleRule = () => {
    const styleElement = document.createElement("style");
    const rule = `
      .theme-button {
        color: ${buttonColor};
        background-color: ${buttonBgColor};
        padding: 1rem;
        border: 1px solid black;
        border-radius: 0.25rem;
        cursor: pointer;
        margin: auto;
    `;
    styleElement.innerHTML = rule;
    return styleElement;
};

export default function InsertionEffectDemo()
{
    const [theme,setTheme] = useState('dark');

    useInsertionEffect(() => {
        const { color, bgColor } = getsColorsFor(theme);
        let styleRule = null;
        if (color !== buttonColor || bgColor !== buttonBgColor) {
        buttonColor = color;
        buttonBgColor = bgColor;
        styleRule = getStyleRule();
        document.head.appendChild(styleRule);
        }

        return () => {
        if (!styleRule) {
            return;
        }
        document.head.removeChild(styleRule);
        };
  }, [theme]);

    // const changeHandler = () => {   
    //     console.log('change Handler');
    // }

    const onThemeChange = () => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };

    console.log('render');
    return(
        <div>
            Insertion Theme {theme}
            <button type={'button'}
                    className="theme-button"
                    onClick={onThemeChange}>
                        Change
            </button>
        </div>
    );
}