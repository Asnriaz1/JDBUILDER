import { blue } from "@material-ui/core/colors";

export const styles = theme => ({
    needhelpwrapper: {
        position: "fixed",
        right: 61,
        bottom: 48,
        zIndex: 99999999,
        maxWidth: 300,
    },
    assistantpoper: {
        zIndex: 99999,
    },
    needhelpwrapperbtn: {
        border: "1px solid #e2e0e0",
        padding: 10,
        borderRadius: "35px !important",
        background: "white",
        width: 126,
        textAlign: "center",
        boxShadow: "0px 0px 6px -3px black",
    },
    robotimage: {
        maxWidth: 65,
        zIndex: 9999999,
        display: "block",
        margin: "auto",
    },
    assistantwrapper: {
        minWidth: 410,
        zIndex: 999999999,
    },
    assitantheader: {
        background: "white",
        padding: 11,
        display: "flex",
        boxShadow: "0px 0px 6px -3px black",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        alignItems: "center",
        "& svg": {
            marginRight: "40%",
            cursor: "pointer",
        }
    },
    assistantbody: {
        minHeight: 200,
        background: "#ececec",
        padding: 13,
        maxHeight: 475,
        overflow: "auto",
        "& .hello": {
            background: "white",
            padding: 7,
            borderBottomLeftRadius: 13,
            borderTopRightRadius: 13,
            borderBottomRightRadius: 13,
            marginTop: 7,
            marginBottom: 7,
        },
        "& .robot": {
            background: "white",
            borderRadius: 13,
            marginBottom: 13,
            position: "relative",
            minHeight: 22,
            marginTop: 22,
            "& img": {
                maxWidth: 32,
                zIndex: 9999999,
                display: "block",
                margin: "auto",
                position: "absolute",
                top: "-23px",
                left: 172,
            }
        }
    },
    assistantmenuwrapper: {
        marginTop: 13,
        "& span": {
            color: "#7250d1",
            borderBottom: "1px solid #7250d1",
            marginRight: 13,
            cursor: "pointer"
        }
    },
    assistantcardwrapper: {
        marginBottom: 22,
        minHeight: 230,
    },
    assistantquestion: {
        background: "white",
        padding: 11,
        marginTop: 12,
        cursor: "pointer",
    },
    assistantcardwrapperquestions: {
        marginTop: 13,
        "& .right": {
            float: "right",
            background: "#7d5fd1",
            color: "white",
            padding: 5,
            borderBottomLeftRadius: 17,
            clear: "both",
        },
        "& .left": {
            float: "left",
            background: "white",
            padding: 5,
            borderTopRightRadius: 17,
            clear: "both",
            maxWidth: 292,
            marginTop: 13,
            marginBottom: 13,
        }
    }
});