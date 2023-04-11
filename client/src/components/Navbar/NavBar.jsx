import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item>
                <Typography>Vizta</Typography>
              </Grid>
              <Grid item>
                <Stack direction={'row'} spacing={2}>
                  <Button variant="contained">Login</Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


