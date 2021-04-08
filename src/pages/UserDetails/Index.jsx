import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PersonIcon from '@material-ui/icons/Person';
import { Tab, Tabs } from '@material-ui/core';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UserDetailsMenu from './components/UserDetailsMenu/UserDetailsMenu';
import Details from './pages/Details';
import Alert from './pages/Alert';
import Purchase from './pages/Purchase';
import Favorite from './pages/Favorite';
import './style.scss';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/actions/userAction';
UserDetails.propTypes = {};

function UserDetails(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const routerMatch = useRouteMatch();
  const { url } = routerMatch;
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    try {
      dispatch(loginUser(values));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <main className="user-details">
        <div className="container">
          <div className="row">
            <div className="user-details__left col-lg-3">
              <UserDetailsMenu name={user.name} />
            </div>
            <div className="user-details__right col-lg-9">
              <Switch>
                <Route path={`${url}`} exact>
                  <Details userInfor={user} onSubmit={onSubmit} />
                </Route>
                <Route path={`${url}/thong-bao`} exact component={Alert} />
                <Route path={`${url}/don-hang`} exact component={Purchase} />
                <Route path={`${url}/don-hang`} exact component={Favorite} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
      ;
    </>
  );
}

export default UserDetails;
