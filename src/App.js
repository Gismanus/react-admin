import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
/* import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contaacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/global/line";
import Pie from "./scenes/global/pie";
import FAQ from "./scenes/global/faq";
import Geography from "./scenes/global/eography"; */

function App() {
  const [theme, colorMode] = useMode();
  
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <main className='content'>
        <Topbar />
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
