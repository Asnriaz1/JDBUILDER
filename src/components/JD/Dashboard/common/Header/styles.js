import { HEADER_BAR_BG_LIGHT, HEADER_DROPDOWN_BORDER_BOTTOM_DARK } from "./../../../../../resources/theme/variables";

const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: 0,
  },
  grow: {
    flexGrow: 1
  },
  headerBar: {
    backgroundColor: theme.palette.primary.main,
    //color:
    color:theme.palette.type === "light" ? theme.palette.primary.main : theme.palette.primary.contrastText,
  },
  menuIcon:{
    color: theme.palette.primary.contrastText,
    backgroundColor:theme.palette.primary.main,
    marginRight:theme.spacing(1.5),
    marginLeft:theme.spacing(-3),
    borderRadius:"0 !important",
    height:64,
    width:60,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }

  },
  headerBarIcons: {
    width: 30,
    height: 30
  },
  iconButton: {
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
      color: "white",
    }
  },
  ddButton:{
    paddingRight:0
  },
  avatarStyle: {
    marginRight: 10,
    width: 30,
    height: 30
  },
  accountCircle: {
    marginRight: 10,
    width: 30,
    height: 30
  },
  optionsMenu: {
    "& li": {
      borderRadius:'0 !important',
      borderBottom: `1px solid ${theme.palette.type === "light" ? HEADER_BAR_BG_LIGHT : HEADER_DROPDOWN_BORDER_BOTTOM_DARK}`,
      color: theme.palette.type === "light" ? theme.palette.primary.main : theme.palette.primary.contrastText,
      "&:last-child": {
        borderBottom: "none"
      },
      "&:hover": {
        backgroundColor: theme.palette.type === "light" ? HEADER_BAR_BG_LIGHT : theme.palette.primary.light
      },
      "& svg": {
        marginRight: 10
      }
    },
    "&.iefix":{
      "& li":{
        paddingTop:10
      }
    }
  },
  headerlogo: {
    maxWidth: 142,
  }
});

export default styles;