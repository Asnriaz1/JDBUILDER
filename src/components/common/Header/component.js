import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {getAppStoreValue} from "../Helpers";
import Logo from "../../../resources/images/logo.png";
import LoginHeader from "../../JD/Dashboard/common/Header/component"
class Header extends Component {
componentDidMount = () => {
    this.props.loginStateUpdateHandler()
    console.log(this.props.isLogin)
}
    render() {
        const {
            classes,
            logoutHandler,
            isLogin
        } = this.props;

        const userText = getAppStoreValue("userText");


        return (
            
            userText ? 
            
            <LoginHeader/>
    
    :<>
{
                <div className={classes.jobaisliderbg}>
                    <Grid container className={classes.jobaimainwrapper}>
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                            <NavLink
                                        to={'/'}
                                    >
                                <img className={classes.jobaiheaderlogo} src={Logo} alt="" />
                                </NavLink>

                                <div className={classes.jobaiheaderbtn}>
                                
                                        <NavLink
                                            to={'/signup'}
                                            ><Button className="needanaccount" variant="outlined" color="primary"  >
                                                    Need an account ?
                                                </Button>
                                            </NavLink>

                                            <NavLink
                                                to={'/login'}
                                            ><Button className="signinbtn" variant="outlined" color="primary" >
                                                Sign In
                                            </Button>
                                        </NavLink>
                                  
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>
    }
            </>
        )
    }
}

export default withStyles(styles)(Header);