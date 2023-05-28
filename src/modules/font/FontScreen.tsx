import React, {useState} from "react";
import {
    Autocomplete,
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    Link,
    ListItemText,
    MenuItem,
    Select,
    Slider,
    Stack,
    Switch,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';

const sampleTextOptions = [
    'The quick brown fox jumps over the lazy dog',
    'Realigned equestrian fez bewilders picky monarch',
    'Roger, hungry: ate 236 peaches & cantaloupes in 1904!',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789 ¿ ? ¡ ! & @ ‘ ’ “ ” « » % * ^ # $ £ € ¢ / ( ) [ ] { } . , ® ©',
]

const fonts = [
    "Roboto Thin",
    "Roboto Thin Italic",
    "Roboto Light",
    "Roboto Light Italic",
    "Roboto Regular",
    "Roboto Regular Italic",
    "Roboto Medium",
    "Roboto Medium Italic",
    "Roboto Bold",
    "Roboto Bold Italic",
    "Roboto Black",
    "Roboto Black Italic",
]

export function FontScreen() {
    const [tabIndex, setTabIndex] = useState(0);
    const [sampleText, setSampleText] = useState(sampleTextOptions[0]);
    const [textSize, setTextSize] = useState(16);
    return (
        <Container className="font-screen" disableGutters maxWidth={'lg'}>
            <Grid container className="title-container" marginBottom={4}>
                <Grid item xs={12} lg={6}>
                    <Typography variant={"h3"}>Roboto</Typography>
                    <Typography variant={"body1"}>From <Link underline={"none"} href={'#'}>Google</Link></Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Stack spacing={2} alignItems={"flex-end"}>
                        <FontFilter/>
                        <Typography variant={"caption"} color={"text.secondary"}>
                            Licenced for personal and commercial use. <Link underline={"none"} href={'#'}>Learn
                            more.</Link>
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container className="images-container" spacing={4} marginBottom={4}>
                <Grid item xs={12} lg={4}>
                    <FontGraphic/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FontGraphic/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FontGraphic/>
                </Grid>
            </Grid>
            <Box className="tabs" sx={{borderBottom: 1, borderColor: 'divider'}} marginBottom={2}>
                <Tabs
                    value={tabIndex}
                    onChange={(event, value) => setTabIndex(value)}
                >
                    <Tab label="Fonts"/>
                    <Tab label="Templates"/>
                    <Tab label="Recommendations"/>
                    <Tab label="About"/>
                    <Tab label="Licencing"/>
                    <Tab label="Details"/>
                </Tabs>
            </Box>
            <FiltersToolbar
                sampleText={sampleText}
                onSampleTextChange={setSampleText}
                textSize={textSize}
                onTextSizeChange={setTextSize}
            />
            <Box sx={{
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderTop: 1,
                borderBottom: 1,
                borderColor: 'divider',
            }}>
                <Typography variant={"body2"}>{fonts.length} Fonts</Typography>
            </Box>
            {fonts.map(font => (
                <FontListItem key={font} title={font} sampleText={sampleText}/>
            ))}
            <Box marginTop={10}/>
        </Container>
    )
}

function FontFilter() {
    return (
        <FormControl fullWidth={false} sx={{width: "10rem"}}>
            {/*<InputLabel id="font-filter-select-label">Activate Fonts</InputLabel>*/}
            <Select
                // labelId="font-filter-select-label"
                id="font-filter-select"
                placeholder={'this is placeholder'}
                defaultValue={0}
            >
                <MenuItem value={0}>Activate Fonts</MenuItem>
                <MenuItem value={1}>Roboto</MenuItem>
                <MenuItem value={2}>Roboto Condensed</MenuItem>
                <MenuItem value={3}>Roboto Mono</MenuItem>
            </Select>
        </FormControl>
    )
}

function FontGraphic() {
    return (
        <Box sx={{
            width: '100%',
            height: '200px',
            backgroundColor: '#4a4a48',
        }}>

        </Box>
    )
}

function FiltersToolbar(props: {
    sampleText: string,
    onSampleTextChange: (sampleText: string) => any,
    textSize: number,
    onTextSizeChange: (textSize: number) => any,
}) {
    return (
        <Stack className="filter-container" direction="row" spacing={12} marginBottom={2}>
            <Box>
                <Typography variant={"caption"} gutterBottom>View</Typography>
                <Stack direction="row">
                    <Button startIcon={<FormatListBulletedIcon/>} color={"inherit"}>
                        List
                    </Button>
                    <Button startIcon={<AppsIcon/>} color={"inherit"}>
                        Grid
                    </Button>
                </Stack>
            </Box>
            <Box>
                <Typography variant={"caption"} gutterBottom>Sample Text</Typography>
                <Autocomplete
                    disablePortal
                    options={sampleTextOptions}
                    value={props.sampleText}
                    onChange={(event, value) => props.onSampleTextChange(value)}
                    sx={{width: '28rem'}}
                    disableClearable
                    renderInput={(params) => <TextField {...params} />}
                    renderOption={(props, option, state) => (
                        <MenuItem {...props}>
                            <ListItemText>{option}</ListItemText>
                        </MenuItem>
                    )}
                />
            </Box>
            <Box display="flex" flexDirection="column">
                <Stack direction={"row"}>
                    <Typography variant={"caption"} flexGrow={1} gutterBottom>Text Size</Typography>
                    <Typography variant={"caption"} gutterBottom>{props.textSize}</Typography>
                </Stack>
                <Slider
                    min={4}
                    max={140}
                    value={props.textSize}
                    onChange={(event, value) => props.onTextSizeChange(value as number)}
                    sx={{width: '14rem'}}
                />
            </Box>
        </Stack>
    )
}

function FontListItem(props: { title: string, sampleText: string }) {
    return (
        <Stack direction="row" paddingTop={2.5} paddingBottom={2.5} sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Stack flex={1} spacing={2}>
                <Typography variant={"body2"}>{props.title}</Typography>
                <Typography variant={"body2"} fontWeight={200}>{props.sampleText}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems={"center"}>
                <Typography variant={"caption"}>Apply Font</Typography>
                <Switch/>
            </Stack>
        </Stack>
    )
}