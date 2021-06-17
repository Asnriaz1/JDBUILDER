import {connect} from "react-redux";
import Header from "./component";
import {reverseString} from "../../../../common/Helpers";
import ls from 'local-storage';

const mapStateToProps = state => ({
    isLogin: state.LOGIN.UISetting.isLogin,
  
});

const mapDispatchToProps = (dispatch, props) => ({
    logOut: (historyObject) => {
        sessionStorage.removeItem(reverseString("app_store"));
        window.location.replace("/login");
        ls.clear();
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Header);