import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./styles";
import {Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const InfoDialog = ({classes, maxWidth, open, closeInfoDialog, image, heading, text, title, buttonColor, displayType}) => {
    return (
        <Dialog
            id={"info-dialog"}
            open={open}
            keepMounted
            onClose={closeInfoDialog}
            aria-labelledby='info-dialog-title'
            aria-describedby='info-dialog-description'
            maxWidth={maxWidth}
            fullWidth={true}
            PaperProps={{
                square: true,
                elevation: 24
            }}
            className={`${classes.confirmationDialog}`}
        >
            <DialogTitle disableTypography={true}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText
                    classes={{
                        root: classes.dialogContentText
                    }}
                >
                    <>
                        {displayType === 2 && (
                            <img
                                src={image}
                                alt='Dialog Pic'
                                className={classes.image}
                            />
                        )}

                        {displayType === 3 && (
                            <>
                                <img
                                    src={image}
                                    alt='Dialog Pic beside text'
                                    className={classes.imageWithText}
                                />
                                <Typography variant='h6' classes={{h6: classes.headingStyle}}>
                                    {heading}
                                </Typography>
                            </>
                        )}

                        {displayType === 1 && !!heading && (
                            <Typography variant='h6' classes={{h6: classes.headingStyle}}>
                                {heading}
                            </Typography>
                        )}

                        <Typography variant='body2' classes={{body2: classes.paragraph}}>
                            {text}
                        </Typography>
                    </>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant='contained'
                    size="small"
                    color={buttonColor}
                    onClick={closeInfoDialog}
                    className={classes.buttonRoot}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

InfoDialog.propTypes = {
    /** Toggles whether ConfirmPassword is visible and rendered in DOM */
    open: PropTypes.bool.isRequired,
    /** Display Type for Info Dialog  */
    displayType: PropTypes.oneOf([1, 2, 3]).isRequired,
    /** Title of first button */
    title: PropTypes.string.isRequired,
    /** Color of a button */
    buttonColor: PropTypes.string.isRequired,
    /** Text of Info Dialog */
    text: PropTypes.string.isRequired,
    /** Text Heading of Info Dialog */
    heading: PropTypes.string,
    /** Image for Info Dialog */
    image: PropTypes.string
};

InfoDialog.defaultProps = {
    buttonColor: 'secondary',
};

export default withStyles(styles)(InfoDialog);
