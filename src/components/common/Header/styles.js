export const styles = theme => ({
    jobaimainwrapper: {
        padding: "11px 13px 11px 13px",
        "& .dNoneRightLogin": {
            "@media(max-width: 960px)": {
                display: "none",
            }
        },
        "@media(max-width: 960px)": {
            padding: "15px 13px 15px 13px",
        }
    },
    jobaisliderbg: {
        background:  theme.palette.primary.main,
        backgroundSize: "cover",
        boxShadow: "0px 3px 20px #93939329",
        width: "100%",
        top: 0,
        zIndex: 9,
    },
    jobaiheaderlogo: {
        marginBottom: 30,
        color: "white",
        fontWeight: 500,
        margin: "0px !important",
        float: "left",
        maxWidth: 142,
    },
    jobaiheaderbtn: {
        display: "inline-block",
        float: "right",
        "@media(max-width: 959px)": {
            display: "none",
        },
        "& .signinbtn": {
            display: "inline-block",
            minWidth: 150,
            textAlign: "center",
            marginLeft: 32,
            borderRadius: "5px !important",
            fontSize: 16,
            textTransform: "capitalize",
            borderWidth: "2px !important",
            border: "2px solid",
            borderColor: "white",
            background: "none",
            color: "white",
            "&:hover": {
                background: "none",
            }
        },
        "& .needanaccount": {
            display: "inline-block",
            width: "auto",
            borderRadius: "5px !important",
            fontSize: 16,
            textTransform: "none",
            textAlign: "center",
            borderColor: theme.palette.primary.dark,
            borderWidth: "0px !important",
            color: "white",
            marginLeft: 32,
            "&:hover": {
                background: "none !important",
            }
        },
    },
    welcometext: {
        color: "white",
        display: "inline-block",
        marginTop: 10,
        fontSize: 16
    }
});