import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';
import {
  Scene,
  Router,
  TabBar,
  Modal,
  Schema,
  Actions
} from 'react-native-router-flux';
import ExploreView from './ExploreView';
import Login from './Login';
import Signup from './signup';

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} initial={true} title="Login"/>
    <Scene key="signup" component={Signup} title="Signup"/>
    <Scene key="explore" component={ExploreView} title="Explore"/>
  </Scene>);

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router style={{ flex: 0.4}} scenes={scenes}/>;
      </View>
    );
  }
}

module.exports = App;