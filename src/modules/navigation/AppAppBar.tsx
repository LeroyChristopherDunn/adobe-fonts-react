import {
    AppBar,
    Box,
    Divider,
    IconButton,
    InputAdornment,
    Link as MUILink,
    Paper,
    Stack,
    TextField,
    Toolbar
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import {CameraAlt, Search} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function AppAppBar() {
    return (
        <>
            <AppBar
                className="app-app-bar"
                position="relative"
                elevation={0}
            >
                <Paper variant={"outlined"} sx={{borderRadius: 0}}>
                    <Toolbar>
                        <Stack direction={"row"} spacing={1.5}>
                            <AppLogo/>
                            <Typography variant="body2" paddingTop="4px">
                                Adobe Fonts
                            </Typography>
                        </Stack>
                        <Divider orientation="vertical" flexItem variant={"middle"} sx={{
                            marginLeft: 3,
                            marginRight: 3,
                        }}/>
                        <Stack direction={"row"} spacing={3} flexGrow={1}>
                            <AppBarNavLink title={"Photos"}/>
                            <AppBarNavLink title={"Illustrations"}/>
                            <AppBarNavLink title={"Vectors"}/>
                            <AppBarNavLink title={"Videos"}/>
                            <AppBarNavLink title={"Audio"}/>
                            <AppBarNavLink title={"Templates"}/>
                            <AppBarNavLink title={"Plugins"}/>
                            <AppBarNavLink title={"3D Assets"}/>
                        </Stack>
                        <Link className="link-unstyled" to={"log-in"} >
                            <Typography variant={"body2"}>Sign In</Typography>
                        </Link>
                    </Toolbar>
                </Paper>
            </AppBar>
            <AppBar
                className="app-app-bar"
                position="relative"
                elevation={0}
            >
                <Paper variant={"outlined"} sx={{borderRadius: 0}}>
                    <Toolbar>
                        <Stack direction={"row"} spacing={3} flexGrow={1}>
                            <AppBarNavLink title={"Home"}/>
                            <AppBarNavLink title={"All Fonts"}/>
                            <AppBarNavLink title={"Recommendations"}/>
                            <AppBarNavLink title={"Font Packs"}/>
                            <AppBarNavLink title={"Foundries"}/>
                            <AppBarNavLink title={"About"}/>
                        </Stack>
                        <TextField
                            color={"primary"}
                            sx={{width: "24rem"}}
                            placeholder={"Search all fonts, foundries, and designers"}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <Search fontSize={"small"}/>
                                </InputAdornment>,
                                endAdornment: <InputAdornment position="end">
                                    <IconButton>
                                        <CameraAlt fontSize={"small"}/>
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Toolbar>
                </Paper>
            </AppBar>
        </>
    );
}

function AppLogo() {
    return (
        <Box sx={{
            width: 24,
            height: 24,
            borderRadius: 1,
            backgroundColor: '#000b1d',
            color: "white",
            display: "flex",
            justifyContent: "center",
        }}>
            <Typography variant={"body1"}>f</Typography>
        </Box>
    )
}

function AppBarNavLink(props: { title: string }) {
    return (
        <MUILink
            color={"inherit"}
            underline={"none"}
            href={'#'}
        >
            <Typography variant={"body2"}>{props.title}</Typography>
        </MUILink>
    )
}
