import React, {Component} from 'react';
import "./style.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class DialogCommon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            open,
            title,
            closeDialog,
            message
        } = this.props;
        return (
            <>
                <Dialog
                    open={open}
                    onClose={closeDialog}
                >
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={closeDialog} variant="contained" color="primary">
                        ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default DialogCommon;