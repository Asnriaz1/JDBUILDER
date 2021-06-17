import React, { Component }from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
	MuiThemeProvider,
	createMuiTheme,
	withStyles
} from "@material-ui/core/styles";
import user_list from "./userSiderbarList";
import { Link } from "react-router-dom";
import Collapse from '@material-ui/core/Collapse'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
// import Theme from "./../../../resources/theme/defaultTheme";
import { styles } from "./styles";

class Sidebar extends Component  {

	constructor(props) {
        super(props)
        this.state = {}
	}
	
	handleClick(item) {
        this.setState(prevState => (
            { [item]: !prevState[item] }
		))
	}

    handler(children) {
        const { classes } = this.props
        const { state } = this
        return children.map((subOption) => {
            if (!subOption.children) {
                return (
                    <>

                        <div key={subOption.label}>
							<Link
                                    key={subOption.label}
									to={subOption.url || "/"}
									className={classes.menuItemLinkStyle}>
									
								<ListItem
									onClick={() => this.handleClick(subOption.label)}
									className={ (subOption.isSubMenu ? classes.menuSubListItembg : classes.topmenulink)}
									button
									>

										<ListItemIcon className={ (subOption.isSubMenu ? classes.menuSubListItemIcon : '')}>
											{subOption.icon}
										</ListItemIcon>
										<ListItemText
											primary={subOption.label}
										/>
									
								</ListItem>
							</Link>
                        </div>
                    </>
                )
            }
            return (
                <>
                    <div key={subOption.name}>
                        <ListItem
							onClick={() => this.handleClick(subOption.label)}
							className={classes.topmenulink}
							button
                        >
							<ListItemIcon>
								{subOption.icon}
							</ListItemIcon>
							
							<Link
                                    key={subOption.label}
									// to={subOption.url || "/"}
									className={classes.menuItemLinkStyle}>
                            	<ListItemText
                                	primary={subOption.label} />
							</Link>
                            {state[subOption.label] ?
                                <ArrowDropUp /> :
                                <ArrowDropDown />
                            }
                        </ListItem>
                        <Collapse
                            in={state[subOption.label]}
                            timeout="auto"
                            unmountOnExit
                        >
                            {this.handler(subOption.children)}
                        </Collapse>
                    </div>
                </>
            )
        })
	}
	
	render() {
		const { type, open, onClose, classes } = this.props
		const list = user_list;
		// const list = user_list;
		const theme = createMuiTheme({
			overrides: {
				MuiPaper: {
					root: {
						backgroundColor: "#180940",
						color: "white"
					}
				},
				MuiSvgIcon: {
					root: {
						color: "white"
					}
				},
				MuiList: {
					padding: {
						paddingTop: 0
					}
				},
				MuiListItemIcon: {
					root: {
						minWidth: 35
					}
				},
				MuiListItem: {
					button: {
						borderBottom: "#180940 1px solid"
					}
				}
			}
		});
	return (
		<MuiThemeProvider theme={theme}>
			<Drawer
				// className={classes.modal}
				// className={{ root: classes.MuiPaperRoot }}
				variant="temporary"
				anchor="left"
				elevation={0}
				BackdropProps={{ invisible: true }}
				onBackdropClick={onClose}
				classes={{
          root: classes.MuiDrawerRootZIndex,
          paperAnchorLeft: classes.setWidth
				}}
				open={open}>
				<List
				// className={`${classes.MuiListPadding} ${classes.MuiPaperRoot}`}
				>
					{this.handler(list)}
				
				</List>
			</Drawer>
		</MuiThemeProvider>
		
	);
	}
	
}

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
