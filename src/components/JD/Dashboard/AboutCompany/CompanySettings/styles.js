import BG from "../../../../../resources/images/landingbg.svg";

export const styles = theme => ({
    settingsmainrapper: {
        background:  `url(${BG})`,
        backgroundSize: "cover",
        padding: "32px 13px",
        minHeight: "calc(100vh - 115px)",
    },
    settingswrapper: {
        background: "white",
        padding: 38,
        margin: "0px 38px",
        "& p": {
            color: "#707070",
        },
        "& .tabs": {
            marginTop: 13,
            "& span": {
                display: "inline-block",
                width: "auto",
                marginRight: 17,
                padding: 3,
                textTransform: "uppercase",
                color: "#707070",
                cursor: "pointer",
            },
            "& .active": {
                borderTop: "3px solid #5D33D0",
            }
        }
    }
});