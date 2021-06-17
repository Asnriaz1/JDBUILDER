import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./styles";
import {TextValidator} from "react-material-ui-form-validator";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import ReduxGeneralHOC from "../../../HOCs/ReduxGeneralHOC/component";
import RoleBasedRenderHOC from "../../../HOCs/RoleBasedRenderHOC/container";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import ReactSelectValidator from "../CustomReactSelectValidator/ReactSelectValidator";
import TextField from "@material-ui/core/TextField";

class CustomTextValidator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideValueAttr: props.hideValueAttr === undefined ? false : props.hideValueAttr,
            returnType: props.returnType !== undefined && props.returnType.indexOf(["object", "string"]) ? props.returnType : "object"
        };
        this.changeField = this.changeField.bind(this);
        this.blurField = this.blurField.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    changeField(e) {
        if (this.props.returnType !== undefined) {
            if (this.props.returnType === "string") {
                this.props.onChange(e.target.value);
            } else {
                this.props.onChange({
                    value: e.target.value
                });
            }
        } else {
            if (!!e) {
                this.props.onChange({
                    value: !!e.target && !!e.target.value ? e.target.value : e
                });
            }
        }

        this.setState({
            hideValueAttr: this.props.hideValueAttr === undefined ? true : this.props.hideValueAttr
        });
    }

    blurField(e) {
        if (this.props.returnType !== undefined) {
            if (this.props.returnType === "text") {
                this.props.onChange(e.target.value.trim());
            } else {
                this.props.onChange({
                    value: e.target.value.trim()
                });
            }
        } else {
            this.props.onChange({
                value: e.target.value.trim()
            });
        }
        this.setState({
            hideValueAttr: false
        });
    }

    keyDown(e) {
        if(e.keyCode === 13){
            this.props.onChange({
                value: e.target.value.trim()
            });
        }
    }

    render() {
        const {
            field,
            value,
            validation,
            InputProps,
            hideValueAttr,
            returnType,
            // format,
            onChange,
            ...rest
        } = this.props;
        return (
            <Fragment>
                {validation === false ? (
                    <TextField InputProps={InputProps} value={value} onChange={this.changeField}
                               onBlur={this.blurField} {...rest} />
                ) : (
                    <>
                        {this.state.hideValueAttr === true ? (
                            <Fragment>
                                {this.props.format !== undefined ? (
                                    <>
                                        {!!this.props.tel ? (
                                            <>
                                                <PhoneInput
                                                    country='PK'
                                                    placeholder='Enter phone number'
                                                    // value={ this.state.value }
                                                    // onChange={ value => this.setState({ value }) }
                                                    onChange={this.changeField}
                                                    error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
                                                    {...rest}
                                                />
                                            </>
                                        ) : (
                                            <NumberFormat customInput={TextValidator}
                                                          onBlur={this.blurField} {...rest} />
                                        )}
                                    </>
                                ) : (
                                    <TextValidator onBlur={this.blurField} onKeyDown={this.keyDown} {...rest}
                                                   validators={[]} errorMessages={[]}/>
                                )}
                            </Fragment>
                        ) : (
                            <Fragment>
                                {this.props.format !== undefined ? (
                                    <>
                                        {!!this.props.tel ? (
                                            <>
                                                <PhoneInput
                                                    country='PK'
                                                    placeholder='Enter phone number'
                                                    value={value}
                                                    // onChange={ value => this.setState({ value }) }
                                                    onChange={this.changeField}
                                                    autoComplete={"off"}
                                                    error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
                                                    countrySelectComponent={ReactSelectValidator}
                                                    inputComponent={this}
                                                    {...rest}
                                                />
                                            </>
                                        ) : (
                                            <NumberFormat customInput={TextValidator} value={value}
                                                          onBlur={this.blurField}
                                                          onChange={this.changeField} {...rest} />
                                        )}
                                    </>
                                ) : (
                                    <TextValidator InputProps={InputProps} value={(value === null) ? '' : value} onChange={this.changeField}
                                                    {...rest} />
                                )}
                            </Fragment>
                        )}
                    </>
                )}
            </Fragment>
        );
    }
}

CustomTextValidator.propTypes = {
    field: PropTypes.shape({
        label: PropTypes.string,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.any,
        hideValueAttr: PropTypes.bool, // For Form Validator Plugin.
        error: PropTypes.object
    }),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    name: PropTypes.string.isRequired,
    validators: PropTypes.array.isRequired,
    errorMessages: PropTypes.array.isRequired
};

export default RoleBasedRenderHOC(ReduxGeneralHOC(withStyles(styles)(CustomTextValidator)));
