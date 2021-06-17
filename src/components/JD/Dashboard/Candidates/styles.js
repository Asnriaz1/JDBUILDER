export const styles = theme => ({
    additionalinfowrapper: {
        maxWidth: 1300,
        margin: "auto",
        padding: 13,
        minHeight: "calc(100vh - 100px)",
        "& .actionbtn": {
            "& button": {
                marginRight: 17,
                minWidth: 150,
            }
        }
    },
    suggestedCandidateWrapper:{
        display: "block",
         width: "100%"

    },
    advertiseHeader:{
        display:"flex",
        alignItems: "center",
        "& h3":{
            width:"94%"
        }
    },
    suggestedCandidate:{
        display:"block",
        border: "1px solid #cac2c2",
        padding:"2px 10px ",
        marginBottom:10,
    },
    suggestedCandidateTitle:{
        width: "40%",
        display: "inline-block",
        lineHeight: 0.5,
    
        "& p":{
            color:"#5D33D0",
            fontSize:11,
            lineHeight: "1.4",
            
        }
    },
    matchpercentageWrapper:{
        display: "flex", 
        alignItems:"center",

    },
    matchpercentage:{
        position: "absolute", 
        left: 162,
         top: -9

    },
    suggestedCandidatePercentage:{
        display:"inline-block",
        position:"relative",
        alignItems:"center",
        justifyContent:"center",
        width: "40%",
        "& svg":{
            
            height:60,
            width:60,
        }

    },
    suggestedCandidateContact:{
        width: "20%",
        display: "inline-block",
        "& Button":{
            marginTop:3,
            width:"100%"

        }

    },
    jobsBoard:{
        border: "1px solid #cac2c2",
        width:"95%",
        padding:"10px 10px",
        cursor: "pointer",
        "& Button":{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
        },
        "& img": {
            width: "80%",
            height: "auto",
            margin: "auto",
            display: "block",
            marginBottom: 15,
        },
        "&:hover": {
            background: "#fbfbfb"
        }
    },
    linkedin:{
        border: "1px solid #cac2c2",
        width:"95%",
        padding:"10px 10px",
        "& Button":{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
        },
        "& img": {
            width: "80%",
            height: "auto",
            margin: "auto",
            display: "block",
            marginBottom: 15,
        },
        "&:hover": {
            background: "#fbfbfb"
        }
    },
    suggestionHelp:{
        background:"#F9F8F8",
        margin:"55px 20px",
        padding:"20px 20px",
        "& span":{
            color:"#4E9AFE"
        },
    },
    sharingHelp:{
        background:"#F9F8F8",
        margin:"50px 20px",
        padding:"20px 20px",
        "& span":{
            color:"#4E9AFE"
        },
    },
    previewbtn: {
        width: "69%",
        margin: "auto",
        display: "block",
    }
});