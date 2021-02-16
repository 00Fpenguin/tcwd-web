/* eslint-disable arrow-parens */
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
  Hidden
} from '@material-ui/core';

import Http from 'src/utils/http';

import Page from 'src/components/Page';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    height: '100%'
    // paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(3)
  },
  loginWrapper: {
    textAlign: 'center',
    flex: 1,
    padding: '2em 4em',
    position: 'relative'
  },
  loginText: {
    padding: '2em',
    textAlign: 'center',
    display: 'inline-block'
  },
  loginTextHeading: {
    color: '#0b7ef8'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    width: '100%',
    marginBottom: '1em'
  }
}));

const LOGIN_FORM_INITIAL_VALUE = { email: '', password: '' };

const LOGIN_FORM_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string()
    .max(255)
    .required('Password is required')
});

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmitLogin = async (payload, { setFieldValue }) => {
    try {
      const { data } = await Http.post('/login', {
        ...payload,
        username: payload.email
      });

      localStorage.setItem('token', data.token);

      navigate('/', { replace: true });
    } catch (error) {
      setFieldValue('password', '', false);
      console.log(error);
    }
  };

  return (
    <Page className={classes.root} title="Login">
      <Box display="flex" flexDirection="row" height="100%">
        <Hidden only={['sm', 'xs', 'md']}>
          <Container
            style={{
              flex: 1.5,
              background:
                'url("https://images6.alphacoders.com/478/thumb-1920-478046.jpg") no-repeat',
              backgroundSize: 'cover'
            }}
          >
            &nbsp;
          </Container>
        </Hidden>
        <Container className={classes.loginWrapper}>
          <Formik
            validationSchema={LOGIN_FORM_SCHEMA}
            initialValues={LOGIN_FORM_INITIAL_VALUE}
            onSubmit={handleSubmitLogin}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box style={{ textAlign: 'center' }}>
                  <Logo width={150} height={150} />
                </Box>
                <Box mb={3} className={classes.loginText}>
                  <Typography color="textPrimary" variant="h5">
                    Republic of the Philippines
                  </Typography>
                  <hr />
                  <Typography
                    gutterBottom
                    variant="h2"
                    className={classes.loginTextHeading}
                  >
                    Toledo City Water District
                  </Typography>
                </Box>
                <Box px={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                    inputProps={{
                      style: {
                        backgroundColor: '#eee'
                      }
                    }}
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                    inputProps={{
                      style: {
                        backgroundColor: '#eee'
                      }
                    }}
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      style={{ background: '#3498DB' }}
                    >
                      Login
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    <Link
                      component={RouterLink}
                      to="/register"
                      variant="h6"
                      style={{ color: '#3498DB' }}
                    >
                      Create an Account
                    </Link>
                  </Typography>
                  <Typography color="textSecondary" variant="body1">
                    or
                  </Typography>
                  <Box my={2}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="outlined"
                      style={{ color: '#3498DB' }}
                    >
                      Forgot Password
                    </Button>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
          <Box className={classes.footer}>
            <Typography color="textSecondary" variant="caption">
              2021 &copy; Toledo City Water District.
            </Typography>
            <Typography color="textSecondary" variant="caption">
              All Right Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
