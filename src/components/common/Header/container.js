import { connect } from "react-redux";
import Header from "./component";
import {reverseString} from "../Helpers";
import {
    loginStateChange
} from "../../Login/actions";
const mapStateToProps = state => ({
    isLogin: state.LOGIN.UISetting.isLogin,
})

const mapDispatchToProps = (dispatch, props) => ({
    loginStateUpdateHandler: () =>{
        dispatch(loginStateChange)
    },
    logoutHandler: () => {
        
        sessionStorage.removeItem(reverseString("app_store"));
        window.location.replace("/login");
    },
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
)(Header);