import React, { Component } from 'react';
import MailBox from './components/MailBox';
import Thread from './containers/Thread';
import SideBar from './containers/SideBar';
import ActivityPanel from './containers/ActivityPanel';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './app.css';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const WSideBar = withRouter(SideBar);

window.getState = () => {
  return store.getState();
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper-out">
            <div className="wrapper-in">
              <WSideBar />
              <div className="main-container">
                <Route exact path="/:mailbox" component={MailBox} />
                <Route exact path="/:mailbox/:threadId" component={Thread} />
              </div>
              <ActivityPanel />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;