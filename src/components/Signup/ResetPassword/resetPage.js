import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from "../ResetPassword/Gigtal-logo.png"


const Styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '12%',
      marginBottom: '13%',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'cenetr',
      flexDirection: 'column',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      lineHeight: '5px', 
    },
    box2: {
        backgroundImage:`url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        width: '229px',
        height: '70px',
        marginBottom: '2%',
    }
  }));
  
export default function resetPage() {
    const classes = Styles();
  
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <div className={classes.box2}>   
                </div>
                <h2>RESET PASSWORD</h2>
                <p>Your activation link is incorrect or expired. Please request again to reset the password.</p>
            </Paper>
          </Grid>
        </Grid>
       </div>
);
    }