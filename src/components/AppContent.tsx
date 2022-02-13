import React from "react";
import  style from "./Home.module.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { Paper } from "@material-ui/core";



const AppContent: React.FC = () => (
    <div className={style.contentcontainer}>
      <div className={style.contentwrapper}>
        <div className={style.headwrapper}>
          <Button
            variant="contained"
            onClick={() => {
              const navigate = useNavigate();
              navigate("/post/abc");
            }}
          >
            Scan IC
          </Button>
        </div>
        <div className={style.apptbutton}>
          <Button
            variant="contained"
            onClick={() => {
              const navigate = useNavigate();
              navigate("/post/abc");
            }}
          >
            Join Queue
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              const navigate = useNavigate();
              navigate("/post/abc");
            }}
          >
            Add Appointment
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <Paper>
            <Box p={5}>Customer Information</Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Paper>
            <Box p={5}>Appointments</Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
)

console.log("hello......",style.contentcontainer )
export default AppContent