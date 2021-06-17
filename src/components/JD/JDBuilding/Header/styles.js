export const styles = theme => ({
    buildjdtopheader: {
        boxShadow: "0px 3px 20px #93939329",
        marginBottom: 32,
    },
    buildingheaderwrapper: {
        maxWidth: 1300,
        margin: "auto",
        padding: 13,
    },
    templatename: {
        fontSize: 11,
        "& span": {
            display: "block",
            marginTop: 3,
        }
    },
    svgbg: {
        color: "#5D33D0"
    },
    svgbgactive: {
       
        color: "#DFDFDF"
    },
    svgbgactivevisited: {
        color: "#0EEF51"
    },
    headerlink: {
        textDecoration: "none",
        "& .title": {
            display: "flex",
            alignItems: "center",
            "& svg": {
                marginRight: 7,
            }
        },
        "& .desc": {
            color: "#707070",
            fontSize: 10,
            padding: "0px 13px 0px 29px",
            display: "block",
        }
    }
});