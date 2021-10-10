import React, { useState } from "react";

const DarkModeContext = React.createContext({
  isDark: false,
  setDark: (boolean) => {},
});

export const DarkModeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);

  return (
    <DarkModeContext.Provider
      value={{
        isDark: isDark,
        setDark: setIsDark,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
