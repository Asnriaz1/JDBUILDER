import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import ReactSelectValidator from "../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import ls from 'local-storage';

class JDHomeSearchForm extends Component {

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }

    selectFieldChangeHandler = (name, e) => {
        this.props.selectFieldChangeHandler(name, e);
    }
    render() {
        const {
            classes,
            fields,
            } = this.props;

        let jobIdLabel = ls.get('jobIdLabel');
        jobIdLabel = jobIdLabel ?  {value: jobIdLabel, label: jobIdLabel} : jobIdLabel

        let specIdLabel = ls.get('specIdLabel');
        specIdLabel = specIdLabel ?  {value: specIdLabel, label: specIdLabel} : specIdLabel

        return (
            <div className={classes.landingsearchwrapper}>
                <Grid container>
                    <ValidatorForm
                        onSubmit={this.SubmitHandler}
                        autoComplete="off"
                        className={classes.landingsearchform}
                    >
                        <Grid item xs={12} md={1}>
                            <span className={classes.landingsearchlabel} >I'm Looking...</span>
                        </Grid>

                        <Grid item xs={12} md={4}>

                                <ReactSelectValidator
                                    id={fields.lookingField.name}
                                    name={fields.lookingField.name}
                                    value={fields.lookingField.value.length > 0 ? fields.lookingField.value : jobIdLabel}
                                    placeholder={fields.lookingField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        this.selectFieldChangeHandler(
                                            fields.lookingField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.lookingField.options}
                                    className={classes.searchfield}
                                />
                        </Grid>

                        <Grid item xs={12} md={1}>
                            <span className={classes.landingsearchlabel}>for</span>
                        </Grid>

                        <Grid item xs={12} md={4}>

                                <ReactSelectValidator
                                    id={fields.forField.name}
                                    name={fields.forField.name}
                                    value={fields.forField.value.length > 0 ? fields.forField.value : specIdLabel}
                                    placeholder={fields.forField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        this.selectFieldChangeHandler(
                                            fields.forField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.forField.options}
                                    className={classes.searchfield}
                                />
                        </Grid>

                        {/* <Grid item xs={12} md={2}>
                                <Button variant="contained" color="primary" type="submit" className={classes.searchsubmitbtn} disabled={(fields.lookingField.value.length > 0 ? fields.lookingField.value : jobIdLabel) && (fields.forField.value.length > 0 ? fields.forField.value : specIdLabel) ? false : true}>
                                    Search
                                </Button>
                        </Grid> */}
                    </ValidatorForm>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(JDHomeSearchForm);