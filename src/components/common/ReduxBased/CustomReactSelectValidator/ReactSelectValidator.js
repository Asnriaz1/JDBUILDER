import React from "react";
import {ValidatorComponent} from "react-form-validator-core";
import Select from "react-select";
import RoleBasedRenderHOC from "../../../HOCs/RoleBasedRenderHOC/container";
import AsyncSelect from "react-select/async";
import CreatableSelect from 'react-select/creatable';

class ReactSelectValidator extends ValidatorComponent {
    render() {
        const {error, label, async, createable, styleObject, customStyle, overwriteStyle, overwriteOptionStyle, ...rest} = this.props;

        return (
            <span>
				{!!label && <label>{label}</label>}
                {!!async ? (
                    <AsyncSelect
                        className="react-select-container"
                        classNamePrefix="react-select"
                        cacheOptions
                        loadOptions={this.props.searchFacilitatorLoad}
                        onBlurResetsInput={false}
                        onChange={this.props.searchFacilitatorInput}
                        components={
                            {
                                // IndicatorSeparator: null,
                                // DropdownIndicator: dropdownIndicator
                            }
                        }
                        menuPortalTarget={document.getElementById('root')}
                        isClearable={true}
                        styles={
                            {
                                clearIndicator: base => ({
                                    ...base,
                                    padding: "5px 8px"
                                }),
                                menuPortal: base => ({...base, zIndex: 9999}),
                                option: (base, state) => ({
                                    ...base,
                                    // textTransform: "lowercase",
                                    // "&::first-letter": {
                                    //     textTransform: "capitalize"
                                    // },
                                    "&:focus": {
                                        outline: "none"
                                    },
                                    backgroundColor: state.isSelected ? "#193F6F" : "white",
                                    color: state.isSelected ? "white" : "inherit",
                                    "&:hover": {
                                        backgroundColor: "#0778b9",
                                        color: "white"
                                    },
                                  ...overwriteOptionStyle
                                }),

                                singleValue: base => ({
                                    ...base,
                                    // textTransform: "lowercase",
                                    // "&::first-letter": {
                                    //     textTransform: "capitalize"
                                    // }
                                }),
                                control: base => ({
                                    ...base,
                                    borderColor: this.state.isValid === false && this.props.validators.length > 0 ? "#fc4336" : "#c7ccd0",
                                    height: "auto",
                                    minHeight: 34,
                                    lineHeight: 1,
                                    borderRadius: !!customStyle?customStyle:5,
                                    backgroundColor: this.state.isValid === false && this.props.validators.length > 0 ? "#FBBDC9" : "white",
                                    boxShadow: "none",
                                    border: this.state.isValid === false && this.props.validators.length > 0 ? "2px solid red" :!!customStyle?customStyle.color11: "2px solid #EDEDED",
                                    "&:hover": {
                                        borderWidth: 2
                                    },
                                    "&:focus": {
                                        outline: "none"
                                    },
                                    borderBottom:!!customStyle?customStyle.bottomBorder: ""
                                }),

                                indicatorSeparator: base => ({
                                    ...base,
                                    backgroundColor: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED'
                                }),
                                dropdownIndicator: base => ({
                                    ...base,
                                    padding: "5px 8px",
                                    color: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED',
                                    "&:hover": {
                                        color: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED',
                                    }
                                }),

                                valueContainer: base => ({
                                    ...base,
                                    padding: "0 15px"
                                }),

                                placeholder: base => ({
                                    ...base,
                                    color: this.state.isValid === false && this.props.validators.length > 0 ? "#AF838C" : "#BDBDBD",
                                    fontSize: "inehrit",
                                    fontWeight: 300
                                }),
                                colors: {
                                    primary: "red"
                                },
                                menu: (base) => ({
                                    ...base,
                                    maxHeight: 50
                                }),
                                menuList: base => ({
                                    ...base,
                                    maxHeight: 150
                                }),

                              //...overwriteStyle
                            }
                        }
                        menuPortalTarget={document.getElementById('root')}
                        menuPlacement={'auto'}
                        menuPosition={'absolute'}
                        {...rest}
                    />
                ) : (
                    (!!createable ? (
                        <CreatableSelect
                            isClearable
                            className="react-select-container"
                            classNamePrefix="react-select"
                            menuPortalTarget={document.getElementById('root')}
                            isClearable={true}
                            styles={{
                                clearIndicator: base => ({
                                    ...base,
                                    padding: "5px 8px"
                                }),
                                menuPortal: base => ({...base, zIndex: 9999}),
                                option: (base, state) => ({
                                    ...base,
                                    // textTransform: "none",
                                    // "&::first-letter": {
                                    //     textTransform: "none"
                                    // },
                                    "&:focus": {
                                        outline: "none"
                                    },
                                    backgroundColor: state.isSelected ? "#193F6F" : "white",
                                    color: state.isSelected ? "white" : "inherit",
                                    "&:hover": {
                                        backgroundColor: "#0778b9",
                                        color: "white"
                                    }
                                }),

                                singleValue: base => ({
                                    ...base,
                                    // textTransform: "none",
                                    // "&::first-letter": {
                                    //     textTransform: "none"
                                    // }
                                }),

                                control: base => ({
                                    ...base,
                                    borderColor: this.state.isValid === false && this.props.validators.length > 0 ? "#fc4336" : "#c7ccd0",
                                    height: "auto",
                                    minHeight: 34,
                                    lineHeight: 1,
                                    borderRadius: 30,
                                    boxShadow: "none",
                                    border: "2px solid #EDEDED",
                                    "&:hover": {
                                        border: "2px solid #EDEDED"
                                    },
                                    "&:focus": {
                                        outline: "none"
                                    }
                                }),

                                indicatorSeparator: base => ({
                                    ...base,
                                    backgroundColor: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED'
                                }),
                                dropdownIndicator: base => ({
                                    ...base,
                                    padding: "5px 8px",
                                    color: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED',
                                    "&:hover": {
                                        color: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED',
                                    }
                                }),

                                valueContainer: base => ({
                                    ...base,
                                    padding: "0 15px"
                                }),

                                placeholder: base => ({
                                    ...base,
                                    color: this.state.isValid === false && this.props.validators.length > 0 ? "#AF838C" : "#BDBDBD",
                                    fontSize: "inherit"
                                }),
                                colors: {
                                    primary: "red"
                                },
                                menu: (base) => ({
                                    ...base,
                                    maxHeight: 50
                                }),
                                menuList: base => ({
                                    ...base,
                                    maxHeight: 150
                                })
                            }}
                            menuPortalTarget={document.getElementById('root')}
                            menuPlacement={'auto'}
                            menuPosition={'absolute'}
                            {...rest}
                        />
                    ) : (<Select
                            // error={!isValid || error}
                            // helperText={(!isValid && this.getErrorMessage()) || helperText}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            isClearable={true}
                            styles={{
                                clearIndicator: base => ({
                                    ...base,
                                    padding: "5px 8px"
                                }),
                                menuPortal: base => ({...base, zIndex: 9999}),
                                option: (base, state) => ({
                                    ...base,
                                    "&:focus": {
                                        outline: "none"
                                    },
                                    backgroundColor: state.isSelected ? "#193F6F" : "white",
                                    color: state.isSelected ? "white" : "inherit",
                                    "&:hover": {
                                        backgroundColor: "#0778b9",
                                        color: "white"
                                    }
                                }),

                                singleValue: base => ({
                                    ...base,
                                    // textTransform: "lowercase",
                                    // "&::first-letter": {
                                    //     textTransform: "capitalize"
                                    // }
                                }),

                                control: base => ({
                                    ...base,
                                    borderColor: this.state.isValid === false && this.props.validators.length > 0 ? "#fc4336" : "#c7ccd0",
                                    height: "auto",
                                    minHeight: 34,
                                    lineHeight: 1,
                                    borderRadius: 5,
                                    backgroundColor: this.state.isValid === false && this.props.validators.length > 0 ? "#FBBDC9" : "white",
                                    boxShadow: "none",
                                    border: this.state.isValid === false && this.props.validators.length > 0 ? "2px solid red" : "2px solid #EDEDED",
                                    "&:hover": {
                                        borderWidth: 2
                                    },
                                    "&:focus": {
                                        outline: "none"
                                    }
                                }),

                                indicatorSeparator: base => ({
                                    ...base,
                                    backgroundColor: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED'
                                }),
                                dropdownIndicator: base => ({
                                    ...base,
                                    padding: "5px 8px",
                                    color: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED',
                                    "&:hover": {
                                        color: this.state.isValid === false && this.props.validators.length > 0 ? 'red' : '#EDEDED',
                                    }
                                }),

                                valueContainer: base => ({
                                    ...base,
                                    padding: "5px 15px"
                                }),

                                placeholder: base => ({
                                    ...base,
                                    color: this.state.isValid === false && this.props.validators.length > 0 ? "#AF838C" : "#BDBDBD",
                                    fontSize: "inehrit",
                                    fontWeight: 300
                                }),
                                colors: {
                                    primary: "red"
                                },
                                menu: (base) => ({
                                    ...base,
                                    maxHeight: 150
                                }),
                                menuList: base => ({
                                    ...base,
                                    maxHeight: 150
                                }),
                                ...styleObject
                            }}
                            menuPortalTarget={document.getElementById('root')}
                            menuPlacement={'auto'}
                            menuPosition={'absolute'}
                            {...rest}
                        />
                    ))
                )}
                {this.state.isValid === false ? (
                    <span className={`${!!this.props.errorClass ? this.props.errorClass : "error--msg"}`}>
						{this.getErrorMessage()}
					</span>
                ) : (
                    <></>
                )}
			</span>
        );
    }
}

ReactSelectValidator.propTypes = {};

export default RoleBasedRenderHOC(ReactSelectValidator);
