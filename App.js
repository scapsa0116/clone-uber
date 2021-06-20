import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      region : 
      {
        latitude: 1.290270,
        longitude: 103.851959,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }
    }
  }
  render()
  {
    return (
      <View style={styles.container}>
        <Text>HomeScreen!</Text>
        <MapView 
        initialRegion = {this.state.region}
        showsUserLocation = {true}
        showsCompass = {true}
        rotateEnabled = {false}
        style = {{flex:1}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});