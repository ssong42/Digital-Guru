import React, { useEffect, useState } from "react";
import Header from './components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material';
import { fetchPatientData } from "./external";
import PatientTabs from "./pages/PatientTabs";
import { convertToLineGraphFormat } from "./components/LineGraph";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#278c79',
      light: '#6d9147',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#fbfcf9',
    },
    text: {
      secondary: '#6d9147',
    },
  },
});


function App() {
  const [patientData, setPatientData] = useState("");
  const [lineGraphData, setLineGraphData] = useState("");
  
  useEffect(() => {
    fetchPatientData().then(json => {
      setPatientData(json);
      setLineGraphData(convertToLineGraphFormat(json));
    });
  }, [])

  return (
    <ThemeProvider theme={theme}>
        <Header />
        <PatientTabs data={lineGraphData}/>
    </ThemeProvider>
  );
}

export default App;
