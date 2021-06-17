import {createMuiTheme} from "@material-ui/core/styles";
import secondaryColor from "@material-ui/core/colors/red";

export const styleTheme = createMuiTheme({
  palette: {
    primary: { main: "#074880" },
    secondary: secondaryColor,
  }
});

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#5d33d0",
            light: "#206DFB",
            dark: "#072f5e",
            contrastText: "#FFFFFF",
            active: "#FFBB00",
        },
        secondary: secondaryColor,
        error: {
            main: "#DB5353"
        },
        notifications: {
            success: "#43A047",
            info: "#2979FF",
            warning: "#FFA000"
        },
        background: {
            default: "#ffffff",
            formWrappers: '#F4F4F5',
        }
    },
    loadTemplateIcons: {
        color: "#757575",
    },

    typography: {
        useNextVariants: true,
        h6: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            color: "#1D5485",
            lineHeight: "1.2"
        },
        body2: {
            color: "black"
        }
    },
    status: {
        danger: "orange"
    },
    props: {
        MuiInput: {
            disableUnderline: true,
            fontSize: 22
        },

        MuiPaper: {
            elevation: 0

        },
        // Name of the component ⚛️
        MuiButtonBase: {
            // The default props to change
            disableRipple: true // No more ripple, on the whole application 💣!
        }
    },
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: "rgba(255, 255, 255, .5)"
            }
        },
        MuiButtonBase: {
            root: {
                borderRadius: "3px !important"
            }
        },
        MuiButton: {
            root: {
                padding: "5px 20px",
                textTransform: "capitalize",
            }
        },
        MuiFormControl: {
            root: {
                "&:focus": {
                    outline: 0
                }
            }
        },
      // MuiDrawer:{
      //       paper:{
      //         zIndex:1200000000
      //       }
      // },

        // css for disable textField mau have ripple effects
        MuiTextField: {
            root: {
                "& .Mui-disabled": {
                    backgroundColor: "#F5F5F5"
                },
            }

        },
        MuiInputBase: {
            root: {
                borderRadius: "5px !important",
                backgroundColor: "#FFF",
                lineHeight: "1",
                padding: 5,
                height: 44,
                fontSize: 14,
                border: "2px solid #ededed",
                "&$error": {
                    border: "2px solid #fc4336",
                    color:"#AF838C",
                    backgroundColor:"#FBBDC9",
                },
                "&:focus": {
                    outline: 0
                }
            },
            input: {
                textIndent: 15,
                lineHeight: 1,
                padding: 0
            }
        },
        MuiTypography: {
            body1: {
                color: "#3c3c3c"
            }
        },
        MuiDialog: {
            paper: {
                overflowY: "hidden"
            }
        },
        MuiDialogTitle: {
            root: {
                color: "#727980",
                fontFamily: "Roboto, sans-serif",
                backgroundColor: "transparent",
                // background: "linear-gradient(to right bottom, #193F6F, #161E54)",
                borderBottom: "1px solid #e6e3e3",
                fontSize: 16,
                fontWeight: "500",
                padding: styleTheme.spacing(1.5)
            }
        },
        MuiDialogContent: {
            root: {
                padding: styleTheme.spacing(1, 2),
                overflowY: "auto"
            }
        },
        MuiDialogActions: {
            root: {
                padding: styleTheme.spacing(1, 2, 2)
            }
        },
        Mui: {
            root: {
                "&$error": {
                    border: "2px solid red"
                },

            }
        },
        MuiSvgIcon: {
            root: {
                // marginRight: 8
            }
        },
        /**
         * START Mui-Datatables Plugin Styling
         */
        MuiTable: {
            root: {
                tableLayout: "fixed"
            }
        },
        MUIDataTable: {
            responsiveScroll: {
                maxHeight: "none"
            },
        },
        MuiTableHead: {
            root: {
                "& th": {
                    border: "1px solid #CCC",
                    padding: '5px 12px',
                    fontWeight: 500,
                    color: "white",

                    "&.MUIDataTableSelectCell-headerCell": {
                        padding: "5px 4px"
                    }
                }
            }
        },
        MuiTableBody: {
            root: {
                "& tr:nth-child(even)": {
                    backgroundColor: "whitesmoke"
                },
                "& .TextCenter": {
                    textAlign: 'center'
                }
            }
        },
        MUIDataTableToolbarSelect: {
            root: {
                display: "none"
            }
        },
        MuiTooltip: {
            tooltip: {
              fontSize: "12",
              color: "black",
              backgroundColor: "#F9F8F8",
              width: 300,
              boxShadow: "0px 2px 1px #0000000A",
              border: "1px solid #DBDBDB",
                
            }
        },
        MUIDataTableSelectCell: {
            fixedHeader: {
                position: "static",
                "& svg": {
                    fontSize: 20
                }
            },
            headerCell: {
                padding: "5px 4px !important",
                width: "44px !important",
                backgroundColor: styleTheme.palette.primary.main,
                "& svg": {
                    color: "white",
                    fontSize: 20
                }
            },
            fixedHeaderCommon: {
                position: 'static'
            }
        },
        MuiTableRow: {
            root: {
                "& button": {
                    padding: 5,
                    "& svg": {
                        fontSize: 16
                    }
                },
                "& td": {
                    borderLeft: "1px solid #CCC",
                    overflow: "hidden"
                },
                "& .CustomTextValidator": {
                    width: "100%",
                    height: 26,
                    fontWeight: "400",
                    "& > div": {
                        height: "100%",
                        "& > input": {
                            fontSize: 13
                        }
                    }
                },
            },
            head: {
                background: styleTheme.palette.primary.main,
                color: "#FFF",
                "&$MuiIconButton-root": {
                    padding: 100
                },
                "& button": {
                    "& svg": {
                        color: "#FFF"
                    }
                }
            }
        },
        MuiTableCell: {
            root: {
                padding: '5px 12px'
            },
            paddingCheckbox: {
                "& button": {
                    padding: "5px !important"
                }
            }
        },
        MUIDataTablePagination: {
            root: {
                "&:last-child": {
                    padding: '0 15px'
                }
            }
        },
        MuiTablePagination: {
            toolbar: {
                height: 40,
                minHeight: 40,
                display: "block",
                padding: "5px 0 0",
            },
            selectRoot: {
                height: 30
            },
            select: {
                paddingLeft: 0,
                paddingRight: 23,
                "&:focus": {
                    backgroundColor: "transparent"
                }
            },
            caption: {
                fontSize: "0.80rem",
                "&:first-of-type": {
                    display: "inline-block",
                    float: "left",
                    marginLeft: 63,
                    paddingTop: 4
                },
                "&:last-of-type": {
                    display: "inline-block",
                    float: "right",
                    paddingTop: 5
                }
            },
            actions: {
                display: "inline-block",
                marginLeft: 0,
                position: "absolute",
                left: -16,
                top: 4,
                "& svg": {
                    fontSize: '24px !important'
                }
            }
        },
        MuiInputAdornment: {
            root: {
                color: '#bdbdbd'
            }
        },
        MuiGrid: {
            root: {
                maxWidth: 1450,
                margin: "auto",
            }
        }
        /**
         * END Mui-Datatables Plugin Styling
         */
    }
});

export default Theme;