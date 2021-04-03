import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PersonIcon from '@material-ui/icons/Person';
import { Tab, Tabs } from '@material-ui/core';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UserDeailsMenu from './components/UserDetailsMenu/UserDeailsMenu';
UserDetails.propTypes = {};

function UserDetails(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    <>
      <main className="user-details">
        <div className="container">
          <div className="row">
            <div className="user-details__left col-lg-3">
              <UserDeailsMenu name={user.name} />
            </div>
            <div className="user-details__right col-lg-9"></div>
          </div>
        </div>
      </main>
      ;
    </>
  );
}

export default UserDetails;
