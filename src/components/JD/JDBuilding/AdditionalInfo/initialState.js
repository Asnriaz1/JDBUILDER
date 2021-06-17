export const ADDITIONALINFO = {
    data: {
        skillsData: [],
        languagesData: [],
        recommendedSkills: [
            {
                id: "5ff5b2befea9765b4635dec5",
                title: "",
                level: "",
                importance: "",
    
            },
    
        ]

    },
    forms: {
        additionalinfoForm: {
            fields: {
                skillsFieldid:{
                 value:""
                },
                skillsField: {
                    label: "Skills",
                    name: "skillsField",
                    placeholder: "Search Skills",
                    value: [],
                    options: []
                },
                skillsLevelField: {
                    label: "Level",
                    name: "skillsLevelField",
                    placeholder: "",
                    value: [],
                    options: [
                        { value: "Beginner", label: "Beginner" },
                        { value: "Intermediate", label: "Intermediate" },
                        { value: "Expert", label: "Expert" }
                    ]
                },
                skillsImportanceField: {
                    label: "Importance",
                    name: "skillsImportanceField",
                    placeholder: "",
                    value: [],
                    options: [
                        { value: "Should Have", label: "Should Have" },
                        { value: "Good to Have", label: "Good to Have" }
                    ]
                },
                languageField: {
                    label: "Language",
                    name: "languageField",
                    placeholder: "Search Language",
                    value: [],
                    options: [
                        { value: "English", label: "English", id: "5ff5b2befea9765b4635dec5" },
                        { value: "Urdu", label: "Urdu", id: "5ff5b2befea9765b4635dec5" },
                        { value: "Arabic", label: "Arabic", id: "5ff5b2befea9765b4635dec5" }
                    ]
                },
                languageLevelField: {
                    label: "Level",
                    name: "languageLevelField",
                    placeholder: "",
                    value: [],
                    options: [
                        { value: "Beginer", label: "Beginner" },
                        { value: "Intermediate", label: "Intermediate" },
                        { value: "Expert", label: "Expert" }
                    ]
                },
                languageImportanceField: {
                    label: "Importance",
                    name: "languageImportanceField",
                    placeholder: "",
                    value: [],
                    options: [
                        { value: "Should Have", label: "Should Have" },
                        { value: "Good to Have", label: "Good to Have" }
                    ]
                },
            }
        }
    },
    UISettings: {
    }
}
export default ADDITIONALINFO;