import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashboardLayout from './pages/admin/AdminDashboardLayout';
import HomeLayout from './pages/user/HomeLayout';
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
          <HomeLayout>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/About'>
              <About />
            </Route>
            <Route exact path='/ContactUs'>
              <ContactUs />
            </Route>
            <Route exact path='/Blog'>
              <Blog />
            </Route>
            <Route exact path='/Shop'>
              <Shop />
            </Route>
          </HomeLayout>

          <AdminDashboardLayout>
            <Route exact path='/Dashboard'>
              <Dashboard />
            </Route>
            <Route exact path='/Customers'>
              <Customers />
            </Route>
            <Route exact path='/Advertisements'>
              <Advertisements />
            </Route>
            <Route exact path='/Registrations'>
              <Registrations />
            </Route>
            <Route exact path='/AddBlog'>
              <AddBlog />
            </Route>
          </AdminDashboardLayout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
