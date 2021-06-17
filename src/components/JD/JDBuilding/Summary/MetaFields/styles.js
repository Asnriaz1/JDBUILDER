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
        padding: "17px 17px",
        marginTop: 48,
        border: "1px solid #DFDFDF",
        borderLeft: "4px solid #5d33d0",
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
    addeditembg: {
        color: "#5D33D0 !important",
    },
});