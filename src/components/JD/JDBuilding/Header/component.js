import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class JDBuildingHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerPath: "/create/jobopening"
        }
    }

    render() {
        const {
            classes,
            headerLinks,
            headerPath,
            pathChangeHandler,
            title,
            jobcode
        } = this.props;

        return (
            <>
                <div className={classes.buildjdtopheader}>
                    <div className={classes.buildingheaderwrapper}>
                        <Grid container>
                            <Grid item xs={12} md={2}>
                                <div className={classes.templatename}>
                                    <span>{ title }-{jobcode}</span>
                                </div>
                            </Grid>

                            {
                                headerLinks.map((item, index) => (
                                    <Grid item xs={12} md={2} key={index}>

                                        {
                                            item.isActive ?
                                                <>
                                                    <NavLink
                                                        to={item.route}
                                                        className={classes.headerlink}
                                                        onClick={() => pathChangeHandler(item.route)}
                                                    >
                                                        <div className="title">
                                                            <CheckCircleIcon className={classes.svgbgactivevisited} />
                                                            <span className={classes.svgbgactivevisited}>{item.title}</span>

                                                        </div>
                                                        <span className="desc">{item.desc}</span>
                                                    </NavLink>
                                                </> :
                                                <>
                                                    {
                                                        title ? 
                                                        <div
                                                            className={classes.headerlink}
                                                        >
                                                            <div className="title">
                                                                <CheckCircleIcon className={item.isActive ? classes.svgbg: classes.svgbgactive} />
                                                                <span className={(item.route !== "/create/download") ? classes.svgbgactive : classes.svgbg}>{item.title}</span>
                                                            </div>
                                                            <span className="desc">{item.desc}</span>
                                                        </div> : 
                                                        
                                                        <div
                                                            className={classes.headerlink}
                                                        >
                                                            <div className="title">
                                                                <CheckCircleIcon className={classes.svgbgactivevisited ? classes.svgbgactive : classes.svgbg} />
                                                                <span className={headerPath === item.route ? classes.svgbgactive : classes.svgbg}>{item.title}</span>
                                                            </div>
                                                            <span className="desc">{item.desc}</span>
                                                        </div>
                                                    }
                                                </>
                                        }
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(JDBuildingHeader);