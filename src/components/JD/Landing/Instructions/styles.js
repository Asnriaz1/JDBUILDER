export const styles = theme => ({
    landinginstitle: {
        color: "#707070",
        fontWeight: 100,
        "& span": {
            color: "#5D33D0",
            fontStyle: "italic",
        }
    },
    landingwrapper: {
        minHeight: 368,
    },
    landinginslist: {
        listStyle: "none",
        padding: 0,
        marginTop: 32,
        "& li": {
            color: "#4E4E4E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 290,
            marginTop: 22,
        },
        "& svg": {
            marginRight: 13,
        }
    },
    landingjdimg: {
        width: "100%",
    }
});