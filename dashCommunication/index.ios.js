/**
 * Dash Communication
 * Created by olegyanchinskiy 5.12.16
 */


import React, { AppRegistry, Component, Text, View } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'

var Button = require('react-native-button');

class dashCommunication extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose' }}/>
        <Text style={styles.welcome}>
          Welcome to Dash Communication!
        </Text>
      </ViewContainer>
    );
  }
}

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dashCommunication', () => dashCommunication);
