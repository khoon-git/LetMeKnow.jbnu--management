import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withToastify } from 'utils/component/toastify';

import UsagePage from 'pages/Usage';
import ChartsPage from 'pages/Charts';
import SummaryPage from 'pages/Summary';
import ChatPage from 'pages/Chat';
import LoginPage from 'pages/Login';
import SettingsPage from 'pages/Settings';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={ChartsPage} />
            <Route exact path="/usage" component={UsagePage} />
            <Route exact path="/summary" component={SummaryPage} />
            <Route exact path="/chat" component={ChatPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/login" component={LoginPage} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default withToastify(MainApp);
