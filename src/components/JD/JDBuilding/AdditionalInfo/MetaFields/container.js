import { connect } from "react-redux";
import { ValidatorForm } from 'react-material-ui-form-validator';
import AdditionalInfoMetaFields from "./component";
import {
    textFieldChangeHandler,
    selectFieldChangeHandler,
    submitSkillFormHandler,
    saveUpdatedSkillTitle,
    submitLanguageFormHandler,
    submitRecommenedSkillFormHandler,
    recommendedSkillActiveHandler,
    removeSkillHandler,
    removeLanguageHandler
} from "../actions";

import instance, { SKILLS_URL } from "../../../../../api/config";

import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions"




const mapStateToProps = state => ({
    fields: state.ADDITIONALINFO.forms.additionalinfoForm.fields,
    skillsData: state.ADDITIONALINFO.data.skillsData,
    languagesData: state.ADDITIONALINFO.data.languagesData,
    recommendedSkills: state.ADDITIONALINFO.data.recommendedSkills,
})

const mapDispatchToProps = (dispatch, props) => ({

    submitRecommenedSkillFormHandler : (item) =>{
       
        let recommendedSkill={
            id: item.id,
            title: item.title,
            level:item.level,
            importance:item.importance,
        }
        console.log(recommendedSkill);
        dispatch(submitSkillFormHandler(recommendedSkill));
    },

    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e.value));
    },
    selectFieldChangeHandler: (name, e) => {
        dispatch(selectFieldChangeHandler(name, e));
    },
    submitSkillFormHandler: (skillsField, skillsLevelField, skillsImportanceField, skillsData,skillsFieldid) => {
      if (skillsField[0] && skillsLevelField[0] && skillsImportanceField[0])
       {
        let newSkill = {
            id: skillsField[0].id,
            title: skillsField[0].value,
            level: skillsLevelField[0].value,
            importance: skillsImportanceField[0].value,
        }
        
        // console.log(newSkill);
        // debugger
        
        // let isNewSkill = true
        // isNewSkill = skillsData.some(item => skillsField[0] === item.title[0])

        // if(skillsData.length > 0 && isNewSkill) {
        //     return
        // }
        dispatch(submitSkillFormHandler(newSkill));
    }
    },

    submitLanguageFormHandler: (languageField, languageLevelField, languageImportanceField, languagesData) => {
        if (languageField[0] && languageLevelField[0] && languageImportanceField[0]){
        let newLanguage = {
            id: languageField[0].id,
            title: languageField[0].value,
            level: languageLevelField[0].value,
            importance: languageImportanceField[0].value,
        }
        dispatch(submitLanguageFormHandler(newLanguage));
    }
    },

    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
        instance.get(SKILLS_URL)
        .then(res => {
    
            dispatch(saveUpdatedSkillTitle(res.data.data));
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    recommendedSkillActiveHandler: (value) => {
        let data = {
            value: value.title,
            placeholder: value.title,
            id: value.id
        }
        let level = {
            value: value.level,
            label: value.level
        }
        let importance = {
            value: value.importance,
            label: value.importance
        }
        dispatch(selectFieldChangeHandler('skillsField', data.value));
        dispatch(selectFieldChangeHandler('skillsLevelField', level));
        dispatch(selectFieldChangeHandler('skillsImportanceField', importance));
        // dispatch(recommendedSkillActiveHandler(value));
    },
    removeSkillHandler: (value) => {
        dispatch(removeSkillHandler(value));
    },
    removeLanguageHandler: (value) => {
        dispatch(removeLanguageHandler(value));
    }

})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    submitSkillFormHandler: () => {
        dispatchProps.submitSkillFormHandler(stateProps.fields.skillsField.value, stateProps.fields.skillsLevelField.value, stateProps.fields.skillsImportanceField.value, stateProps.skillsDat,stateProps.fields.skillsFieldid.value)
    },
    submitLanguageFormHandler: () => {
        dispatchProps.submitLanguageFormHandler(stateProps.fields.languageField.value, stateProps.fields.languageLevelField.value, stateProps.fields.languageImportanceField.value, stateProps.languagesData)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AdditionalInfoMetaFields);