import * as React from 'react';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, Box, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm, LoginFormSubmission } from './LoginForm';

export default function LoginScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleLogin = (submission: LoginFormSubmission) => {
    setIsLoading(true);
    new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => setErrorMessage(undefined))
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setIsLoading(false));
  };
  return (
    <Box className="login-screen" sx={(theme) => ({ backgroundColor: theme.palette.background.default })}>
      <Container className="inner-container" maxWidth="xs">
        <Typography className="logo" component="h1" variant="h4">
          Adobe Fonts
        </Typography>
        <Paper className="form-container">
          <Typography className="title" component="h1" variant="h5">
            Log In
          </Typography>
          {!isLoading && !!errorMessage && (
            <Alert severity="error" className="alert">
              {errorMessage}
            </Alert>
          )}
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        </Paper>
        <Box className="copyright-container"><Copyright /></Box>
      </Container>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography variant="caption" color="white">
      <Link color="inherit" href="#">
        © No Copyright
        {' '}
        Adobe Mock
        {' '}
        {new Date().getFullYear()}
        .
      </Link>
    </Typography>
  );
}
