import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'store/actions';
import firebaseService from 'firebaseService';

class Auth extends Component {
  constructor(props) {
    super(props);
    firebaseService.init();
  }
  componentDidMount() {
    this.firebaseCheck();
  }
  firebaseCheck = () => {
    firebaseService.onAuthStateChanged(authUser => {
      if (authUser) {
        this.props.showMessage({ message: 'Logging in with Firebase' });
        // Retrieve user data from Firebase
        firebaseService.getUserData(authUser.uid).then(user => {
          this.props.setUserDataFirebase(user, authUser);
          this.props.showMessage({ message: 'Logged in with Firebase' });
        })
      }
    });
  };
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setUserDataFirebase: userActions.setUserDataFirebase,
    showMessage: Actions.showMessage,
    hideMessage: Actions.hideMessage
  },
    dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
