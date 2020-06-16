import React from 'react';
import './style.css';

import NotificationsIcon from '@material-ui/icons/Notifications';

export default class PushToggle extends React.Component {
   render() {
       return <div className="push">
           <NotificationsIcon  className = 'ni' />
       </div>
   }
}
