// categoryItems
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';

const AppConfig = {
  fbConfig: {
    apiKey: "AIzaSyAOEXILaYcxjmJsJ81_WfubS_h3AQ3lLdA",
    authDomain: "green-comet-e2c85.firebaseapp.com",
    databaseURL: "https://green-comet-e2c85.firebaseio.com",
    projectId: "green-comet-e2c85",
    storageBucket: "green-comet-e2c85.appspot.com",
    messagingSenderId: "682044250674"
  },
  bizCategoryItems: [
    { value : 'home'      , label : 'Home'      , icon : HomeIcon           } ,
    { value : 'mortgage'  , label : 'Mortgage'  , icon : AccountBalanceIcon } ,
    { value : 'financial' , label : 'Financial' , icon : AssessmentIcon     } ,
    { value : 'insurance' , label : 'Insurance' , icon : AssignmentIcon     } ,
  ],
}

export default AppConfig