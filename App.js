import React from 'react';
import {Text, View} from 'react-native';

const Name = () => <Text>SERMAD AHMAD</Text>;

const App = () => {
  
      const items = Array.from({ length: 10 });

  return (
      <View>
        {items.map((_, i) => (
        <Name key = {i} />
    ))}
      </View>
  );
};

export default App;