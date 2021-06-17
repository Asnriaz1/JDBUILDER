export const styles = theme => ({
    alljds: {
        minHeight: "calc(100vh - 298px)",
    },
    dashboardjobswrapper: {
        maxWidth: 1300,
        margin: "auto",
        padding: 13,
        minHeight: "calc(100vh - 116px)",
        "& img": {
            margin: "auto",
            display: "block",
            width: "100%",
            maxWidth: 235,
        }
    },
    alljobsempty: {
        textAlign: "center",
        "& .desc": {
            display: "block",
            color: "#707070",
        },
        "& p": {
            color: "#707070",
            fontSize: 28,
            marginTop: "0px",
        },
        "& button": {
            display: "block",
            margin: "auto",
            minWidth: 200,
            padding: 13,
            marginTop: 22,
            marginBottom: 22,
        },
        "& a": {
            marginBottom: 100,
            textDecoration: "none",
            display: "block",
        }
    }
});