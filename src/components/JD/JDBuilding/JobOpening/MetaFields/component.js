import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import CustomTextValidator from "../../../../common/ReduxBased/CustomTextValidator/component";
import { Grid, Tooltip, Zoom } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MUIEditor, { MUIEditorState, toolbarControlTypes, toHTML } from 'react-mui-draft-wysiwyg'
import ReactSelectValidator from "../../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import { FormControlLabel, Switch, Radio, RadioGroup, FormLabel } from '@material-ui/core';
import { ContentState, convertToRaw, convertFromRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert';

import {
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";

const editorConfig = {}
  const rawContent = {
    blocks: [],
    entityMap: {},
  }

class JobOpeningMetaFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(this.props.rawContentRolesRes),
              )
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, null);
        // this.props.fetchDataIfNeeded();

        let convertedData = convertFromHTML(this.props.rolesResHTMLData);
        let convertedRawData = convertToRaw(convertedData);

        const rawContents = {
            blocks: [...convertedRawData.blocks],
            entityMap: {},
        }
        this.setState({
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(rawContents),
              )
        })

        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedRolesResAsHTML(currentContentAsHTML);

        this.props.saveUpdatedRolesResEditor(rawContents);
    }

    componentWillUnmount = () => {
        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedRolesResAsHTML(currentContentAsHTML);
    }
   
    onChange = (newState) => {
        this.setState({
            editorState: newState
        })
      }

    appendRolesToEditor = (value, index) => {

        this.props.rolesActiveHandler(index);
        let oldData = convertToRaw(this.state.editorState.getCurrentContent());

        let newItem = {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            key: oldData.blocks.length+"roles",
            text: value,
            type: 'paragraph',
          };
        oldData = [...oldData.blocks, newItem]
        const rawContents = {
            blocks: [...oldData],
            entityMap: {},
        }
        this.setState({
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(rawContents),
              )
        })

        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedRolesResAsHTML(currentContentAsHTML);

        this.props.saveUpdatedRolesResEditor(rawContents);
    }

    appendResHandler = (value, index) => {

        this.props.resActiveHandler(index);
        let oldData = convertToRaw(this.state.editorState.getCurrentContent());
        let data = toHTML(this.state.editorState.getCurrentContent());

        let newItem = {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            key: oldData.blocks.length+"res",
            text: value,
            type: 'paragraph',
          };
        oldData = [...oldData.blocks, newItem]
        const rawContents = {
            blocks: [...oldData],
            entityMap: {},
        }
        this.setState({
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(rawContents),
              )
        })

        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedRolesResAsHTML(currentContentAsHTML);

        this.props.saveUpdatedRolesResEditor(rawContents);
    }

    render() {
        const {
            classes,
            fields,
            textFieldChangeHandler,
            addRoleIsExpanded,
            toggleAddRoleExpansionPanel,
            addResIsExpanded,
            toggleAddResExpansionPanel,
            rolesData,
            resData,
            selectFieldChangeHandler,
            radioChangeHandler,
            switchChangeHandler
        } = this.props;
        const config = {
            toolbar: {
               controls: [
                   toolbarControlTypes.bold,
                   toolbarControlTypes.italic,
                   toolbarControlTypes.underline,
                   toolbarControlTypes.unorderedList,
                   toolbarControlTypes.orderedList,
                 ],
               },
               editor: {
                className: 'texteditor',
              },
        }; 
        return (
            <>
                <div className={classes.metafieldwrapper}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <span className={classes.metatitle}>{fields.jobTitleField.label}</span>
                            <CustomTextValidator
                                id={fields.jobTitleField.name}
                                validations={true}
                                fullWidth={true}
                                type="text"
                                placeholder={fields.jobTitleField.placeholder}
                                name={fields.jobTitleField.name}
                                value={fields.jobTitleField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.jobTitleField.name,
                                        value
                                    );
                                }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                                className="jobtitlefield"
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <span className={classes.metatitle}>{fields.jobCodeField.label}</span>
                            <CustomTextValidator
                                id={fields.jobCodeField.name}
                                validations={true}
                                fullWidth={true}
                                type="text"
                                placeholder={fields.jobCodeField.placeholder}
                                name={fields.jobCodeField.name}
                                value={fields.jobCodeField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.jobCodeField.name,
                                        value
                                    );
                                }}
                                disabled={true}
                                validators={["required"]}
                                errorMessages={["Required"]}
                            />
                        </Grid>
                    </Grid>

                    <div className={classes.rolesandreswrapper}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <span className={classes.metatitle}>Roles and Responsibilities</span>
                            <div className={classes.texteditorwrapper}>
                                <MUIEditor editorState={this.state.editorState} 
                                    onChange={this.onChange}
                                    config={config}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <ExpansionPanel
                                className={classes.ExpansionPanel}
                                defaultExpanded={false}
                                expanded={addRoleIsExpanded}
                                onChange={() => toggleAddRoleExpansionPanel(addRoleIsExpanded)}
                            >
                                <ExpansionPanelSummary
                                    className={classes.ExpansionPanelSummary}
                                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon}/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <label className={classes.expansionPanelTitle}>Add Role</label>
                                </ExpansionPanelSummary>
                                <Divider className={classes.ExpansionDivider}/>
                                <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
                                    <div className={classes.suggesteditems}>
                                        {
                                            rolesData.map((item, index) => (
                                                <Tooltip key={index} title={item.desc} arrow placement="left" TransitionComponent={Zoom} TransitionProps={{ timeout: 600 }} >
                                                <div className="item"  onClick={() => this.appendRolesToEditor(item.desc, index)}>
                                                    <CheckCircleIcon className={item.isActive ? classes.addeditembg : ""}/>
                                                    <span className="description">{item.desc}</span>
                                                </div>
                                                </Tooltip>
                                            ))
                                        }
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>


                            <ExpansionPanel
                                className={classes.ExpansionPanel}
                                defaultExpanded={false}
                                expanded={addResIsExpanded}
                                onChange={() => toggleAddResExpansionPanel(addResIsExpanded)}
                            >
                                <ExpansionPanelSummary
                                    className={classes.ExpansionPanelSummary}
                                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon}/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <label className={classes.expansionPanelTitle}>Add Responsibilities</label>
                                </ExpansionPanelSummary>
                                <Divider className={classes.ExpansionDivider}/>
                                <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
                                    <div className={classes.suggesteditems}>
                                        {
                                            resData.map((item, index) => (
                                                <Tooltip key={index} title={item.desc} arrow placement="left" TransitionComponent={Zoom} TransitionProps={{ timeout: 600 }}>
                                                <div className="item" onClick={() => this.appendResHandler(item.desc, index)}>
                                                    <CheckCircleIcon className={item.isActive ? classes.addeditembg : ""}/>
                                                    <span>{item.desc}</span>
                                                </div>
                                                </Tooltip>
                                            ))
                                        }
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                    </div>

                    {/* employment details starts here  */}
                    <div className={classes.sectiontitle}>
                        <span>Employment Detail</span>
                    </div>
                    <div className={classes.distancewrapper}>
                        <Grid container>
                        <Grid item xs={12} md={6}>
                            <span className={classes.metatitle}>{fields.industryField.label}</span>
                            <ReactSelectValidator
                                    id={fields.industryField.name}
                                    name={fields.industryField.name}
                                    value={fields.industryField.value}
                                    placeholder={fields.industryField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.industryField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    options={fields.industryField.options}
                                    className="jobtitlefield"
                                />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <span className={classes.metatitle}>{fields.functionField.label}</span>
                            <ReactSelectValidator
                                    id={fields.functionField.name}
                                    name={fields.functionField.name}
                                    value={fields.functionField.value}
                                    placeholder={fields.functionField.placeholder}
                                    isClearable={true}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.functionField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.functionField.options}
                                />
                        </Grid>
                    </Grid>
                    </div>

                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <span className={classes.metatitle}>{fields.employmenTypeField.label}</span>
                            <ReactSelectValidator
                                    id={fields.employmenTypeField.name}
                                    name={fields.employmenTypeField.name}
                                    value={fields.employmenTypeField.value}
                                    placeholder={fields.employmenTypeField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.employmenTypeField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    options={fields.employmenTypeField.options}
                                    className="jobtitlefield"
                                />
                        </Grid>

                        <Grid item xs={12} md={2} className={classes.yeartooltips}>
                            <span className={classes.metatitle}>{fields.minYearField.label}</span>
                            <CustomTextValidator
                                id={fields.minYearField.name}
                                validations={true}
                                fullWidth={true}
                                type="number"
                                placeholder={fields.minYearField.placeholder}
                                name={fields.minYearField.name}
                                value={fields.minYearField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.minYearField.name,
                                        value
                                    );
                                }}
                                inputProps={{ min: "0", max: "30", }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                            />
                            <Tooltip title="Minimum Required Experience" arrow placement="top">
                                <span className="ask">?</span>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={12} md={2} className={classes.yeartooltips}>
                            <span className={classes.metatitle}>{fields.maxYearField.label}</span>
                            <CustomTextValidator
                                id={fields.maxYearField.name}
                                validations={true}
                                fullWidth={true}
                                type="number"
                                placeholder={fields.maxYearField.placeholder}
                                name={fields.maxYearField.name}
                                value={fields.maxYearField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.maxYearField.name,
                                        value
                                    );
                                }}
                                inputProps={{ min: "0", max: "30", }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                            />
                            <Tooltip title="Maximum Required Experience" arrow placement="top">
                                <span className="ask">?</span>
                            </Tooltip>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <span className={classes.metatitle}>{fields.positionField.label}</span>
                            <CustomTextValidator
                                id={fields.positionField.name}
                                validations={true}
                                fullWidth={true}
                                type="number"
                                placeholder={fields.positionField.placeholder}
                                name={fields.positionField.name}
                                value={fields.positionField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.positionField.name,
                                        value
                                    );
                                }}
                                inputProps={{ min: "1", max: "30", }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <span style={{marginTop: 13, display: "block"}}></span>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <span className={classes.metatitle}>{fields.AddressField.label}</span>
                            <CustomTextValidator
                                id={fields.AddressField.name}
                                validations={true}
                                fullWidth={true}
                                type="text"
                                placeholder={fields.AddressField.placeholder}
                                name={fields.AddressField.name}
                                value={fields.AddressField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.AddressField.name,
                                        value
                                    );
                                }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                                className="jobtitlefield"
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <span className={classes.metatitle}>{fields.QualificationField.label}</span>
                            <ReactSelectValidator
                                    id={fields.QualificationField.name}
                                    name={fields.QualificationField.name}
                                    value={fields.QualificationField.value}
                                    placeholder={fields.QualificationField.placeholder}
                                    isClearable={true}
                                    onChange={value => {
                                        selectFieldChangeHandler(
                                            fields.QualificationField.name,
                                            value
                                        );
                                    }}
                                    isSearchable={true}
                                    options={fields.QualificationField.options}
                                />
                        </Grid>
                        
                    </Grid>

                    {/* salary details start here  */}
                    <div className={classes.switchfield}>
                    <span>{fields.remoteWorkingField.label}</span>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={fields.remoteWorkingField.value}
                            onChange={(e) => switchChangeHandler(fields.remoteWorkingField.name, e)}
                            name={fields.remoteWorkingField.name}
                            color="primary"
                        />
                        }
                        label=""
                    />
                    </div>

                    <div>
                            <FormLabel component="legend">Salary Type</FormLabel>
                            <RadioGroup
                                value={fields.salaryTypeField.value} 
                                onChange={radioChangeHandler}
                            >
                                <FormControlLabel value="hourly" control={<Radio color="primary" />} label="Hourly" />
                                {
                                    fields.salaryTypeField.value === "hourly" ? 
                             
                            <ReactSelectValidator
                            id={fields.hourlyMaxRateField.name}
                            name={fields.hourlyMaxRateField.name}
                            value={fields.hourlyMaxRateField.value}
                            placeholder={fields.hourlyMaxRateField.placeholder}
                            isClearable={true}
                            onChange={value => {
                                selectFieldChangeHandler(
                                    fields.hourlyMaxRateField.name,
                                    value
                                );
                            }}
                            isSearchable={true}
                            options={fields.hourlyMaxRateField.options}
                            validators={["required"]}
                                errorMessages={["Required"]}
                            className={classes.radioFields}
                        />  : null }
                                
                                <FormControlLabel value="monthly" control={<Radio color="primary" />} label="Monthly" />

                                {
                                    fields.salaryTypeField.value === "monthly" ? 
                                <div style={{display: "inline-block"}}>
                                    <ReactSelectValidator
                                        id={fields.monthlySalaryRangField.name}
                                        name={fields.monthlySalaryRangField.name}
                                        value={fields.monthlySalaryRangField.value}
                                        placeholder={fields.monthlySalaryRangField.placeholder}
                                        isClearable={true}
                                        onChange={value => {
                                            selectFieldChangeHandler(
                                                fields.monthlySalaryRangField.name,
                                                value
                                            );
                                        }}
                                        isSearchable={true}
                                        options={fields.monthlySalaryRangField.options}
                                        validators={["required"]}
                                        errorMessages={["Required"]}
                                        className={classes.radioFields}
                                    />

                                    <ReactSelectValidator
                                        id={fields.monthlyCurrencyField.name}
                                        name={fields.monthlyCurrencyField.name}
                                        value={fields.monthlyCurrencyField.value}
                                        placeholder={fields.monthlyCurrencyField.placeholder}
                                        isClearable={true}
                                        onChange={value => {
                                            selectFieldChangeHandler(
                                                fields.monthlyCurrencyField.name,
                                                value
                                            );
                                        }}
                                        isSearchable={true}
                                        options={fields.monthlyCurrencyField.options}
                                        validators={["required"]}
                                        errorMessages={["Required"]}
                                        className={classes.radioFields}
                                    />
                                </div> : null }

                                <FormControlLabel value="yearly" control={<Radio color="primary" />} label="Yearly" />
                                {
                                    fields.salaryTypeField.value === "yearly" ? 
                                <div style={{display: "inline-block"}}>
                                    <ReactSelectValidator
                                        id={fields.yearlySalaryRangField.name}
                                        name={fields.yearlySalaryRangField.name}
                                        value={fields.yearlySalaryRangField.value}
                                        placeholder={fields.yearlySalaryRangField.placeholder}
                                        isClearable={true}
                                        onChange={value => {
                                            selectFieldChangeHandler(
                                                fields.yearlySalaryRangField.name,
                                                value
                                            );
                                        }}
                                        isSearchable={true}
                                        options={fields.yearlySalaryRangField.options}
                                        validators={["required"]}
                                         errorMessages={["Required"]}
                                        className={classes.radioFields}
                                    />

                                    <ReactSelectValidator
                                        id={fields.yearlyCurrencyField.name}
                                        name={fields.yearlyCurrencyField.name}
                                        value={fields.yearlyCurrencyField.value}
                                        placeholder={fields.yearlyCurrencyField.placeholder}
                                        isClearable={true}
                                        onChange={value => {
                                            selectFieldChangeHandler(
                                                fields.yearlyCurrencyField.name,
                                                value
                                            );
                                        }}
                                        isSearchable={true}
                                        options={fields.yearlyCurrencyField.options}
                                        validators={["required"]}
                                        errorMessages={["Required"]}
                                        className={classes.radioFields}
                                    />
                                </div> : null }
                            </RadioGroup>
                    </div>

                    <div className={classes.switchfield}>
                    <span>{fields.showSalaryField.label}</span>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={fields.showSalaryField.value}
                            onChange={(e) => switchChangeHandler(fields.showSalaryField.name, e)}
                            name={fields.showSalaryField.name}
                            color="primary"
                        />
                        }
                        label=""
                    />
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(JobOpeningMetaFields);