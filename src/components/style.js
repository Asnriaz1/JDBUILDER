export const styles = theme => ({
    root: {
        "& .asterik": {
            color: theme.palette.secondary.main,
        },
    },
    "@global": {
        ".asterik": {
            color: theme.palette.secondary.main,
        },
        "label[for]": {
            color: "#3c3c3c",
            fontSize: 14,
            display: "block",
            paddingTop: 6,
        },
        ".clearfix": {
            "&:before": {
                content: "' '",
                display: "table",
            },
            "&:after": {
                content: "' '",
                clear: "both",
                display: "table",
            },
        },
        ".my-slick-dots": {
            position: 'absolute',
            bottom: -25,
            display: 'block',
            width: '100%',
            padding: 0,
            margin: 0,
            listStyle: 'none',
            textAlign: 'center',
            "& li.slick-active": {
                "& button": {
                    "&:before": {
                        color: "#074880",
                        opacity: 1,
                        fontSize: 12,
                    },
                },
            },
            "& li": {
                position: 'relative',
                display: 'inline-block',
                width: 20,
                height: 20,
                margin: 0,
                padding: 0,
                cursor: 'pointer',
                "& button": {
                    fontSize: 0,
                    lineHeight: 0,
                    display: 'block',
                    width: 20,
                    height: 20,
                    padding: 5,
                    cursor: 'pointer',
                    color: 'transparent',
                    border: 0,
                    outline: 'none',
                    background: 'transparent',
                    '&:before': {
                        fontFamily: 'slick',
                        fontSize: 12,
                        lineHeight: 30,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 20,
                        height: 20,
                        content: "'•'",
                        textAlign: 'center',
                        opacity: .25,
                        color: '#074880',
                    },
                },
            },
        },
        ".my-slick-main": {
            "& .slick-list": {
                height: 173,
            },
        },
        ".slick-with-nav": {
            "& svg": {
                color: `${theme.palette.primary.main} !important`,
            }
        },
        ".divCenter": {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
        },
        ".react-select__option.react-select__option--is-focused": {
            backgroundColor: "#0778b9",
            color: "white",
        },
        ".error--msg": {
            bottom: -10,
            color: "#DB5353",
            paddingLeft: 0,
            fontWeight: 400,
            fontSize: 12,
        },
        ".Mui-custom-error": {
            "& > div:first-child": {
                border: "2px solid #fc4336",
                color: "#AF838C",
                backgroundColor: "#FBBDC9",
            }
        },
        ".fixedContainer": {
            maxWidth: 1200,
            margin: "auto",
        }
    },
});