import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Tooltip, Zoom } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MUIEditor, { MUIEditorState,toolbarControlTypes  } from 'react-mui-draft-wysiwyg'
import { ContentState, convertToRaw, convertFromRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert';

const editorConfig = {}
  const rawContent = {
    blocks: [],
    entityMap: {},
  }

class JobSummaryMetaFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(this.props.rawContentSummary),
              )
        }
    }
   
    onChange = (newState) => {
        this.setState({
            editorState: newState
        })
    }

    componentDidMount = () => {
        window.scrollTo(0, null);
        // this.props.fetchDataIfNeeded();

        let convertedData = convertFromHTML(this.props.rawContentSummaryAsHTML);
        let convertedRawData = convertToRaw(convertedData);

        const rawContents = {
            blocks: [...convertedRawData.blocks],
            entityMap: {},
        }
        this.setState({
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(rawContents),
              )
        })

        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedSummaryAsHTML(currentContentAsHTML);

        this.props.saveUpdatedSummaryEditor(rawContents);
    }

    appendSummaryToEditor = (value, index) => {
        this.props.summaryDataActiveHandler(index);

        let oldData = convertToRaw(this.state.editorState.getCurrentContent());

        let newItem = {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            key: oldData.blocks.length+"roles",
            text: value,
            type: 'paragraph',
          };
        oldData = [...oldData.blocks, newItem]
        const rawContents = {
            blocks: [...oldData],
            entityMap: {},
        }
        this.setState({
            editorState: MUIEditorState.createWithContent(
                editorConfig,
                convertFromRaw(rawContents),
              )
        })

        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedSummaryAsHTML(currentContentAsHTML);

        this.props.saveUpdatedSummaryEditor(rawContents);
    }

    componentWillUnmount = () => {
        let currentContentAsHTML = convertToHTML(this.state.editorState.getCurrentContent());
        this.props.saveUpdatedSummaryAsHTML(currentContentAsHTML);
    }

    render() {
        const {
            classes,
            dataList,
        } = this.props;
        const config = {
            toolbar: {
               controls: [
                   toolbarControlTypes.bold,
                   toolbarControlTypes.italic,
                   toolbarControlTypes.underline,
                   toolbarControlTypes.unorderedList,
                   toolbarControlTypes.orderedList,
                 ],
               },
               editor: {
                className: 'texteditor',
              },
        }; 
        return (
            <>
                <div className={classes.metafieldwrapper}>
                    <div className={classes.rolesandreswrapper}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <span className={classes.metatitle}>Summary</span>
                            <div className={classes.texteditorwrapper}>
                                <MUIEditor editorState={this.state.editorState} 
                                    onChange={this.onChange}
                                    config={config}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <div className={classes.suggesteditems}>
                                {
                                    dataList.map((item, index) => (
                                        <Tooltip key={index} title={item.desc} arrow placement="left" TransitionComponent={Zoom} TransitionProps={{ timeout: 600 }}>
                                        <div className="item" onClick={() => this.appendSummaryToEditor(item.desc, index)}>
                                            <CheckCircleIcon className={item.isActive ? classes.addeditembg : ""}/>
                                            <span className="description">{item.desc}</span>
                                        </div>
                                        </Tooltip>
                                    ))
                                }
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(JobSummaryMetaFields);