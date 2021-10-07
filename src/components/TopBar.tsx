import styled from "styled-components";
import { useContext, useState } from "react";
import { DarkModeOutlined } from "@mui/icons-material";
import DarkModeContext from "../store/darkModeContext";

// const darkModeCtx = useContext(DarkModeContext);

const StyledTopBar = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 2rem;
`;

const Button = styled.button`
  background: transparent;
  border: none;
`;

const TopBar = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const handleClick = () => {
    if (!isDarkMode) {
      setisDarkMode(true);
    } else setisDarkMode(false);
  };

  return (
    <StyledTopBar>
      <Button onClick={handleClick}>
        <DarkModeOutlined
          sx={{ fontSize: 30, color: isDarkMode ? "white" : "black" }}
        />
      </Button>
    </StyledTopBar>
  );
};

export default TopBar;
