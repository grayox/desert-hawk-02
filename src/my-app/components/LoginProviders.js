import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGooglePlus, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const items = [
  { label : 'Google'     , icon : faGoogle     , } ,
  { label : 'Twitter'    , icon : faTwitter    , } ,
  { label : 'Gmail'      , icon : faEnvelope   , } ,
  { label : 'Facebook'   , icon : faFacebook   , } ,
  { label : 'Youtube'    , icon : faYoutube    , } ,
  { label : 'GooglePlus' , icon : faGooglePlus , } ,
]

// const items = [
//   { 
//     label: 'Login with Google', 
//     icon: <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
//   },
//   {
//     label: 'label 2', 
//     icon: <DraftsIcon className='text-3xl' />
//   }
// ];

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

function LoginProviders(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component='nav'>
       {
         items.map( item => (
           <ListItem key={item.label} button>
             <ListItemIcon className='w-24'>
               <FontAwesomeIcon className='text-4xl' icon={item.icon} />
             </ListItemIcon>
             <ListItemText primary={`Login with ${item.label}`} />
           </ListItem>
         ))
       }
      </List>
      {/* <List component='nav'>
       {
         items.map((item, key) => (
           <ListItem button>
             <ListItemIcon>
               { item.icon }
             </ListItemIcon>
             <ListItemText primary={ item.label } />
           </ListItem>
         ))
       }
      </List> */}
      {/* <List component="nav">
        <ListItem button>
          <ListItemIcon className="container">
            <FontAwesomeIcon icon={faGoogle} />
          </ListItemIcon>
          <ListItemText primary="Login with Google" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="container">
            <FontAwesomeIcon icon={faTwitter} />
          </ListItemIcon>
          <ListItemText primary="Login with Twitter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="container">
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Login with Gmail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="container">
            <FontAwesomeIcon icon={faFacebook} />
          </ListItemIcon>
          <ListItemText primary="Login with Facebook" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="container">
            <FontAwesomeIcon icon={faYoutube} />
          </ListItemIcon>
          <ListItemText primary="Login with Youtube" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className="container">
            <FontAwesomeIcon icon={faGooglePlus} />
          </ListItemIcon>
          <ListItemText primary="Login with Google Plus" />
        </ListItem>
      </List> */}
    </div>
  );
}

LoginProviders.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginProviders);