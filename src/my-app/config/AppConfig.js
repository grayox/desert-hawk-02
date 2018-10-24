// categoryItems
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const fbConfig = {
    apiKey: "AIzaSyAOEXILaYcxjmJsJ81_WfubS_h3AQ3lLdA",
    authDomain: "green-comet-e2c85.firebaseapp.com",
    databaseURL: "https://green-comet-e2c85.firebaseio.com",
    projectId: "green-comet-e2c85",
    storageBucket: "green-comet-e2c85.appspot.com",
    messagingSenderId: "682044250674"
  }

export const logoPath = 'assets/images/logos/fuse.svg'

export const tagLine = 'Give leads. Get leads.' 

export const desc = 'Real estate agents, mortgage brokers, insurance agents and financial planners need leads. Referrals are a good way to get them. Swap lets you turn your customers into referrals and get back referrals in exchange.'

export const bizCategoryItems = [
    { value : 'home'      , label : 'Home'      , icon : HomeIcon           } ,
    { value : 'mortgage'  , label : 'Mortgage'  , icon : AccountBalanceIcon } ,
    { value : 'financial' , label : 'Financial' , icon : AssessmentIcon     } ,
    { value : 'insurance' , label : 'Insurance' , icon : AssignmentIcon     } ,
  ]