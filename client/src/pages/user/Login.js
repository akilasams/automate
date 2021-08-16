import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  modalBackground: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '30%',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  field: {
    marginBottom: 20,
    width: '80%',
    // display: 'block',
  },
  button: {
    display: 'block',
    width: '80%',
    marginBottom: '20px',
  },
}));

//initialValues={} onSubmit={} validationSchema={}

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);

    if (username == '') {
      setUsernameError(true);
    }

    if (password == '') {
      setPasswordError(true);
    }

    if (username && password) {
      const data = {
        username: username,
        password: password,
      };

      axios
        .post('http://localhost:3001/user/login', data)
        .then((res) => {
          console.log('Logged In');
        })
        .then(() => history.push('/CustomerHome'));
    }
  };

  return (
    <div>
      <div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
          <div className={classes.title}>
            <h1 style={{ color: '#42207A' }}>Login</h1>
          </div>
          <div>
            <form
              noValidate
              autoComplete='off'
              className={classes.form}
              onSubmit={handleSubmit}
            >
              <TextField
                onChange={(e) => setUsername(e.target.value)}
                className={classes.field}
                label='Username'
                variant='outlined'
                required
                //error={usernameError}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                className={classes.field}
                id='standard-password-input'
                label='Password'
                type='password'
                variant='outlined'
                required
                //error={passwordError}
              />

              <Button
                className={classes.button}
                type='submit'
                disableElevation
                variant='contained'
                color='primary'
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
