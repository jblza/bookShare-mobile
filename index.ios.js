'use strict';

var React = require('react-native');
var ExploreView = require('./ExploreView');
var Login = require('./Login');
var Signup = require('./signup');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class BookShareApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'BookShare',
          component: Signup,
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('bookshare', function() { return BookShareApp });
