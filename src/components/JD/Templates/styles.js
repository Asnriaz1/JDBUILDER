import BG from "../../../resources/images/landingbg.svg";

export const styles = theme => ({
    mainWrapper: {
        background:  `url(${BG})`,
  
        backgroundSize: "cover",
        padding: "32px 13px",
        minHeight: "calc(100vh - 100px)",
    },
    templateheadtitle: {
        maxWidth: 600,
        textAlign: "center",
        margin: "auto",
        color: "#707070",
        "& h1": {
            fontWeight: 500,
        }
    },
    landingtemplatewrapper: {
        maxWidth: 1300,
        margin: "auto",
    },
});