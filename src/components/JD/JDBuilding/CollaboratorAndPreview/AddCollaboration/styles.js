export const styles = theme => ({
    addcollaboraterwrapper: {
        padding: 13,
    },
    addcollaborationbtn: {
        float: "right",
        width: 121,
        height: 43,
        marginRight: 14,
        marginTop: 7,
    },
    collaboratorfields: {
        maxWidth: "96%"
    },
    collaboratorinfo: {
        display: "block",
        padding: "2px 7px",
        border: "1px solid #e0dada",
        borderRadius: 3,
        "& .name": {
            color: "#707070",
            display: "block",
            fontSize: 13,
        },
        "& .email": {
            color: "#5D33D0",
            fontSize: 12
        }
    },
    collaboratorsName:{
        fontWeight:"bold",
        "& span":{
            color:theme.palette.primary.light,
        }
    
    },
    collaboratorsEmail:{
        fontWeight:"bold",
        "& span":{
            color:theme.palette.primary.light,
        }
    
    }
});