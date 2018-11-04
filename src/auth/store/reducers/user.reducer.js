import * as Actions from '../actions';

const initialState = {
    role: 'guest',
    data: {
        displayName : 'John Doe',
        // photoURL    : 'assets/images/avatars/Velazquez.jpg',
        // photoURL    : 'https://plus.google.com/u/0/photos/106065062175868017862/albums/profile/6418665536878174482',
        photoURL    : 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
        email       : 'johndoe@withinpixels.com',
        shortcuts   : [
            'calendar',
            'mail',
            'contacts',
            'todo'
        ]
    }
};

const user = function (state = initialState, action) {
    console.log('state\n', state);
    console.log('action\n', action);
    // debugger;
    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...initialState,
                ...action.payload
            };
        }
        case Actions.REMOVE_USER_DATA:
        {
            return {
                ...initialState
            };
        }
        case Actions.USER_LOGGED_OUT:
        {
            return initialState;
        }
        default:
        {
            return state
        }
    }
};

export default user;
