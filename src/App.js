import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CartPopup from 'components/CartPopup/CartPopup';
import ProductFeature from 'pages/Product';
import UserDetails from 'pages/UserDetails/Index';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import ProductDetail from './pages/ProductDetail';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4f8ec',
    },
    secondary: {
      main: '#8bc34a',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CartPopup />
        <Header />
        <Switch>
          <Route path="/myshop" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/cocoshop" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/" exact component={Home} />
          <Route path="/thanh-toan" component={Checkout} />
          <Route path="/search" component={ProductFeature} />
          <Route path="/thong-tin" component={UserDetails} />
          <Route path="/:slug?" component={ProductDetail} />

          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
