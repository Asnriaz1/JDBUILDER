import React, { Component } from 'react';
import { styles } from "./style";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Headerimg from "../../../resources/images/header.png"
import FadeIn from 'react-fade-in';
import ReactFloaterJs from 'react-floaterjs'
class Header extends Component {

    render() {
        const {
            classes,

        } = this.props;

        return (
            <>

                <Grid container>
                    <Grid item md={7}>
                    <FadeIn>
                        <div className={classes.mainWrapper}>
                        
                            <h1 className={classes.headertext}>
                                Lorem ipsum dolor sit amet, consectetur
                            </h1>
                            
                            <p className={classes.headerParagraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum odio est. Cras ut dui varius.
                            </p>

                        </div>
                        </FadeIn>
                        
                        <div className={classes.buttonContainer}>
                          <Button variant="outlined" className={classes.hireButton}>
                              HIRE TALENT
                          </Button>
                          <Button variant="outlined" className={classes.applyButton} >
                              APPLY FOR JOB
                              </Button>
                        </div>
                     
                    </Grid>
                    <Grid item md={5}>
                        <div >
                        <ReactFloaterJs>
                            <img src={Headerimg} className={classes.headerImg} />
                            </ReactFloaterJs>
                        </div>
                    </Grid>

                </Grid>

            </>
        )
    }
}

export default withStyles(styles)(Header);