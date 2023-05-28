import React from 'react';
import { createTheme } from '@mui/material/styles';

export const inputBorderColor = '#c4c4c4';
export const inputBorderWidth = '2px';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#025141',
    },
    secondary: {
      main: '#ff9100',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    h5: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
    overline: {
      fontWeight: 500,
    },
  },
  components: {
    MuiList: {
      defaultProps: {
        dense: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInput: {
      defaultProps: {
        size: 'small',
        margin: 'dense',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        sx: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: inputBorderWidth,
            },
            '&:hover fieldset': {
              borderWidth: inputBorderWidth,
            },
            '&.Mui-focused fieldset': {
              borderWidth: inputBorderWidth,
            },
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        disableElevation: true,
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        size: 24,
      },
    },
    MuiIcon: {
      defaultProps: {
        fontSize: 'small',
      },
    },
    MuiChip: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiAutocomplete: {

    },
  },
});
export default theme;
