import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom'
import { Header, LeftMenu, Footer } from 'containers'
import { SignIn, SignUp } from 'components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: "column"
    },
    content: {
        padding : theme.spacing(2),
        marginLeft: theme.spacing(32),
    },
    toolbar: theme.mixins.toolbar,
    footer:{
        marginTop: 'auto',
        backgroundColor: 'wheat',
        marginLeft: theme.spacing(30),
    }
}));

function App({ location }) {
    const classes = useStyles();

    
    const exPattern = ['/signin', '/logout', '/signup', '/drawer'];
    const isAuth = !exPattern.includes(location.pathname);
    return (
        <div className={classes.root}>
            <CssBaseline />
            {isAuth && <Route component={({history})=>(<Header history={history} />)}/>}
            {isAuth && <Route component={({history})=>(<LeftMenu history={history} />)}/>}
            <main className={isAuth && classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/signin" component={SignIn}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                </Switch>
            </main>
            <footer className={classes.footer}>
                {isAuth && <Footer />}
            </footer>
        </div>
    );
}

export default App;