import React, { Component } from 'react';
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import { Footer, Header } from 'containers'

import { Switch, Route } from 'react-router-dom';
import 'App.css'
class App extends Component {

  render() {
    const { location } = this.props;
    const exPattern = ['/signin', '/logout', '/signup', '/drawer'];
    return (
      <div className="root">
        {!exPattern.includes(location.pathname) && <Route component={Header} />}
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        {!exPattern.includes(location.pathname) && <Footer />}
      </div>
    );
  }
}

export default App;