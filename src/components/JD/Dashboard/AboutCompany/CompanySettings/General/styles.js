export const styles = theme => ({
    companygeneralwrapper: {
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
        "& .selectfield": {
            marginTop: 13,
            "& .react-select__control": {
                height: "61px",
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