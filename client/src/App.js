import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './shared/components/UIElements/Layout';
import Home from './pages/user/Home';
import About from './pages/user/About';
import PaymentSuccesful from './pages/user/PaymentSuccesful';
import ContactUs from './pages/user/ContactUs';
import Blog from './pages/user/Blog';
import Shop from './pages/user/Shop';
import Cart from './pages/user/Cart';
import Payment from './Customer/Payment/Payment';
import Dashboard from './pages/admin/Dashboard';
import Customers from './pages/admin/Customers';
import Advertisements from './pages/admin/Advertisements';
import Registrations from './pages/admin/Registrations';
import AddBlog from './pages/admin/AddBlog';
import { createTheme, ThemeProvider } from '@material-ui/core';
import AuthForm from './pages/user/AuthForm';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cartform from './Customer/AddtoCart/Cartform';
import SelectQ from './pages/user/components/SelectQ';
import PostAnAdForm from './pages/user/components/PostAnAdForm';
import PaymentForm from './pages/user/components/PaymentForm';
import SignUpAdmin from './pages/user/components/SignUpAdmin';
import Title from './pages/seller/Title';
import Chart from './pages/seller/Chart';
import SellerDashboard from './pages/seller/SellerDashboard';
import SellerAds from './pages/seller/SellerAds';
import Profile from './pages/user/Profile';
import { Redirect } from 'react-router';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7a27ff',
      main: '#42207A',
      dark: '#1e014d',
      contrastText: '#fff',
    },
  },
});

function App() {
  const [authState, setAuthState] = useState({
    firstName: '',
    id: '',
    userRole: '',
    status: false,
  });
  // const [user, setUser] = useState({ firstName: '', id: '', userRole: '' });

  const fetchUser = async () => {
    axios
      .get('http://localhost:3001/user/auth', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            firstName: response.data.firstName,
            id: response.data.id,
            userRole: response.data.userRole,
            status: true,
          });
        }
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Switch>
            <Layout>
              {authState.userRole === 'Admin' ? <Redirect to='/Admin' /> : null}
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/ContactUs' component={ContactUs} />
              <Route path='/Blog' component={Blog} />
              <Route path='/Shop' component={Shop} />
              <Route path='/Payment' component={PaymentForm} />
              <Route path='/Cart' component={Cart} />
              <Route path='/Cartform' component={Cartform} />
              <Route path='/SelectQ' component={SelectQ} />
              <Route path='/PostAnAd' component={PostAnAdForm} />
              <Route path='/Profile' component={Profile} />
              <Route path='/Login' component={AuthForm} />
              <Route path='/SignUpShop' component={AuthForm} />
              <Route path='/SignUpIndi' component={AuthForm} />
              <Route path='/SignUpAdmin' component={SignUpAdmin} />
              <Route path='/BeforeSignUp' component={AuthForm} />
              <Route path='/PaymentForm' component={PaymentForm} />
              <Route path='/PaymentSuccess' component={PaymentSuccesful} />
              <Route exact path='/Admin' component={Dashboard} />
              <Route path='/Admin/Customers' component={Customers} />
              <Route path='/Admin/Advertisements' component={Advertisements} />
              <Route path='/Admin/Registrations' component={Registrations} />
              <Route path='/Admin/AddBlog' component={AddBlog} />
              <Route exact path='/Seller' component={SellerDashboard} />
              <Route path='/seller/Title' component={Title} />
              <Route path='/seller/Chart' component={Chart} />
              <Route path='/seller/SellerAds' />
            </Layout>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
