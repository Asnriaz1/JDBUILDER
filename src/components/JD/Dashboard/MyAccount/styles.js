import BG from "../../../../resources/images/landingbg.svg";

export const styles = theme => ({
    settingsmainrapper: {
        background:  `url(${BG})`,
        backgroundSize: "cover",
        padding: "32px 13px",
        minHeight: "calc(100vh - 115px)",
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
        "& .submitbtn": {
            margin: 13,
            height: 61,
            width: 230,
            float: "right",
        }
    },
    settingswrapper: {
        background: "white",
        padding: 38,
        margin: "0px 38px",
        "& p": {
            color: "#707070",
        },
    }
});