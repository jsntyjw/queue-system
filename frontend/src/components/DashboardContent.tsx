import React from "react";
import style from "./Home.module.css";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import { sizing } from '@mui/system';
// import { useNavigate } from "react-router-dom";
import { styled } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Content: React.FC = () => {
  return (
    <div className={style.dashboardcontainer}>
      {/* <div className={style.dashboardwrapper}>
            <div className={style.tabs}>
                <div className={style.categories}>
                    <h2>Current Serving</h2><br/>
                    <p>0836</p>
                </div>
            </div>
    
            <div className={style.tabs}>
                <div className={style.categories}>
                    <h2>Current Serving</h2><br/>
                    <p>0836</p>
                </div>
            </div>
            
            <div className={style.tabs}>
                <div className={style.categories}>
                    <h2>Current Serving</h2><br/>
                    <p>0836</p>
                </div>
            </div>
            
        </div> */}

      <Grid container className={style.sections}>
        <Grid className={style.dashboardGrid} item xs={4} sm={4} md={4} lg={4}>
          <div className={style.tabs}>
            <div className={style.categories}>
              <h2>Current Serving</h2>
              <br />
              <p>0836</p>
            </div>
          </div>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4} sm={4} md={4} lg={4}>
          <div className={style.tabs}>
            <div className={style.categories}>
              <h2>Queue Missed</h2>
              <br />
              <p>1</p>
            </div>
          </div>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4} sm={4} md={4} lg={4}>
          <div className={style.tabs}>
            <div className={style.categories}>
              <h2>Queue Status</h2>
              <br />
              <p>Excellent</p>
            </div>
          </div>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4}>
          <Button
            variant="contained"
            // onClick={() => {
            //   const navigate = useNavigate();
            //   navigate("/post/abc");
            // }}
          >
            Next Number
          </Button>
          <Button
            variant="contained"
            // onClick={() => {
            //   const navigate = useNavigate();
            //   navigate("/post/abc");
            // }}
          >
            Recall
          </Button>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4}>
          <Button
            variant="contained"
            // onClick={() => {
            //   const navigate = useNavigate();
            //   navigate("/post/abc");
            // }}
          >
            Transfer
          </Button>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4}>
          <Button
            variant="contained"
            // onClick={() => {
            //   const navigate = useNavigate();
            //   navigate("/post/abc");
            // }}
          >
            Show
          </Button>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4}>
          <div className={style.sectionone}>
            <h2>WAITING:</h2>
            <br />
          </div>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4}>
          <div className={style.sectiontwo}>
            <h2>MISSED QUEUE:</h2>
            <br />
          </div>
        </Grid>
        <Grid className={style.dashboardGrid} item xs={4}>
          <div className={style.sectionthree}>
            <h2>LAST CALLED:</h2>
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
