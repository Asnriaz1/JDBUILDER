import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {NavLink} from "react-router-dom";
import TemplateImg from "../../../../resources/images/template.svg";

class SuggestedTemplates extends Component {

    componentDidMount = () => {
        this.props.saveUpdatedTemplates();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.templateJobId != this.props.templateJobId) {
            this.props.saveUpdatedTemplates();
        }
    }
    render() {
        const {
            classes,
            templates,
            saveTemplateIdHandler
            } = this.props;

        return (
            templates.length > 0 ? <>
            {
                templates.map((item, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <div className={classes.templateboxpadding}>
                        <NavLink
                            to={"/create"} 
                            className={classes.suggestedtemplink}
                            onClick={() => saveTemplateIdHandler(item.id)}
                        >

                            <div className={classes.suggestedtemplateicon}>
                                <img src={TemplateImg} alt="template" />
                            </div>

                            <span className={classes.suggestedtemplatelabel}>
                                <b>{item.title}</b> <br/>
                                {item.short_summary}
                            </span>
                            
                        </NavLink>
                        </div>
                    </Grid>
                ))
            }
            </> : <></>
        )
    }
}

export default withStyles(styles)(SuggestedTemplates);