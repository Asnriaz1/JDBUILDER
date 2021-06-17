import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import CompanySettingsAbout from "./About/container";
import CompanySettingGeneral from "./General/container";

class AboutCompanySetting extends Component {
    state = {
        selected: 1,
    }

    selectChangeHandler = (value) => {
        this.setState({
            selected: value
        })
    }
    render() {
        const {
            classes
        } = this.props;
        
        return (
            <div className={classes.settingsmainrapper}>
                <div className={classes.settingswrapper}>
                    <p>Adjust Company setting here.</p>
                    <div className="tabs">
                        <span className={this.state.selected === 1 ? "active" : ""} onClick={() => this.selectChangeHandler(1)}>GENERAL</span>
                        <span className={this.state.selected === 2 ? "active" : ""} onClick={() => this.selectChangeHandler(2)}>ABOUT</span>
                    </div>
                {
                    this.state.selected === 1 ? <CompanySettingGeneral /> : <CompanySettingsAbout />
                }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AboutCompanySetting);