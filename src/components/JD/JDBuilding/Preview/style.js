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
    previewHeader:{
        border: "1px solid #DBDBDB",
        width:"inherit",
       position: "relative",
        "& ul":{
            padding: "0px 55px",
            listStyleType: "none",
            marginLeft:"-35px",
            "& span":{
                fontWeight: "bold",
                minWidth:"150px",
                display:"inline-block"

            }
        },
     
    },

    previewID:{
    marginBottom:25,
   
    display:"inline",
    "& h3":{
        display: "inline-flex",
        margin: "10px 15px",
        fontWeight: "bold",

    },
    "& svg": {
        float:"right",
        margin: "10px 15px",
        color:"#5D33D0"
    }
    },

    jobTitle:{
        padding: "0px 15px",
            color: "#5D33D0",
      
    },
    jobDescription:{
        margin: "0px 10px",
        padding: "15px 15px",
        "& span":{
            fontWeight: "bold",
        },
        "& svg":{
            color: "#5D33D0",
            marginTop:12,
            marginRight:10,

        }
    },
   
    rolesTitle:{
        display:"inline",
        margin: "10px 15px",
        fontWeight: "bold",
      },
      rolesDescr:{
          display:"inline-flex",
        "& svg": {
            margin: "9px 14px",
            color: "#5D33D0",
            zIndex:9999,
        },
        "& p":{
            maxWidth:950,
        }

      },
      skillsLanguage:{
        margin: "0px 10px",
        padding: "10px 5px",
        position: "relative",
        "& svg":{
            marginTop:12,
            marginRight:11,
            color: "#5D33D0",
            zIndex:9999,
        },
      },
      previewskills:{
        marginTop:25,
        border: "1px solid #DBDBDB",
        width:"inherit",
      },
      line:{
          width:1,
          backgroundColor: "#DBDBDB",
          height: 74,
          position: "absolute",
          marginLeft: 25,
          marginTop: 64,
      },
      line2:{
        width:1,
        backgroundColor: "#DBDBDB",
        height: 60,
        position: "absolute",
        top: 35,
        left: 11,
    },
    line3:{
        width:1,
        backgroundColor: "#DBDBDB",
        height: 30,
        position: "absolute",
        marginLeft: 11,
        marginTop:33 ,
    },
    skillsandlangwrapper: {
        position: "relative",
        width: "100%",
        "& p": {
            margin: 0,
        }
    }
});