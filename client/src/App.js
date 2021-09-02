import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './shared/components/UIElements/Layout';
import Home from './pages/user//Home';
import About from './pages/user/About';
import ContactUs from './pages/user/ContactUs';
import Blog from './pages/user/Blog';
import Shop from './pages/user/Shop';
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
  const [authState, setAuthState] = useState(false);
  const [user, setUser] = useState({ firstName: '', id: '' });

  useEffect(() => {
    axios
      .get('http://localhost:3001/user/auth', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
          setUser({ firstName: response.data.firstName, id: response.data.id });
        }
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authState, setAuthState, user, setUser }}>
        <Router>
          <Switch>
            <Layout>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/ContactUs' component={ContactUs} />
              <Route path='/Blog' component={Blog} />
              <Route path='/Shop' component={Shop} />
              <Route path='/Login' component={AuthForm} />
              <Route path='/SignUpShop' component={AuthForm} />
              <Route path='/SignUpIndi' component={AuthForm} />
              <Route path='/BeforeSignUp' component={AuthForm} />
              <Route exact path='/Admin' component={Dashboard} />
              <Route path='/Admin/Customers' component={Customers} />
              <Route path='/Admin/Advertisements' component={Advertisements} />
              <Route path='/Admin/Registrations' component={Registrations} />
              <Route path='/Admin/AddBlog' component={AddBlog} />
            </Layout>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
