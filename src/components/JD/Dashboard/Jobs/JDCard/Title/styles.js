export const styles = theme => ({
    jdcardwrapper: {
        margin: "0px 60px",
        background: "white",
        marginTop: 13,
    },
    jdcardheader: {
        position: "relative",
        "& .statebox": {
            "& svg": {
                marginRight: 4,
                fontSize: 20,
            },
            "& .published": {
                display: "flex",
                alignItems: "center",
                color: "#0ECF48",
                fontSize: 22,
                textTransform: "capitalize",
            },
            "& .complete": {
                display: "flex",
                alignItems: "center",
                color: "#E67E22",
                fontSize: 22,
                textTransform: "capitalize",
            },
            "& .imcomplete": {
                display: "flex",
                alignItems: "center",
                color: "#EB0000",
                fontSize: 22,
                textTransform: "capitalize",
            }
        }
    },
});