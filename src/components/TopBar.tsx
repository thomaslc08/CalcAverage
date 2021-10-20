import styled from "styled-components";
import { useContext } from "react";
import { DarkModeOutlined } from "@mui/icons-material";
import DarkModeContext from "../store/darkModeContext";
import RefreshIcon from "@mui/icons-material/Refresh";
import GradesContext from "../store/gradesContext";

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
  const gradesCtx = useContext(GradesContext);

  const handleDarkMode = () => {
    if (!darkModeCtx.isDark) {
      darkModeCtx.setDark(true);
    } else {
      darkModeCtx.setDark(false);
    }
  };

  const handleRefresh = () => {
    gradesCtx.resetGrades();
  };
  return (
    <StyledTopBar>
      {/* <h1>Calc Average</h1> */}
      <Button onClick={handleRefresh}>
        <RefreshIcon
          sx={{ fontSize: 30, color: darkModeCtx.isDark ? "white" : "black" }}
        />
      </Button>
      <Button onClick={handleDarkMode}>
        <DarkModeOutlined
          sx={{ fontSize: 30, color: darkModeCtx.isDark ? "white" : "black" }}
        />
      </Button>
    </StyledTopBar>
  );
};

export default TopBar;
