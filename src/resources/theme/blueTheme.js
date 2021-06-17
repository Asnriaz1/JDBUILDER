import { createMuiTheme } from "@material-ui/core/styles";
import secondaryColor from "@material-ui/core/colors/red";
import Theme from "./defaultTheme";

const blueTheme = createMuiTheme({
    ...Theme,
    palette: {
        type: "light",
        primary: {
            main: "#206DFB",
        },
        secondary: secondaryColor,
    }
})

export default blueTheme;