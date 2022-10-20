import { Button, Card, Grid, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import Icon from "@mui/material/Icon";

// import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";

const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");




function AddTrip() {
    // const titleRef = useRef()
    // const costRef = useRef()
    const [tripDate, setTripDate] = useState('')
    const addTrip = async (event) => {
        event.preventDefault()
        // const title = titleRef.current.querySelector('input').value
        // const cost = costRef.current.querySelector('input').value
        let tripData = new FormData(event.target)
        // tripData.append('title', title)
        // tripData.append('cost', cost)
        // tripData.append('date', tripDate)
        await fetch('http://localhost:3001/trips', {
            method: 'POST',
            body: tripData
        })

    }


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={addTrip}>
                        <MDBox p={3}>
                            <MDTypography variant='h5'>Add New Trip</MDTypography>
                            <MDBox pt={4} pb={2}>
                                <MDBox mb={3}><TextField name="title" fullWidth label="Trip Title"  /></MDBox>
                                <MDBox mb={3}><TextField name = "cost" fullWidth label="Trip Cost"  /></MDBox>
                                <MDBox mb={3}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                        value={tripDate}
                                            renderInput={(props) => <TextField name="date" fullWidth {...props} />}
                                            label="Trip Date"
                                            inputFormat="YYYY-MM-DD HH:mm:ss"
                                            mask="_//_ :_::_"

                                            onChange={(newValue) => {
                                                setTripDate(dayjs(newValue).format("YYYY-MM-DD HH:mm:ss"))
                                            }}
                                        />
                                    </LocalizationProvider>
                                </MDBox>
                                <MDBox mb={3}>
                                    <Button variant="contained" component="label" color='primary'>
                                        <MDTypography color='white' variant="p">
                                            <Grid container spacing={1}>
                                                <Grid item><Icon>photo_library</Icon></Grid>
                                                <Grid item>Upload Photos</Grid>
                                            </Grid>
                                        </MDTypography>
                                        <input hidden accept="image/*"name="photo"  multiple type="file" />
                                    </Button>
                                </MDBox>
                                <MDBox>
                                    <Button variant="contained" type="submit">
                                        <MDTypography color='white' variant="p">
                                            Add Trip
                                        </MDTypography>
                                    </Button>
                                </MDBox>
                            </MDBox>
                        </MDBox>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}
export default AddTrip