import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class Live extends Component {
  state = {
    coords: null,
    status: null,
    direction: ''
  };

  render() {
    const { status, coords, direction } = this.state;

    if (status === null) {
      return <ActivityIndicator style={{ marginTop: 30 }} />;
    }

    if (status === 'denied') {
      <View>
        <Text>Denied</Text>
      </View>;
    }

    if (status === 'undetermined') {
      <View>
        <Text>Undetermined</Text>
      </View>;
    }

    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(state)}</Text>
      </View>
    );
  }
}
