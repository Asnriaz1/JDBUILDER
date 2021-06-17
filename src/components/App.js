import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import JDLanding from "./JD/container";
import Agora from "./Agora/Landing/component";
import Login  from "./Login/container";
import Signup from "./Signup/container";
import Templates from "./JD/Templates/container";
import JDBuilding from "./JD/JDBuilding/container";
import ConfirmPending from "./common/ConfirmPending/component";
import UserDashboard from "./JD/Dashboard/container";
import ResetPasswordPage from "./Signup/ResetPassword/container";
import Collaborations from "./JD/JDBuilding/Collaborations/container";
import Landing from "./Landing/component";
import { styles } from "./style";
import "./style.css";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
// import { darkTheme, blueTheme, Theme } from "./../resources/theme";
import { Theme } from "./../resources/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import PrivateRoute from "./common/PrivateRouteContainer";
import PublicRoute from "./common/PublicRouteContainer";
import Footer from "./common/Footer/component";
import Header from "./common/Header/container";
import LoginHeader from "./JD/Dashboard/common/Header/container";
import {getAppStoreValue} from "./common/Helpers";
import LoadingSpinner from "./common/ReduxBased/LoadingSpinner/container";
import resetPage from "./Signup/ResetPassword/resetPage";
import resetPage2 from "./Signup/ResetPassword/resetPage2"

import { connect } from 'react-redux';
import Store from '../store/configurestore'
class App extends Component {


  state = {
    // isLogin: store.getState(),
    
  }
  componentDidMount(){

    console.log(this.state.isLogin)
    
  }

  
  render() {
    console.log('App js is render')
    const accessToken = getAppStoreValue("access_token");

    let state = Store.getState();
    let login = state.LOGIN.UISetting.isLogin;

    return (
      <>
          <Router>
            
          </Router>
          <Router>
            
            <MuiThemeProvider theme={Theme}>
              <MuiThemeProvider theme={this.state.selectedTheme}>
                <CssBaseline />
                {
                  <Header />
                }
              
                <Switch>
                <PublicRoute path={`/landing`} component={Landing}/>
                    <PublicRoute exact path={`/`} component={JDLanding}/>
                    <PublicRoute path={`/templates`} component={Templates}/>
                    <PublicRoute path={`/create`} component={JDBuilding} />
                    <PublicRoute path={`/collaborator`} component={Collaborations} />
                    <PrivateRoute path={`/agora`} component={Agora}/>
                    <PublicRoute path={`/login`} component={Login}/>
                    <PublicRoute path={`/signup`} component={Signup}/>
                    <PublicRoute path="/resetpassword" component={ResetPasswordPage} />
                    <PublicRoute path={`/user`} component={UserDashboard}/>
                    <PublicRoute path={`/confirmation_pending`} component={ConfirmPending}/>
                    <PublicRoute path={"/resetpage"} component={resetPage}/>
                    <PublicRoute path={"/resetpage2"} component={resetPage2}/>
                </Switch>
                <Footer />
                <LoadingSpinner />
                </MuiThemeProvider>
              </MuiThemeProvider>
          </Router>
      </>
    );
  }
}

export default withStyles(styles)(App);
