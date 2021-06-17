import { createMuiTheme } from "@material-ui/core/styles";
import secondaryColor from "@material-ui/core/colors/red";
import Theme from "./defaultTheme";

const darkTheme = createMuiTheme({
    ...Theme,
    palette: {
        type: "dark",
        primary: {
            main: "#0D4B91",
            light: "#0D4B91",
            dark: "#0D4B91"
        },
        secondary: secondaryColor,
    }
})

export default darkTheme;