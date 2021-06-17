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

    metatitle: {
        marginBottom: 7,
        display: "block",
        minHeight: 22,
    },

    rolesandreswrapper: {
        marginTop: 22,
    },
    suggesteditems: {
        padding: "3px 17px",
        "& .item": {
            display: "flex",
            fontSize: 12,
            border: "1px solid #cac2c2",
            padding: 7,
            marginBottom: 7,
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
    additionalInfoLanguage: {
        marginTop: 20,
    },
    additionalInfofields: {
        marginRight: 10,
        "& svg": {
            color: "#5D33D0",
            fontSize: 14,
        }
    },
    additionalInfoLastfield: {
        display: "inline-flex",
        "& span": {
            display: "inline-block",
            minWidth: "90%"

        },
        "& svg": {
            color: "#5D33D0",
            fontSize: 18,
            marginTop: 3,
            cursor: "pointer"
        }
    },
    additionalInfoRecommendedSkills: {

        marginTop: 28,
        width: "100%",
        height: "auto",
        border: "1px solid #cac2c2",
        borderLeft: "5px solid #5D33D0",
        padding: 7,
        fontSize: 12,
        marginBottom: 7,
        "& div": {
            display: "inline-flex",
            justifyContent: "Center",
            alignItems: "Center",
            marginRight: 10,
            padding: "2px 8px",
            background: "#F5F2F2",
            borderRadius: 10,
            cursor: "pointer",
            marginBottom: 7,
            "& svg": {
                fontSize: 18,
                color: "#707070",
                margin: "5px 5px",

            },
        },
        "& .title": {
            color: "#707070",
            display: "block",
            borderBottom: "1px solid #DFDFDF",
            paddingBottom: 7,
            marginBottom: 13,
            fontSize: 15,
        }
    },
    svgbgactive: {
        color: "#5D33D0 !important",
    },
    boxDistance: {
        marginBottom: 13,
    }
});