export const styles = theme => ({
    signuptitle: {
        marginTop: 0,
        marginBottom: 72,
        fontSize: 48,
        "@media(max-width: 768px)": {
            fontSize: 26
        }
    },
    signupsubtitle: {
        marginBottom: 20,
        fontSize: 20,
        marginTop:20,
        display: "block",
        "@media(max-width: 768px)": {
            fontSize: 12,
            marginBottom: 10
        }
    },
    signupfields: {
        marginBottom: 13,
    },
    signupheaderlogo: {
        maxWidth: 200,
        marginBottom: 30,
    },
    signupWrapper: {
        padding: "43px 82px 0px 82px",
        "@media(max-width: 768px)": {

            padding: "43px 0px 0px 0px",
        },
        "& .dNoneRightSignup": {
            "@media(max-width: 768px)": {
                display: "none",
                padding: "0px 0px 0px 0px",
            }
        }
    },
    polygonbg: {
        backgroundSize: "cover",
        paddingLeft: 100,
        paddingRight: 100,
        minHeight: "calc(100vh - 115px)",
        "@media(max-width: 768px)": {
            paddingLeft: 30,
            paddingRight: 30,
        },
        "@media (min-width: 768px) and (max-width: 1024px)": {
            paddingLeft: 10,
            paddingRight: 10,
        },
    },
    signupcheckboxterms: {
        "& svg": {
            color: theme.palette.primary.main,
        }
    },
    signupSubmitBtn: {
        display: "block",
        width: "100%",
        borderRadius: "5px !important",
        marginBottom: 13,
        fontSize: 20,
        textTransform: "uppercase",
        marginTop: 10
    },
    loginPageBtn: {
        display: "block",
        width: "100%",
        borderRadius: "5px !important",
        marginBottom: 7,
        fontSize: 20,
        textTransform: "uppercase",
        textAlign: "center",
    },
    textAboveImage: {
        fontSize: "22px !important",
    },
    microsofticon: {
        border: "1px solid #a5a5a5",
        padding: 11,
        borderRadius: "50%",
        marginLeft: 7,
    },
    jobaisliderbg: {
        background:  "white",
        backgroundSize: "cover",
        boxShadow: "0px 3px 20px #93939329",
    },
    jobaimainwrapper: {
        padding: "15px 13px 15px 13px",
        "& .dNoneRightLogin": {
            "@media(max-width: 960px)": {
                display: "none",
            }
        },
        "@media(max-width: 960px)": {
            padding: "15px 13px 15px 13px",
        }
    },
    jobaiheaderlogo: {
        marginBottom: 30,
        color: "#5D33D0",
        fontWeight: 700,
        margin: "0px !important",
        float: "left"
    },
    jobaiheaderbtn: {
        display: "inline-block",
        float: "right",
        "@media(max-width: 959px)": {
            display: "none",
        },
        "& .hireprofessional": {
            display: "inline-block",
            width: "auto",
            borderRadius: "5px !important",
            fontSize: 16,
            textTransform: "capitalize",
            borderWidth: "2px !important",
            border: "2px solid",
            borderColor: "#636363",
            background: "none",
            color: "black",
            "&:hover": {
                background: "none",
            }
        },
        "& .applyprofessional": {
            display: "inline-block",
            width: "auto",
            borderRadius: "5px !important",
            fontSize: 16,
            textTransform: "capitalize",
            textAlign: "center",
            borderColor: theme.palette.primary.dark,
            borderWidth: "0px !important",
            color: theme.palette.primary.dark,
            marginLeft: 32,
            "&:hover": {
                background: "none !important",
            }
        },
        "& .login": {
            display: "inline-block",
            width: "auto",
            borderRadius: "5px !important",
            fontSize: 16,
            textTransform: "capitalize",
            textAlign: "right",
            border: "none",
            color: theme.palette.primary.dark,
            padding: "0px 0px 0px 32px",
            "&:hover": {
                background: "none !important",
            }
        }
    },
    selectLoginOpt: {
        display:"inline-block",
    },
    professionalLogin:{
        float:'left',
        border: "none",
        background: "none",
        marginBottom: 17,
        color:"#5D33D0",
        borderBottom: "1px solid blue",
        borderRadius: "0px !important",
        padding: "5px 8px",
        "&:hover": {
            background: "none",
            color: "#5D33D0",
        }
    },
    corporateLogin:{
        float:'left',
        color:"#5D33D0",
        border: "none",
        background: "none",
        borderBottom:"1px",
        "&:hover": {
            background: "none",
            color: "#5D33D0",
        }
    },
    error: {
        fontSize: 13,
        color: "red",
    }

})