import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/header";

const Line = ()=>{
    return(
        <Box m={2}>
           <Header title='Line Chart' subtitle='Simple Line Chart' />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;