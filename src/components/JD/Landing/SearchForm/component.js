import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import ReactSelectValidator from "../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import {NavLink} from "react-router-dom";
import ls from 'local-storage';
import { Steps, Hints } from "intro.js-react";

import "intro.js/introjs.css";

class JDHomeSearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepsEnabled: true,
            initialStep: 0,
            steps: [
              {
                element: "#FirstField",
                intro: "Specialization"
              },
              {
                element: "#SecondField",
                intro: "Lookinf For ?"
              }
            ],
            hintsEnabled: true,
            options: {
                skipLabel: "skip",
            },
            hints: [
              {
                element: "#FirstField",
                hint: "Select Specialization",
                hintPosition: "bottom-right"
              }
            ]
          };
    }

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }

    //INTRO JS
    onExit = () => {
        this.setState(() => ({ stepsEnabled: false }));
    };


    render() {
        const {
            classes,
            fields,
            selectFieldChangeHandler
            } = this.props;

        const {
            stepsEnabled,
            steps,
            initialStep,
            hintsEnabled,
            hints,
            options
        } = this.state;
        
        let jobIdLabel = ls.get('jobIdLabel');
        jobIdLabel = jobIdLabel ?  {value: jobIdLabel, label: jobIdLabel} : jobIdLabel

        let specIdLabel = ls.get('specIdLabel');
        specIdLabel = specIdLabel ?  {value: specIdLabel, label: specIdLabel} : specIdLabel

        return (
            <>
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={this.onExit}
                options={options}
            />
            <Hints enabled={hintsEnabled} hints={hints} />
            <div className={classes.landingsearchwrapper}>
                <Grid container>
                    <ValidatorForm
                        onSubmit={this.SubmitHandler}
                        autoComplete="off"
                        className={classes.landingsearchform}
                    >
                        <Grid item xs={12} md={2}>
                            <span className={classes.landingsearchlabel} >I'm Looking...</span>
                        </Grid>

                        <Grid item xs={12} md={4} id="FirstField">

                                <ReactSelectValidator
                                    id={fields.lookingField.name}
                                    name={fields.lookingField.name}
                                    value={fields.lookingField.value.length > 0 ? fields.lookingField.value : jobIdLabel}
                                    placeholder={fields.lookingField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.lookingField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.lookingField.options}
                                />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <span className={classes.landingsearchlabel}>for</span>
                        </Grid>

                        <Grid item xs={12} md={4} id="SecondField">

                                <ReactSelectValidator
                                    id={fields.forField.name}
                                    name={fields.forField.name}
                                    value={fields.forField.value.length > 0 ? fields.forField.value : specIdLabel}
                                    placeholder={fields.forField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.forField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.forField.options}
                                />
                        </Grid>

                        <Grid item xs={12}>
                            <NavLink
                                    to={"/templates"}    
                            >
                                <Button variant="contained" color="primary" type="submit" className={classes.searchsubmitbtn} disabled={(fields.lookingField.value.length > 0 ? fields.lookingField.value : jobIdLabel) && (fields.forField.value.length > 0 ? fields.forField.value : specIdLabel) ? false : true}>
                                    Search
                                </Button>
                            </NavLink>
                        </Grid>
                    </ValidatorForm>
                </Grid>
            </div>
            </>
        )
    }
}

export default withStyles(styles)(JDHomeSearchForm);