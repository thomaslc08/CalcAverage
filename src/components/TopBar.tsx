import styled from "styled-components";
import { useContext, useState } from "react";
import { DarkModeOutlined } from "@mui/icons-material";
import DarkModeContext from "../store/darkModeContext";

// const darkModeCtx = useContext(DarkModeContext);

const StyledTopBar = styled.div`
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  /* flex-direction: row-reverse; */
  padding: 2rem 0;
  align-items: center;

  h1 {
    flex: 1;
    font-weight: 700;
    font-size: 2rem;
    /* font-family: "Futura"; */
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
`;

const TopBar = () => {
  const darkModeCtx = useContext(DarkModeContext);

  const handleClick = () => {
    if (!darkModeCtx.isDark) {
      darkModeCtx.setDark(true);
    } else darkModeCtx.setDark(false);
  };

  return (
    <StyledTopBar>
      {/* <h1>Calc Average</h1> */}
      <Button onClick={handleClick}>
        <DarkModeOutlined
          sx={{ fontSize: 30, color: darkModeCtx.isDark ? "white" : "black" }}
        />
      </Button>
    </StyledTopBar>
  );
};

export default TopBar;
