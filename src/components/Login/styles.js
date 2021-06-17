import BgImg from "../../resources/images/backgroundLogin.svg"
export const styles = theme => ({
    logintitle: {
        marginTop: 0,
        marginBottom: 0,
        color: theme.palette.primary.main,
        fontSize: 48,
    },
    loginsubtitle: {
        marginBottom: 7,
    },
    loginfields: {
        marginBottom: 13,
    },
    loginheaderlogo: {
        maxWidth: 200,
        marginBottom: 30,
    },
    loginWrapper: {
        padding: "43px 82px 0px 82px",
        "@media(max-width: 768px)": {
            padding: "0px 0px 0px 0px",
        },
        "& .dNoneRightLogin": {
            "@media(max-width: 768px)": {
                display: "none",
                padding: "0px 0px 0px 0px",
            }
        }
    },
    polygonbg: {
        // background:  `url(${BgImg})`,
        backgroundSize: "cover",
        minHeight: "calc(100vh - 114px)",
        "@media(max-width: 768px)": {
        background:"none"
        }
       
    },
    logincheckboxterms: {
        "& svg": {
            color: theme.palette.primary.main,
        }
    },
    loginSubmitBtn: {
        display: "block",
        width: "100%",
        borderRadius: "5px !important",
        marginBottom: 13,
        fontSize: 20,
        textTransform: "uppercase",
        marginTop: 10
    },
    signupPageBtn: {
        display: "block",
        width: "100%",
        borderRadius: "5px !important",
        marginBottom: 7,
        fontSize: 20,
        textTransform: "uppercase",
        textAlign: "center",
    },
    loginRightWrapper: {
        position: "relative",
        "& .loginrightwithbg": {
            "& .wrapperborder": {
                border: "1px solid #FFBB00",
                position: "absolute",
                left: 0,
                width: "83%",
                height: "100%",
            },
            padding: "26px 62px 22px 44px",
            marginLeft: 28,
            background: theme.palette.background.formWrappers,
            "& img": {
                width: "100%",
                },
            "& p": {
                fontSize: 20,
                marginBottom: 0,
                maxWidth: "80%"       
            },
            "& h1": {
                textTransform: "uppercase",
            }
            }
        },
    selectLoginOpt: {
      
        display:"inline",
     
      

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
    
    rememberMECheckbox:{
        float:"left",
        fontSize:"12px !important",
        "@media(max-width: 768px)": {
            fontSize:"8px !important",
        },
    },
    forgetPassword:{
        float:"right",
        fontSize:"12px !important",
        marginTop: 13,
        textDecoration: "none",

    },
    loginContainer:{
        paddingLeft:50,
        paddingRight:50,
        paddingBottom:25,
        marginTop:50,
        marginBottom:70,
        backgroundColor:"white",
        boxShadow: "0px 0px 13px -7px #c1bdbd",
        borderRadius: 16,
       
    },
    socialIcons:{
        height:40,
        paddingLeft:7,
        "@media(max-width: 768px)": {
            height:25,
            paddingRight:2,
        }
    },
    microsofticon: {
        border: "1px solid #a5a5a5",
        padding: 7,
        borderRadius: "50%",
        marginLeft: 7,
    },

    passwordOptions:{
        display:"inline",
},

passwordOptionsLeft:{
    float:"left",
    color:"grey",
    marginTop:10,
    "@media(max-width: 768px)": {
        float:"left",
        marginTop:3,
},
  
},
passwordOptionsRight:{
    
    float:"right",
    fontSize:20,
    
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
    },
},
error: {
    fontSize: 13,
    color: "red",
    display: "block"
},
loginRightWrapper: {
    position: "relative",
    "& .loginrightwithbg": {

        height: 442,
        marginBottom: 100,
        "& .wrapperborder": {
            border: "1px solid #0076f1",
            position: "absolute",
            left: "-30px",
            width: "85%",
            height: 502,

            zIndex: "-999",
        },
        padding: "26px 62px 22px 44px",
        marginLeft: 28,
        background: theme.palette.background.formWrappers,
        "& img": {
            width: "100%",
            border: "1px solid #0076f1",
        },
        "& p": {
            fontSize: 18,
            marginBottom: 0,
            maxWidth: "80%"
        },
        "& h1": {
            textTransform: "uppercase",
        }
    }
},
        
})