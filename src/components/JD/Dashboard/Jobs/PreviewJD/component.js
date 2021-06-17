import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Download from "../../../JDBuilding/Download/container";
import ls from 'local-storage'

class PreviewJD extends Component {

    state = {
        jobCode: ""
    }

    componentDidMount = () => {
        let jobCode = window.location.pathname.replace("/user/jd/", "")
        this.setState({
            jobCode: jobCode
        })
        ls.set('jobCode', jobCode)
    }

    render() {
        const { 
            classes,
         } = this.props;

        return (
            <>
                <Download jobCode={this.state.jobCode}/>
            </>
        )
    }
}

export default withStyles(styles)(PreviewJD);