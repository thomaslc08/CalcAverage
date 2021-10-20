import React, { useState } from "react";

const DarkModeContext = React.createContext({
  isDark: false,
  setDark: (boolean) => {},
});

export const DarkModeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  const setDark = (props) => {
    setIsDark(props);
    localStorage.setItem("darkMode", `${props}`);
  };
  return (
    <DarkModeContext.Provider
      value={{
        isDark: isDark,
        setDark: setDark,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
