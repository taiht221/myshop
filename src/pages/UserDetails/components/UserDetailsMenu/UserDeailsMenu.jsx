import React from 'react';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import { Tab, Tabs } from '@material-ui/core';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import './style.scss';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FaceIcon from '@material-ui/icons/Face';
UserDeailsMenu.propTypes = {
  name: PropTypes.string,
};

function UserDeailsMenu({ name = '???' }) {
  const routerMatch = useRouteMatch();
  return (
    <>
      <div className="account">
        <FaceIcon />
        Tài khoản của {name}
      </div>
      <div className="tab">
        <NavLink
          className="tabs"
          to={`${routerMatch.url}`}
          exact
          activeStyle={{
            backgroundColor: '#ececec',
            fontWeight: 'bold',
          }}
        >
          <PersonIcon /> Thông tin người dùng
        </NavLink>
        <NavLink
          className="tabs"
          to={`${routerMatch.url}/thong-bao`}
          activeStyle={{
            backgroundColor: '#ececec',
            fontWeight: 'bold',
          }}
        >
          <NotificationsIcon></NotificationsIcon> Thông báo của tôi
        </NavLink>
        <NavLink
          className="tabs"
          to={`${routerMatch.url}/don-hang`}
          activeStyle={{
            backgroundColor: '#ececec',
            fontWeight: 'bold',
          }}
        >
          <BookmarkIcon /> Quản lí đơn hàng
        </NavLink>
        <NavLink
          className="tabs"
          to={`${routerMatch.url}/yeu-thich`}
          activeStyle={{
            backgroundColor: '#ececec',
            fontWeight: 'bold',
          }}
        >
          <FavoriteIcon /> Sản phẩm yêu thích
        </NavLink>
      </div>
    </>
  );
}

export default UserDeailsMenu;
