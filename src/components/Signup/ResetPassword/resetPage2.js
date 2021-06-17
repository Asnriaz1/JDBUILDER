import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from "../ResetPassword/Gigtal-logo.png";
import mail from "../ResetPassword/mail.png"


const Styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: '100%',
      width: '100%',
      marginTop: '3%',
      marginBottom: '3%'
    },
    paper: {
      padding: theme.spacing(2),
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'cenetr',
      flexDirection: 'column',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      lineHeight: '0',
    },
    box2: {
        backgroundImage:`url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        width: '229px',
        height: '70px',
        marginBottom: '2%'
    },
    box1: {
        backgroundImage:`url(${mail})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        width: '436px',
        height: '298px',
        marginBottom: '2%'
    }
  }));
  
export default function resetPage2() {
    const classes = Styles();
  
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <div className={classes.box2}/>   
                <div className={classes.box1}></div>
                <h2>RESET PASSWORD</h2>
                <p style={{fontWeight : 'bold'}}>Reset link has been sent to your email account.</p>
                <p>(Don't forget to check your email spam or junk email list).</p>
            </Paper>
          </Grid>
        </Grid>
       </div>
);
    }