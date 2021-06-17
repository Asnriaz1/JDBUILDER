export const styles = theme => ({
    jdcardwrapper: {
        border: "2px solid #FBF7FC",
        borderRadius:50,
        margin: "22px 60px",
        background: "white",
        "@media(max-width: 960px)": {
            margin: "13px !important",
        }
    },
    jdcardheader: {
        background: "#FBF7FC",
        border: "1px solid #0056b3",
        borderRadius:20,
        padding: 28,
        position: "relative",
        "& .title": {
            display: "block",
        },
        "& .skills": {
            color: "#707070",
            fontSize: 13,
        },
        "& .statebox": {
            position: "absolute",
            top: 28,
            right: 28,
            "& svg": {
                marginRight: 4,
                fontSize: 20,
            },
            "& .published": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#0ECF48",
                fontSize: 11,
            },
            "& .complete": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#E67E22",
                fontSize: 11,
            },
            "& .imcomplete": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#EB0000",
                fontSize: 11,
            }
        }
    },
    jdcardimg: {
        padding: "28px 28px 11px 28px",
        position: "relative",
        "& img": {
            width: "100%",
        },
        "& .viewjd": {
            display: "none",
            position: "absolute",
            top: 115,
            left: 0,
            background: "white",
            width: 128,
            marginLeft: "auto",
            marginRight: "auto",
            right: 0,
            borderRadius: "5px !important",
            border: "1px solid #5d33d0",
            textDecoration: "none",
            padding: 7,
            textAlign: "center",
            "&:hover": {
                background: "white",
            }
        },
        "&:hover": {
            "& .viewjd": {
                display: "block"
            }
        }
    },
    jdcardfooter: {
        borderTop: "1px solid #FBF7FC",
        paddingLeft: 28,
        paddingRight: 28,
        textAlign: "center",
        paddingTop: 13,
        "& button": {
            border: "1px solid #5D33D0",
            borderRadius: "32px !important",
            color: "#5D33D0",
            fontSize: 11,
            minWidth: 128,
            fontWeight: 600,
            "&:first-child": {
                marginRight: 13,
            }
        },
        "& a": {
            border: "1px solid #5D33D0",
            borderRadius: "32px !important",
            color: "#5D33D0",
            fontSize: 11,
            minWidth: 128,
            fontWeight: 600,
            textDecoration: "none",
            padding: 8,
            display: "inline-block",
        }
    },
    scoremeter: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #5D33D0",
        padding: 4,
        borderRadius: 50,
        marginTop: 13,
        color: "#5D33D0",
        position: "relative",
        maxWidth: "200px",
        "& svg": {
            fontSize: 22,
            marginRight: 7,
        },
        "& span": {
            fontSize: 13,
        },
        "& .count": {
            background: "#5D33D0",
            color: "white",
            padding: 7,
            position: "absolute",
            right: 0,
            borderRadius: 50,
        }
    },
    datemodified: {
        color: "#707070",
        marginTop: 13,
        marginBottom: 13,
        "& .title": {
            fontSize: 11,
        },
        "& span": {
           display: "block",
           textAlign: "left",
           fontSize: 8,
        }
    }
});