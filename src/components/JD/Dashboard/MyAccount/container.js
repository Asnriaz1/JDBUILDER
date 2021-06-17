import { connect } from "react-redux";
import MyAccount from "./component";

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: () => {
        
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MyAccount);