import {Box, Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export function Footer() {
    return (
        <Stack direction={"row"} spacing={4} sx={theme => ({
            backgroundColor: "#323232",
            color: theme.palette.getContrastText("#323232"),
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2,
        })}>
            <FooterNavLink title="Terms of Use"/>
            <FooterNavLink title="Privacy Policy"/>
            <FooterNavLink title="Cookies"/>
            <FooterNavLink title="Cookie Preferences"/>
            <FooterNavLink title="Language"/>
            <Box flex={1}/>
            <Typography variant={"caption"}>© 2023 Mock Adobe. No rights reserved.</Typography>
        </Stack>
    )
}

function FooterNavLink(props: { title: string }) {
    return (
        <Link
            color={"inherit"}
            underline={"none"}
            href={'#'}
        >
            <Typography variant={"caption"}>{props.title}</Typography>
        </Link>
    )
}