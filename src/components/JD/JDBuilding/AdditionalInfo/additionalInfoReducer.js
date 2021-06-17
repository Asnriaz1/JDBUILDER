import {
   
    JD_ADDITIONAL_INFO_TEXT_CHANGE_HANDLER,
    JD_ADDITIONAL_INFO_SELECT_CHANGE_HANDLER,
    JD_ADDITIONAL_INFO_ADD_NEW_SKILL_HANDLER,
    JD_ADDITIONAL_INFO_ADD_NEW_LANGUAGE_HANDLER,
    JD_ADDITIONAL_INFO_RECOM_SKILL_ACTIVE_HANDLER,
    JD_ADDITIONAL_INFO_REMOVE_SKILL_HANDLER,
    JD_ADDITIONAL_INFO_REMOVE_LANGUAGE_HANDLER,
    JD_ADDITIONAL_INFO_RECOMMENDED_SKILLS_SAVE_HANDLER,
    JD_ADDITIONAL_INFO_SEARCH_SAVE_SKILL_TITLE_HANDLER

} from "./actions";

export const additionalInfoReducer = (state = [], action) => {
    switch (action.type) {
        case JD_ADDITIONAL_INFO_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    additionalinfoForm: {
                        ...state.forms.additionalinfoForm,
                        fields: {
                            ...state.forms.additionalinfoForm.fields,
                            [action.key]: {
                                ...state.forms.additionalinfoForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }

        case JD_ADDITIONAL_INFO_SEARCH_SAVE_SKILL_TITLE_HANDLER: {
            return {
                ...state,
    
                forms: {
                    ...state.forms,
                    additionalinfoForm: {
                        ...state.additionalinfoForm,
                        fields: {
                            ...state.forms.additionalinfoForm.fields,
                            [action.key]: {
                                ...state.forms.additionalinfoForm.fields[action.key],
                                options: [...action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_ADDITIONAL_INFO_SELECT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    additionalinfoForm: {
                        ...state.forms.additionalinfoForm,
                        fields: {
                            ...state.forms.additionalinfoForm.fields,
                            [action.key]: {
                                ...state.forms.additionalinfoForm.fields[action.key],
                                value: (action.payload === null) ? [] : [action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_ADDITIONAL_INFO_ADD_NEW_SKILL_HANDLER: {
            let newSkills = state.data.skillsData
            return {
                ...state,
                data: {
                    ...state.data,
                    skillsData: [...newSkills, action.payload]
                },
                forms: {
                    ...state.forms,
                    additionalinfoForm: {
                        ...state.forms.additionalinfoForm,
                        fields: {
                            ...state.forms.additionalinfoForm.fields,
                            skillsField: {
                                ...state.forms.additionalinfoForm.fields.skillsField,
                                value: []
                            },
                            skillsLevelField: {
                                ...state.forms.additionalinfoForm.fields.skillsLevelField,
                                value: []
                            },
                            skillsImportanceField: {
                                ...state.forms.additionalinfoForm.fields.skillsImportanceField,
                                value: []
                            }
                        }
                    }
                }
            }
        }
        case JD_ADDITIONAL_INFO_ADD_NEW_LANGUAGE_HANDLER: {
            let newLanguage = state.data.languagesData
            return {
                ...state,
                data: {
                    ...state.data,
                    languagesData: [...newLanguage, action.payload]
                },
                forms: {
                    ...state.forms,
                    additionalinfoForm: {
                        ...state.forms.additionalinfoForm,
                        fields: {
                            ...state.forms.additionalinfoForm.fields,
                            languageField: {
                                ...state.forms.additionalinfoForm.fields.languageField,
                                value: []
                            },
                            languageLevelField: {
                                ...state.forms.additionalinfoForm.fields.languageLevelField,
                                value: []
                            },
                            languageImportanceField: {
                                ...state.forms.additionalinfoForm.fields.languageImportanceField,
                                value: []
                            }
                        }
                    }
                }
            }
        }
        case JD_ADDITIONAL_INFO_RECOM_SKILL_ACTIVE_HANDLER: {
            let oldRecSkills = state.data.recommendedSkills
            oldRecSkills = oldRecSkills.filter((item) => {
                return item.id !== action.payload.id
            })

            return {
                ...state,
                data: {
                    ...state.data,
                    recommendedSkills: [...oldRecSkills],
                },
            }
        }

        case JD_ADDITIONAL_INFO_REMOVE_SKILL_HANDLER: {
            let skills = state.data.skillsData;

            skills = skills.filter(function(item) { 
                return item.id !== action.payload
            })
            
            return {
                ...state,
                data: {
                    ...state.data,
                    skillsData: [...skills]
                }
            }
        }

        case JD_ADDITIONAL_INFO_REMOVE_LANGUAGE_HANDLER: {
            let languages = state.data.languagesData;

            languages = languages.filter(function(item) { 
                return item.id !== action.payload
            })
            
            return {
                ...state,
                data: {
                    ...state.data,
                    languagesData: [...languages]
                }
            }
        }

        case JD_ADDITIONAL_INFO_RECOMMENDED_SKILLS_SAVE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    recommendedSkills: [...action.payload]
                }
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
}