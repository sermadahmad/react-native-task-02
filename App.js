import React from 'react';
import {Text, View} from 'react-native';

const Name = () => <Text>SERMAD AHMAD</Text>;

const App = () => {
  
      const items = Array.from({ length: 10 });

  return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        {items.map((_, i) => (
        <Name key = {i} />
    ))}
      </View>
  );
};

export default App;
