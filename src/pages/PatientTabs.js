import { Tab, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import LineGraph from '../components/LineGraph';

export default function PatientTabs(props) {
    const { data } = props;
    const patientNames = Object.keys(data);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = patientNames.map((value, index) =>
        <Tab key={index} label={value} sx={{borderRight: 1, borderRadius: "5px"}}/>
    );

    return (
        <Box sx={{ p: 1, bgcolor: 'background.paper', borderRadius: 1, minHeight: "100vh", borderColor: "#6d9147" }}>
            <Typography variant="h6" component="div" color="primary" align="left" sx={{ m: "20px" }}>Patients</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    sx={{ borderBottom: 1, borderColor: 'divider' }} >
                    {tabs}
                </Tabs>
            </Box>
            <PatientScore data={data[patientNames[value]]} />
        </Box>
    );
}

//displays line graph for scores and has title
function PatientScore({ data }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="p" component="div" color="primary" align="center" sx={{m: "20px"}}>MH Score Graph</Typography>
            <Box sx={{ width: "100%", height: "500px"}}>
                {data && <LineGraph data={data} />}
            </Box>
        </Box>
    )
}