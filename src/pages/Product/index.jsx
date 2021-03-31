import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import useGetTitle from 'hooks/useGetTitle';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
  const routerMatch = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${routerMatch.url}/:slug?`} component={ListPage} />
      </Switch>
    </>
  );
}

export default ProductFeature;
