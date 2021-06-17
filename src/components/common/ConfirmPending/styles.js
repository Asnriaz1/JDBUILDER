import BG from "../../../resources/images/landingbg.svg";
export const styles = theme => ({
    jobaisliderbg: {
        background:  `url(${BG})`,
        minHeight: "calc(100vh - 132px)",
        "& img": {
            maxWidth: 700,
            margin: "auto",
            display: "block",
            marginTop: 22,
        },
        "& p": {
            textAlign: "center",
            fontSize: 16,
            color:"#707070",
            marginTop: 0,
        },
        "& h1":{
            textAlign: "center",
            fontWeight:"bold",
        }
    },
    homelink: {
        textDecoration: "none",
        background: theme.palette.primary.main,
        color: "white",
        padding: 17,
        margin: "auto",
        display: "block",
        width: 150,
        textAlign: "center",
        marginTop: 38,
        marginBottom: 32,
        minWidth: 240,
    },
    description:{
        maxWidth:900,
        textAlign:"center",
        margin:"Auto",
        fontSize:11,
    },
    heading:{
        color: theme.palette.primary.main,
        fontSize:35,
        marginTop: 0,
    }
});