import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import 'containers/Footer.css'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Websitess
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Footer() {
    return (
                <Container maxWidth="sm">
                    <Typography variant="body1" align="center">My sticky footer can be found here.</Typography>
                    <Copyright />
                </Container>
    );
}
