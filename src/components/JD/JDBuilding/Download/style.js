export const styles = theme => ({
    previewWrapper:{
        minHeight: "calc(100vh - 200px)",
        margin: "50px 50px",
        padding: "15px 15px",
    },
    previewHeader:{
        border: "1px solid #DBDBDB",
        boxShadow: "0px 2px 1px #0000000A",

        width:"inherit",
       
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
        boxShadow: "0px 2px 1px #0000000A",
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
    jdMeter:{
        border: "1px solid #DBDBDB",
        boxShadow: "0px 2px 1px #0000000A",
        width:"fit-content",
        marginLeft:15,
        "& h1":{
            PaddingLeft:12
        },
        "& .title": {
            color: "#707070",
            display: "block",
            borderBottom: "1px solid #DFDFDF",
            padding: 7,
            marginBottom: 13,
            fontSize: 17,
        }
    },
    skillsandlangwrapper: {
        position: "relative",
        width: "100%",
        marginBottom: 22,
        padding: 14,
        "& p": {
            margin: 0,
        }
    },
    downloadbtn: {
        fontSize: 28,
        cursor: "pointer",
    }
});