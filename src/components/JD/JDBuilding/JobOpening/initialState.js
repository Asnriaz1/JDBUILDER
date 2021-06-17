export const JOBOPENING = {
    data: {
        rolesData: [
        ],
        resData: [
        ],
        rawContentRolesRes: {
            blocks: [],
            entityMap: {},
        },
        rolesResHTMLData: "",
    },
    forms: {
        jobOpeningForm: {
            fields: {
                jobTitleField: {
                    label: "Job title",
                    name: "jobTitleField",
                    placeholder: "",
                    value: "",
                },
                jobCodeField: {
                    label: "Job code",
                    name: "jobCodeField",
                    placeholder: "",
                    value: "JDB",
                },
                industryField: {
                    label: "Industry",
                    name: "industryField",
                    placeholder: "",
                    value: [],
                    options: [
                    ]
                },
                functionField: {
                    label: "Function",
                    name: "functionField",
                    placeholder: "",
                    value: [],
                    options: []
                },
                employmenTypeField: {
                    label: "Employment Type",
                    name: "employmenTypeField",
                    placeholder: "",
                    value: [],
                    options: [
                        { value: "Full Time", label: "Full Time" },
                        { value: "Part Time", label: "Part Time" },
                        { value: "Contract", label: "Contract" }
                    ]
                },
                minYearField: {
                    label: "Experience Level",
                    name: "minYearField",
                    placeholder: "Minimum Year",
                    value: "",
                },
                maxYearField: {
                    label: "",
                    name: "maxYearField",
                    placeholder: "Maximum Year",
                    value: "",
                },
                positionField: {
                    label: "Position",
                    name: "positionField",
                    placeholder: "",
                    value: "1",
                },
                AddressField: {
                    label: "Address",
                    name: "AddressField",
                    placeholder: "",
                    value: "",
                },
                QualificationField: {
                    label: "Minimum Qualification",
                    name: "QualificationField",
                    placeholder: "",
                    value: [],
                    options: [
                        { value: "Intermediate", label: "Intermediate" },
                        { value: "Bachelors", label: "Bachelors" },
                        { value: "Masters", label: "Masters" }
                    ]
                },
                remoteWorkingField: {
                    label: "Remote Working",
                    name: "remoteWorkingField",
                    placeholder: "",
                    value: false,
                },
                showSalaryField: {
                    label: "Show Salary Detail",
                    name: "showSalaryField",
                    placeholder: "",
                    value: false,
                },
                salaryTypeField: {
                    label: "Salary Type",
                    name: "salaryTypeField",
                    placeholder: "",
                    value: true,
                },
                hourlyMaxRateField: {
                    label: "Maximum Hourly Rate",
                    name: "hourlyMaxRateField",
                    placeholder: "Hourly Rate",
                    value: [],
                    options: [
                        { value: "1-5", label: "1-5" },
                        { value: "6-10", label: "6-10" },
                        { value: "10-15", label: "10-15" },
                        { value: "16-20", label: "16-20" }
                    ]
                },
                monthlySalaryRangField: {
                    label: "Salary Range",
                    name: "monthlySalaryRangField",
                    placeholder: "Salary Range",
                    value: [],
                    options: [
                        { value: "1500-2000", label: "1500-2000" },
                        { value: "2000-3000", label: "2000-3000" },
                        { value: "3000+", label: "3000+" }
                    ]
                },
                monthlyCurrencyField: {
                    label: "Currency",
                    name: "monthlyCurrencyField",
                    placeholder: "Currency",
                    value: [],
                    options: [
                        { value: "Dollar", label: "Dollar" },
                        { value: "Pakistani Rupee", label: "Pakistani Rupee" },
                        { value: "Pound", label: "Pound" }
                    ]
                },
                yearlySalaryRangField: {
                    label: "Salary Range",
                    name: "yearlySalaryRangField",
                    placeholder: "Salary Range",
                    value: [],
                    options: [
                        { value: "1500-2000", label: "1500-2000" },
                        { value: "2000-3000", label: "2000-3000" },
                        { value: "3000+", label: "3000+" }
                    ]
                },
                yearlyCurrencyField: {
                    label: "Currency",
                    name: "yearlyCurrencyField",
                    placeholder: "Currency",
                    value: [],
                    options: [
                        { value: "Dollar", label: "Dollar" },
                        { value: "Pakistani Rupee", label: "Pakistani Rupee" },
                        { value: "Pound", label: "Pound" }
                    ]
                },
            }
        }
    },
    UISettings: {
        addRoleIsExpanded: true,
        addResIsExpanded: false,
    }
}
export default JOBOPENING;