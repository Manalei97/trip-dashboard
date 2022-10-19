import { Button, Card, Grid,  TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import Icon from "@mui/material/Icon";

// import { PhotoCamera } from "@mui/icons-material";

const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");

function AddTrip() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>
                                    Add New Trip
                                </MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}>
                                        <TextField fullWidth label='Trip Title' />
                                    </MDBox>
                                    <MDBox mb={3}>
                                        <TextField fullWidth label='Trip Cost' />
                                    </MDBox>
                                    <MDBox mb={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField fullWidth {...props} />}
                                                label="Trip Date"
                                                onChange={(newValue) => {
                                                // setValue(newValue);
                                                console.log(dayjs(newValue).format("YYYY-MM-DD HH:mm:ss"))
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </MDBox>
                                    <MDBox mb={3}>
                                        {/* <Button variant="containes" component="label" color='primary'>
                                            <MDTypography color='' */}
                                        {/* <IconButton color="primary" aria-label="upload picure" component="label"> */}
                                            {/* // <input hidden accept="image/*" type="file" multiple/> */}
                                            {/* <PhotoCamera/> */}

                                        {/* </IconButton> */}
                                        {/* <input type='file '/> */}
                                        {/* </Button> */}
                                        <Button variant='contained' color='primary'>
                                            <MDTypography color='white' variant='p'>
                                                <Grid container spacing={1}>
                                                    <Grid item>
                                                        <Icon>photo_library</Icon>
                                                    </Grid>
                                                    <Grid item>
                                                        Upload Photos
                                                    </Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input hidden accept='image/*' type='file' id='trip-photos' multiple />
                                        </Button >
                                    </MDBox>
                                </MDBox>
                            </MDBox>
                        </Card>
                    </Grid>                
                </Grid>
        </DashboardLayout>
    )
}
export default AddTrip