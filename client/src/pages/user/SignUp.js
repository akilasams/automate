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

function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePass, setRetypePass] = useState('');
  const [email, setEmail] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [retypePassError, setRetypePassError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);
    setRetypePassError(false);
    setEmailError(false);

    if (username == '') {
      setUsernameError(true);
    }

    if (password == '') {
      setPasswordError(true);
    }

    if (retypePass != password) {
      setRetypePassError(true);
    }

    if (email == '') {
      setEmailError(true);
    }

    if (!(usernameError && passwordError && retypePassError && emailError)) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        userRoleId: 2,
        username: username,
        password: password,
        email: email,
      };
      // console.log(data);
      axios
        .post('http://localhost:3001/user/auth', data)
        .then(() => {
          console.log('SUCCESS');
        })
        .then(() => history.push('/Login'));
    }
  };

  return (
    <div>
      <div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
          <div className={classes.title}>
            <h1 style={{ color: '#42207A' }}>Register</h1>
          </div>
          <div>
            <form
              noValidate
              autoComplete='off'
              className={classes.form}
              onSubmit={handleSubmit}
            >
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                className={classes.field}
                label='First Name'
                variant='outlined'
                required
                //error={usernameError}
              />

              <TextField
                onChange={(e) => setLastName(e.target.value)}
                className={classes.field}
                label='Last Name'
                variant='outlined'
                required
                //error={usernameError}
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                className={classes.field}
                id='email'
                label='Email'
                variant='outlined'
                required
                //error={emailError}
              />
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
              <TextField
                onChange={(e) => setRetypePass(e.target.value)}
                className={classes.field}
                id='standard-password-input'
                label='Retype Password'
                type='password'
                variant='outlined'
                required
                //error={retypePassError}
              />

              <Button
                className={classes.button}
                type='submit'
                disableElevation
                variant='contained'
                color='primary'
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
