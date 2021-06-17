export const styles = theme => ({
    optionwrapper: {
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 2px 6px #0000000A",
        padding: 13,
        position: "relative",
        marginLeft: 13,
        marginRight: 13,
        marginBottom: 13,
        "& .mainicon": {
            fontSize: 38,
            color: theme.palette.primary.main
        },
        "& .addicons": {
            position: "absolute",
            fontSize: 15,
            bottom: 12,
            left: 36,
            color: theme.palette.primary.main,
            background: "white",
        },
        "& .title": {
            marginLeft: 11,
        }
    },
    optionslink: {
        textDecoration: "none",
    },
    optionblockwrapper: {
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 2px 6px #0000000A",
        padding: 13,
        position: "relative",
        marginLeft: 13,
        marginRight: 13,
        marginBottom: 13,
        "& .mainicon": {
            fontSize: 38,
            color: theme.palette.primary.main
        },
        "& .addicons": {
            position: "absolute",
            fontSize: 15,
            bottom: 12,
            left: 36,
            color: theme.palette.primary.main,
            background: "white",
        },
        "& .title": {
            marginLeft: 11,
        },
        "& .left": {
            display: "flex",
            alignItems: "center",
            minWidth: "48%",
        },
        "& ul": {
            listStyle: "none",
            "& li": {
                display: "inline-block",
                textAlign: "center",
                paddingLeft: 22,
                paddingRight: 22,
                "& span": {
                    color: "#CBCBCB",
                }
            },
            "& .first": {
                borderRight: "1px solid #BAA2FC42",
            }
        }
    },
});