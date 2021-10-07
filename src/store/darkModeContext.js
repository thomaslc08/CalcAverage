import React, { useState } from "react";

const DarkModeContext = React.createContext({
  isDark: false,
  toggleDarkMode: () => {},
});

export const DarkModeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = (inputText) => {};
  return (
    <DarkModeContext.Provider
      value={{
        isDark: isDark,
        toggleDarkMode: toggleDarkMode,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
