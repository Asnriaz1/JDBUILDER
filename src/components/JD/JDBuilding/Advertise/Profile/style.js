export const styles = theme => ({
    previewWrapper:{
        border: "1px solid #DBDBDB",
        margin: "10px 10px",
        padding: "15px 15px",
        "& .texteditorPreview": {
            padding: 0,
            margin: 0,
            boxShadow: "none",
            paddingBottom: 17,
        }
    },
    cvAvatar:{
        fontSize:55,
        width:200,
        height:200,
    },
    cvHeader:{
        background:theme.palette.primary.main,
        padding:35,
        color:"White",
        lineHeight:0.8
    },
    cvSkills:{
        "& p":{
            fontSize: 13,
            margin: 0,
            marginBottom: 2,
        },
    },
    skillsPercantagebar:{
        width:210,
        background:"#BABABA",

    },
    cvHeading:{
        color:theme.palette.primary.main,
        fontSize: 18,
        fontWeight: 100,
    },
    unmatchHeading:{
        color:"red",
        fontSize: 18,
        fontWeight: 100,
    },
    cvunmatchedSkills:{
        "& p":{
            fontSize: 13,
            margin: 0,
            marginBottom: 2,
        },
    },
    employmentHistory:{
        "& p":{
            color:theme.palette.primary.main,
            fontWeight:"bold",
            margin: 0,
        },
    },
    details:{
        fontSize: 13,
    }, 
    space:{
        height:32,
    },
    cvEducation:{
        lineHeight:0.5,
        "& p":{
            color:theme.palette.primary.main,
            fontWeight:"bold",
        },
    },
    cvSummary: {
        width: "100%",
        "& p": {
            fontSize: 13,
        }
    },
    locationmark: {
        fontSize: 12,
    }
});