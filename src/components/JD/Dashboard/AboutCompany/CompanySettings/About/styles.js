export const styles = theme => ({
    companymemberswrapper: {
        width: "100%",
        "& .fieldwrapper": {
            padding: "0px 13px",
        },
        "& .textfield": {
            marginTop: 13,
            "& div": {
                height: "61px",
            }
        },
        "& .multilinefield": {
            width: "100%",
            marginTop: 13,
            "& div": {
                display: "block",
                resize: "none",
                borderRadius: "4px !important",
                borderColor: "#dee0e2",
                height:107,
                "& textarea": {
                    textIndent: "0px",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                    height:85,
                }
            }
        },
        "& .submitbtn": {
            margin: 13,
            height: 61,
            width: 230,
            float: "right",
        }
    },
    infomessage: {
        padding: 13,
    }
});