'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 36,
    textAlign: 'center',
    color: '#656565'
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    marginBottom: 10,
    color: '#48BBEC'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  transferButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  transferButtonText: {
    fontSize: 18,
    color: '#656565',
    alignSelf: 'center'
  }
});

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Share</Text>
        <Text style={styles.subtitle}>Borrow books from your friends</Text>
        <View style={styles.flowRight}>
            <TextInput
              style={styles.input}
              placeholder='Email or Username'/>
        </View>
        <View style={styles.flowRight}>
            <TextInput
              style={styles.input}
              placeholder='Password'/>
        </View>
        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Log In With Facebook</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.transferButton}
            underlayColor='#99d9f4'>
          <Text style={styles.transferButtonText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Login;