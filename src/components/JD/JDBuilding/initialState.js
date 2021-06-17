export const JDBUILDING = {
    data: {
        activePath: "/create/jobopening",
        downloadData: null,
        headerLinks: [
            {
                id: 0,
                route: "/create/jobopening",
                title: "Job Opening",
                desc: "Add basic job info such as title, job description, location etc.",
                isActive: false,
            },
            {
                id: 1,
                route: "/create/info",
                title: "Additional Info",
                desc: "Add custom fields, skill keywords, setup structured feedback, etc.",
                isActive: false,
            },
            {
                id: 2,
                route: "/create/summary",
                title: "Summary",
                desc: "Summarize your Job description along some detail.",
                isActive: false,
            },
            {
                id: 3,
                route: "/create/advertise",
                title: "Advertise",
                desc: "Share posting on website, careers portal and multiple job boards.",
                isActive: false,
            },
            {
                id: 4,
                route: "/create/download",
                title: "Download",
                desc: "You can download you JD via E-mail in one click",
                isActive: false,
            }
        ]
    },
    forms: {
    },
    UISettings: {
        
    }
}
export default JDBUILDING;