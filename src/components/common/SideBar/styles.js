export const styles = theme => ({
	MuiPaperRoot: {
		backgroundColor: theme.palette.primary.dark,
		color: "white"
	},
	MuiSvgIconRoot: {
		color: "white"
	},
	MuiListPadding: {
		paddingTop: 0
	},
	MuiListItemIconRoot: {
		minWidth: 35
	},
	MuiListItemButton: {
		borderBottom: "#0F5B9D 1px solid"
	},
	asideLogo: {
		backgroundColor: "#0F5B9D",
    padding: "10px 0 5px",
		fill: "white",
		fontSize: 17,
    textAlign: "center",

    "& img": {
      margin: "0 auto",
      width: 70
		}
	},
	menuItemLinkStyle: {
		color: "white",
		textDecoration: "none",
		width: "100%",
	},
	menuSubListItemIcon: {
		display: "none",
		"& svg": {
			fontSize: "10px",
			marginLeft: "6px",
		},
	},
	menuSubListItembg: {
		backgroundColor: "#211646",
		color: "white",
		textDecoration: "none",
		padding: 0,
		paddingLeft: 54,
		"& span": {
			fontSize: 13,
		}
	},
	MuiDrawerRootZIndex : {
    zIndex: "99999999 !important",
  },
  setWidth: {
    width: 270
	},
	topmenulink: {
		backgroundColor: "#211646",
		borderWidth: 6,
		paddingLeft: 32,
		"& span": {
			fontSize: 14,
		},
		"&:hover": {
			borderLeft: "6px solid white",
			paddingLeft: 26,
		}
	}
});
