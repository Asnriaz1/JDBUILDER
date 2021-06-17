export const styles = theme => ({
    metafieldwrapper: {
        marginTop: 22,
        marginBottom: 22,
        "@media(min-width: 960px)": {
            "& .jobtitlefield": {
                maxWidth: "98%",
            }
        }
    },
    jobopeningwrapper: {
        maxWidth: 1300,
        margin: "auto",
        padding: 13,
        "& .actionbtn": {
            "& button": {
                marginRight: 17,
                minWidth: 150,
            }
        }
    },
    metatitle: {
        marginBottom: 7,
        display: "block",
        minHeight: 22,
    },
    ExpansionWrapper: {
        padding: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
    },
    ExpansionPanel: {
        marginTop: "0px !important",
    },
    ExpansionPanelSummary: {
        padding: "0px",
        display: "inline-block",
        maxWidth: "auto",
        background: "white",
        zIndex: "11",
        minHeight: "42px !important",
        paddingLeft: "7px",
        "& div:first-child": {
            display: "inline-block",
            float: "right",
            marginTop: "10px",
            marginRight: "7px",
            marginBottom: "0px",
        },
        "& div:last-child": {
            display: "inline-block",
            float: "left",
            paddingLeft: "0px",
            paddingRight: "0px",
        },
        "& label": {
            paddingLeft: "19px",
        }
    },
    ExpandMoreIcon: {
        background: "#5d33d0",
        color: "white",
        width: "17px",
        height: "17px",
        borderRadius: "50%",
    },
    ExpansionDivider: {
        backgroundColor: "#5d33d0",
        position: "absolute",
        left: "0",
        width: "100%",
        top: "21px",
        visibility: "visible",
    },
    ExpansionPanelDetails: {
        position: "relative",
        padding: "0px",
        display: "block",
        maxHeight: 250,
        minHeight: 250,
        "& form": {
            width: "100%",
        }
    },
    expansionPanelTitle: {
        color: "#9E9E9E",
        fontWeight: "500",
        width: "auto"
    },
    rolesandreswrapper: {
        marginTop: 22,
    },
    suggesteditems: {
        padding: "3px 17px",
        maxHeight: 248,
        overflow: "auto",
        "& .item": {
            display: "flex",
            fontSize: 12,
            border: "1px solid #cac2c2",
            padding: 7,
            marginBottom: 7,
            cursor: "pointer",
            "& .description": {
                maxHeight: 65,
                overflow: "hidden",
            },
            "& svg": {
                color: "#DFDFDF",
                marginRight: 7,
            }
        }
    },
    texteditorwrapper: {
        width: "98%",
        "& .texteditor": {
            padding: 13,
            marginTop: 0,
            minHeight: 262,
            boxShadow: "none",
            border: "1px solid #ededed",
        }
    },
    sectiontitle: {
        borderBottom: "1px solid #F5F2F2",
        color: "#707070",
        paddingBottom: 13,
        marginBottom: 17,
        marginTop: 17,
        "& span": {
            fontWeight: 700,
        }
    },
    distancewrapper: {
        marginBottom: 17,
    },
    switchfield: {
        color: "#707070",
        fontSize: 13,
        "& span": {
            marginRight: 13,
        }
    },
    addeditembg: {
        color: "#5D33D0 !important",
    },
    radioFields: {
        maxWidth: 400,
        display: "inline-block",
        marginRight: 13,
        width: 400,
    },
    yeartooltips: {
        position: "relative",
        "& .ask": {
            top: 0,
            position: "absolute",
            right: 6,
            background: "#ededed",
            width: 24,
            height: 24,
            borderRadius: "50%",
            textAlign: "center",
            fontWeight: 700,
            padding: 2,
        }
    }
});