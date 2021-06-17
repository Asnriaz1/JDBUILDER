import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class JDCollaborators extends Component {
    
    state = {
        jobCode: ""
    }

    componentDidMount = () => {
        let job_Code = window.location.pathname.replace("/user/jdcollab/","");
        this.setState({
            jobCode: job_Code
        })
       // this.props.fetchDataIfNeeded(job_Code);
    }
    render() {
        const { 
            classes,
            data,
            collaborators
         } = this.props;

        return (
            <div className={classes.collaboratorwrapper}>
                <span className="title">View your Collaborators here</span>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {collaborators ? collaborators.map((item, index) => (
                            <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {item.email}
                            </TableCell>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >{item.status}</TableCell>
                            </TableRow>
                        )) : ""}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default withStyles(styles)(JDCollaborators);