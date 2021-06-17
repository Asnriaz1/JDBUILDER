import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import lightBlue from "@material-ui/core/colors/lightBlue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
// import {blackColor, lightBlue, primaryColor, primaryColorHover, secondaryColor} from "../../resources/jss/global";
let primaryColor = "#457EFA";
let primaryColorHover = "#009fa0";
// let secondaryColor = "#5ADE34";
// let errorColor = "#A4000F";
// let primaryCheckOutline = "#3DCECF";
// let expanseHeading = "#3BA0FA";
let defaultColor = "#BFBFBF";
let defaultColorHover = "#b1b1b1";

/**
 * Define Custom Classes for this theme.
 * @param theme
 * @returns {{}}
 */
export const styles = theme => ({
	root: {},
	warningIcon: {
		fontSize: 120,
		display: "block",
		margin: "20px auto",
		color: orange.A200
	},
	infoIcon: {
		fontSize: 120,
		display: "block",
		margin: "20px auto",
		color: lightBlue.A200
	},
	errorIcon: {
		fontSize: 120,
		display: "block",
		margin: "20px auto",
		color: red.A200
	},
	successIcon: {
		fontSize: 120,
		display: "block",
		margin: "20px auto",
		color: green.A200
	},
	confirmationDialog: {
		zIndex: 1301,
		"& button": {
			lineHeight: 1.25,
			textTransform: 'capitalize'
		}
	},
	dialogTitle:{
		padding:theme.spacing(1,2)
	},
  contentText:{
		"& form":{
      padding:"5px 0"
    }
	}
});

/**
 * Override Default Styles for current theme.
 * @type {Theme}
 */
export const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	},
	overrides: {
		MuiDialogContent: {
			root: {
				padding: "0 24px",
				overflowY: "scroll",
				"&:first-child": {
					paddingTop: 0
				}
			}
		},
		MuiDialogContentText: {
			root: {
				color: "#666"
			}
		},
		MuiDialogActions: {
			root: {
				margin: "20px 0 0",
				justifyContent: "center",
				padding: "20px 0",
				backgroundColor: "#EEEEEE",
				borderTop: "1px solid #CCC"
			},
			action: {
				margin: "0 10px"
			}
		},
		MuiDialogTitle: {
			root: {
				textAlign: "center",
				color: primaryColor,
				borderBottom: "1px solid #CCC"
			}
		},
		// MuiButton: {
		//     root: {
		//         textTransform: "none",
		//         fontFamily: "inherit",
		//         padding: "5px 30px"
		//     },
		//     contained: {
		//         boxShadow: "0px 0px 3px #CCC",
		//         borderRadius: 0,
		//         backgroundColor: defaultColor,
		//         border: "1px solid" + defaultColorHover,
		//         "&:hover": {
		//             backgroundColor: defaultColorHover
		//         },
		//         color: "#FFF"
		//     },
		//     containedPrimary: {
		//         backgroundColor: primaryColor,
		//         border: "1px solid" + primaryColorHover,
		//         "&:hover": {
		//             backgroundColor: primaryColorHover
		//         }
		//     }
		// },
		MuiButton: {
			root: {
				textTransform: "none",
				fontFamily: "inherit",
				padding: "10px 30px",
				borderRadius: 3
			},
			contained: {
				boxShadow: "0px 0px 3px #CCC",
				backgroundColor: defaultColor,
				// border: "1px solid" + defaultColorHover,
				"&:hover": {
					backgroundColor: defaultColorHover
				},
				color: "#FFF"
			},
			containedPrimary: {
				backgroundColor: primaryColor,
				border: "none",
				"&:hover": {
					backgroundColor: primaryColorHover
				}
			},
			containedSecondary: {
				color: "#FFF"
			}
		}
	}
});
