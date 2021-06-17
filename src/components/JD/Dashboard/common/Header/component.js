import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {withStyles} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessagesIcon from "@material-ui/icons/Chat";
import HelpIcon from "@material-ui/icons/Help";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import ThemesIcon from "@material-ui/icons/ColorLens";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import SideBar from "../../../../common/SideBar/component";
import styles from "./styles";
//Local variables file
import {getAppStoreValue} from "../../../../common/Helpers";
import Logo from "../../../../../resources/images/logo.png";
import { NavLink } from 'react-router-dom';
import {reverseString} from "../../../../common/Helpers";
import ls from 'local-storage';
class Header extends React.Component {
    state = {
        anchorEl: null,
        sidebarOpen: false,
        labelPopperEl: null,
        openMoveFolder: false,
    };

    handleProfileMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
    };

    gotoProfilePage = () => {
        this.props.history.push("/profile")
        this.handleMenuClose()
    }

    handleDrawerOpen = () => {
        this.setState({
            sidebarOpen: true
        });
    };

    handleDrawerClose = () => {
        this.setState({
            sidebarOpen: false
        });
    };

    handleLogout = () => {
     // this.logOut(this.props.history);
     sessionStorage.removeItem(reverseString("app_store"));
     window.location.replace("/login");
     ls.clear();
    };


  handleLabelPopper = (event) => {
        this.setState({
            labelPopperEl: event.currentTarget
        });
    };

    handleMovePopper = (event) => {
        this.setState({
            labelPopperEl: event.currentTarget,
            openMoveFolder: true
        });
    };
    closeMovePopover = () => {
        this.setState({
            openMoveFolder: false
        });
    };
    render() {
        const {anchorEl, sidebarOpen: open} = this.state;
        const {
            classes,
            openNotificationPopover,
            currentSignalpage,
            isLogin,
            logOut 
        } = this.props;
        const isMenuOpen = Boolean(anchorEl);

        const userType = "user"

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                transformOrigin={{vertical: "top", horizontal: "right"}}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
                className={classes.optionsMenu}
            >
                <MenuItem onClick={this.gotoProfilePage}>
                    <AccountCircle/>
                    Profile
                </MenuItem>
                <MenuItem onClick={this.handleMenuClose}>
                    <ThemesIcon/>
                    Themes
                </MenuItem>
                <MenuItem onClick={this.handleLogout}>
                    <LogoutIcon/>
                    Logout
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>

                <AppBar position='static' classes={{root: classes.headerBar}}>
                    <Toolbar>
                        <IconButton classes={{root: classes.menuIcon}} aria-label='Open drawer'
                                    onClick={this.handleDrawerOpen} edge='start'>
                            <MenuIcon/>
                        </IconButton>
                        <NavLink 
                            to={'/'}
                        >
                            <img className={classes.headerlogo} src={Logo} alt="" />
                        </NavLink>
                        <div className={classes.grow}/>
                        <div>
                            <IconButton color='inherit' classes={{root: classes.iconButton}}>
                                <HelpIcon className={classes.headerBarIcons}/>
                            </IconButton>
                            <IconButton
                                color='inherit'
                                classes={{root: classes.iconButton}}
                                onClick={this.handleMovePopper}
                            >
                                <Badge badgeContent={17} color='secondary'>
                                    <NotificationsIcon className={classes.headerBarIcons}/>
                                </Badge>

                            </IconButton>
                            <IconButton
                                classes={{root: classes.iconButton + ' ' + classes.ddButton}}
                                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                                aria-haspopup='true'
                                onClick={this.handleProfileMenuOpen}
                                color='inherit'
                            >
                                {/* <AccountCircle className={classes.accountCircle} /> */}
                                {/* <Avatar alt='Profile Picture' src={userImage} className={classes.avatarStyle}/> */}
                               
                                <Typography variant='subtitle2' color='inherit' noWrap>
                                
                                    {` ${getAppStoreValue("nameTitle")}`}
                                </Typography>
                                <ArrowDownIcon color='inherit'/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {!!userType && <SideBar type={userType} open={open} onClose={this.handleDrawerClose}/>}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
