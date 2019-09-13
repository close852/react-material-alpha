import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
import { Header, LeftMenu, Footer } from 'containers'
import { SignIn, SignUp } from 'components';
=======
import { Header, LeftMenu, RightMenu, Footer } from 'containers'
import { SignIn, SignUp, AppList, BbsList, FormList } from 'components';
>>>>>>> 9801e44a9aee0e859e3af291dea2a40075ae788f

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: "column"
    },
    content: {
        padding: theme.spacing(2),
        marginLeft: theme.spacing(30),
    },
    toolbar: theme.mixins.toolbar,
    footer: {
        display: 'flex',
        marginTop: 'auto',
        backgroundColor: 'gray',
        marginLeft: `calc(${theme.spacing(30)})`,
        alignItems: 'center',
        height: theme.spacing(5),
    }
}));

function App({ location }) {
    const classes = useStyles();


    const exPattern = ['/signin', '/logout', '/signup', '/drawer'];
    const isAuth = !exPattern.includes(location.pathname);
    return (
        <div className={classes.root}>
            <CssBaseline />
            {isAuth && <Route component={({ history }) => (<Header history={history} />)} />}
            {isAuth && <Route component={({ history }) => (<LeftMenu history={history} />)} />}
            {isAuth && <Route component={({ history }) => (<RightMenu history={history} />)} />}
            <main className={isAuth && classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/signin" component={SignIn}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/app/forms" component={FormList}></Route>
                    <Route path="/app/todolist" component={AppList}></Route>
                    <Route path="/app/processlist" component={AppList}></Route>
                    <Route path="/app/endlist" component={BbsList}></Route>
                    <Route path="/bbs/list" component={BbsList}></Route>
                </Switch>
            </main>
            <footer className={classes.footer}>
                {isAuth && <Footer />}
            </footer>
        </div>
    );
}

export default App;