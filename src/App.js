import GlobalStyle from "./globalStyles";
import SearchComponent from "./components/GlobalInput";
import Grades from "./components/GradesContainer";
import OverallAverage from "./components/OverallAverage";
import { GradesContextProvider } from "./store/gradesContext";
import TopBar from "./components/TopBar";
import { DarkModeContextProvider } from "./store/darkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <GradesContextProvider>
        <GlobalStyle />
        <TopBar />
        <SearchComponent />
        <Grades />
        <OverallAverage />
      </GradesContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
