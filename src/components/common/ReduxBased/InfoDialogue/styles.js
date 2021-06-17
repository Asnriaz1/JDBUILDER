/**
 * Define Custom Classes for this theme.
 * @param theme
 * @returns {{}}
 */
export const styles = theme => ({
	headingStyle: {
		paddingBottom: 6
	},
	paragraph:{
		textAlign:"justify"
	},
	buttonRoot: {
		// margin: `${theme.spacing(1,0,0,0)} !important`
	},
	dialogContentText:{
		margin: `${theme.spacing(1, 0, 0, 1)}`
	},
	image: {
		margin: "0 auto",
		display: "block",
		maxheight: 350,
		maxWidth: "100%"
	},
	imageWithText: {
		float: "left",
		width: 120,
		height: 120,
		marginBottom: 10,
		marginRight: 15
	}
});
