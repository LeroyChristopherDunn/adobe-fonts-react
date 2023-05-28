import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Controller, useForm} from 'react-hook-form';
import {
    Box,
    Checkbox, CircularProgress, FormControlLabel, InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import {inputBorderColor} from '../../Theme';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export type LoginFormSubmission = {
    email: string,
    password: string;
};

export function LoginForm(props: {
    defaultValues?: LoginFormSubmission,
    isLoading?: boolean,
    onSubmit: (submission: LoginFormSubmission) => any,
}) {
    const {defaultValues, isLoading, onSubmit} = props;

    const {handleSubmit, control} = useForm<LoginFormSubmission>({
        defaultValues,
    });

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                render={({field: {onChange, value}, fieldState: {error}}) => (
                    <>
                        <Typography variant={"caption"} gutterBottom>Email</Typography>
                        <TextField
                            autoFocus
                            autoComplete="email"
                            className="input"
                            variant="outlined"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            disabled={isLoading}
                            fullWidth
                            type="email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </>

                )}
                rules={{
                    required: 'Email required',
                    pattern: {
                        value: emailRegex,
                        message: 'Email invalid',
                    },
                }}
            />
            <Controller
                name="password"
                control={control}
                render={({field: {onChange, value}, fieldState: {error}}) => (
                    <>
                        <Typography variant={"caption"} gutterBottom>Password</Typography>
                        <TextField
                            autoComplete="current-password"
                            className="input"
                            variant="outlined"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            disabled={isLoading}
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon fontSize="small"/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </>
                )}
                rules={{
                    required: 'Password required',
                }}
            />
            <FormControlLabel
                className="checkbox"
                control={(
                    <Checkbox
                        value={showPassword}
                        color="primary"
                        sx={(theme) => ({
                            color: showPassword ? theme.palette.primary.main : inputBorderColor,
                        })}
                    />
                )}
                label={<Typography variant="caption">Show password</Typography>}
                onChange={(event, checked) => setShowPassword(checked)}
            />
            <Button
                className="action-button"
                type="submit"
                variant="contained"
                disabled={isLoading}
            >
                {isLoading && <><CircularProgress/><Box marginRight={1}/></>}
                Login
            </Button>
        </form>
    );
}
