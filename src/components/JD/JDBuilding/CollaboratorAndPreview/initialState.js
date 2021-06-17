export const ADD_COLLABORATOR = {
    data: {
        addedCollaborator: {}
    },
    forms: {
        addCollaboratorForm: {
            fields: {
                EmailField: {
                    label: "Email",
                    name: "EmailField",
                    placeholder: "Email",
                    value: ""
                },
                NameField: {
                    label: "Collaborator Name",
                    name: "NameField",
                    placeholder: "Collaborator Name",
                    value: ""
                },
            }
        }
    },
    UISettings: {
        
    }
}
export default ADD_COLLABORATOR;