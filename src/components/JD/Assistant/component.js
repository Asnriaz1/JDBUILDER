import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Popper } from "@material-ui/core";
import RobotImg from "../../../resources/images/robot.png";
import ClearIcon from "@material-ui/icons/Clear";
import {Animated} from "react-animated-css";
import {Howl} from "howler"

const audioClips = [
    {sound: "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a"}
]

class Assistant extends Component {
    state = {
        open: false,
        anchorEl: null,
        menu: 0,
        question: [
            {
                data: [
                    {
                        id: 10,
                        title: "How to make my JD more readable?",
                        answer: "Try adding one liners e.g (Write android apps). Avoid using compound and long sentences."
                    },
                    {
                        id: 11,
                        title: "How to increase score of my JD?",
                        answer: "Avoid adding vastly different skills e.g mix web and backend. Be Specific and keep it short."
                    },
                    {
                        id: 12,
                        title: "How to increase chances of finding a right candidate?",
                        answer: "Try recommended skills and roles. Avoid adding non standard."
                    },
                    {
                        id: 13,
                        title: "How long the JD should be?",
                        answer: "One A4 page max 240 words. 1500-2000 characters."
                    }
                ]
            },
            {
                data: [
                    {
                        id: 110,
                        title: "What should be the title?",
                        answer: "Be specific like Android developer or frontend developer. Avoid generalized terms e.g software engineer."
                    },
                    {
                        id: 111,
                        title: "What should be the salary range?",
                        answer: "Depending on level PKR 50,000 - 200,000. Quote higher for a rare skill. If remote then same range or different if hiring as contractor."
                    },
                    {
                        id: 112,
                        title: "Should I allow remote work or not?",
                        answer: "If a person has good work system or if you have hosted servers then yes. In case of on site or federated data then no."
                    }
                ]
            },
            {
                data: [
                    {
                        id: 1110,
                        title: "How can i find a right candidate?",
                        answer: "Pick from recommended skills."
                    },
                    {
                        id: 1111,
                        title: "How to maximise reach?",
                        answer: "Add standard used words as in everyday language."
                    }
                ]
            }
        ],
        asked: [
        ]
    }

    popupOpenHandler = (e) => {
            this.setState({
                open: !this.state.open,
                anchorEl: e.target
            });  
    }

    menuHandler = (value) => {
        this.setState({
            menu: value
        })
    }

    addAskedHandler = (value) => {
        let data = value;
        setTimeout(()=>{
            this.setState({
                asked: [...this.state.asked, data]
            })
        },1000)
        
    }

    playHandler = (src) => {
        
        const sound = new Howl({
            src,
            html5: true
        });
        
        setTimeout(function(){sound.play()},1000);
    }
    render() {
        const {
            classes,
            } = this.props;
        return (
            
            <div className={classes.needhelpwrapper}>
                <Animated animationIn="bounceInLeft" animationOut="zoomOutDown" animationInDuration={10000} animationOutDuration={10000} isVisible={true}>
                    <img src={RobotImg} alt="" className={classes.robotimage} />
                </Animated>
                
                <Popper className={classes.assistantpoper} id={"assistantopen"} anchorEl={this.state.anchorEl} open={this.state.open} placement={"left-end"} transition>
                    <div className={classes.assistantwrapper}>
                        <div className={classes.assitantheader}>
                            <ClearIcon onClick={this.popupOpenHandler}/>
                            <span>Tal</span>
                        </div>
                        <div className={classes.assistantbody}>
                            <div className="robot">
                                <img src={RobotImg} alt="" />
                            </div>
                            <span className="hello" >Hi there, thanks for reaching out! I am Tal.</span>
                            <div className={classes.assistantmenuwrapper}>
                                <span onClick={(e) => this.menuHandler(0)}>JD Optimisation</span>
                                <span onClick={(e) => this.menuHandler(1)}>JD Template</span>
                                <span onClick={(e) => this.menuHandler(2)}>Candidate</span>
                            </div>
                            <div className={classes.assistantcardwrapper}>
                                {
                                    this.state.question[this.state.menu].data.map((item, index) => (
                                        audioClips.map((s1, index) => {
                                         return <div key={index} className={classes.assistantquestion} onClick={(e) => this.addAskedHandler(item)} onMouseDown={() => this.playHandler(s1.sound)}>
                                            {item.title}
                                        </div>
                                        })
                                    ))
                                }
                            </div>

                            <div className={classes.assistantcardwrapperquestions}>
                                {
                                    this.state.asked.map((item, index) => (
                                            <div key={index}>
                                                <span className="right">{item.title}</span>
                                                <span className="left">{item.answer}</span>
                                            </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Popper>
                {audioClips.map((s1, index) => {
                 return <Button variant="outlined" className={classes.needhelpwrapperbtn} onClick={(e) => this.popupOpenHandler(e)} onMouseDown={() => this.playHandler(s1.sound)}>
                    Need Help?
                </Button>
                })}
            </div>
        )
    }
}

export default withStyles(styles)(Assistant);