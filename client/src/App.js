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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/ContactUs'>
              <ContactUs />
            </Route>
            <Route path='/Blog'>
              <Blog />
            </Route>
            <Route path='/Shop'>
              <Shop />
            </Route>
            <Route path='/Login'>
              <AuthForm />
            </Route>
            <Route path='/SignUp'>
              <AuthForm />
            </Route>
            <Route path='/BeforeSignUp'>
              <AuthForm />
            </Route>
            <Route exact path='/Admin'>
              <Dashboard />
            </Route>
            <Route path='/Admin/Customers'>
              <Customers />
            </Route>
            <Route path='/Admin/Advertisements'>
              <Advertisements />
            </Route>
            <Route path='/Admin/Registrations'>
              <Registrations />
            </Route>
            <Route path='/Admin/AddBlog'>
              <AddBlog />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
