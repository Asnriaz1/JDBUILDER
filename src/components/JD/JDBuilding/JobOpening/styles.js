import BG from "../../../../resources/images/landingbg.svg";

export const styles = theme => ({
    jobopeningwrapper: {
        background:  `url(${BG})`,
        backgroundSize: "cover",
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
    jdbuildingnextbtn: {
        
    }
});