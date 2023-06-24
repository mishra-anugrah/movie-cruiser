import "./App.scss";
import { useState } from "react";
import { NavigationSideBar } from "./components/NavigationSideBar";
import { Dashboard } from "./components/Dashboard";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="movies-page">
          <NavigationSideBar
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            userName="Eric Hoffman"
          />
          <Dashboard setMobileOpen={setMobileOpen} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
