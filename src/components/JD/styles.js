import BG from "../../resources/images/landingbg.svg";

export const styles = theme => ({
    landingsearchwrapper: {
        border: "1px solid #DBDBDB",
        maxWidth: 1300,
        margin: "auto",
        padding: 38,
    },
    mainWrapper: {
        background:  `url(${BG})`,
        backgroundSize: "cover",
        padding: "32px 13px",
        minHeight: "calc(100vh - 115px)",
    }
});