import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom'
import { Header, LeftMenu, Footer } from 'containers'
import { SignIn, SignUp } from 'components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

function App({ location }) {
    const classes = useStyles();
    const exPattern = ['/signin', '/logout', '/signup', '/drawer'];
    const isAuth = !exPattern.includes(location.pathname);
    return (
        <div className={classes.root}>
            <CssBaseline />
            {isAuth && <Route component={Header} />}
            {isAuth && <LeftMenu />}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/signin" component={SignIn}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                </Switch>
                {isAuth && <Footer />}
            </main>
        </div>
    );
}

export default App;