import {AppBar, Box, Divider, Link, Paper, Stack, Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function AppAppBar() {
    return (
        <AppBar
            className="app-app-bar"
            position="relative"
            elevation={0}
        >
            <Paper variant={"outlined"} sx={{borderRadius: 0}}>
                <Toolbar>
                    <Stack direction={"row"} spacing={1.5}>
                        <AppLogo/>
                        <Typography variant="body2" paddingTop="4px" >
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
                    <AppBarNavLink title={"Sign in"}/>
                </Toolbar>
            </Paper>
        </AppBar>
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

function AppBarNavLink(props: {title: string}){
    return (
        <Link
            color={"inherit"}
            underline={"none"}
            href={'#'}
        >
            <Typography variant={"body2"}>{props.title}</Typography>
        </Link>
    )
}
