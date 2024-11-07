import React from 'react';
import {Text, View} from 'react-native';

const showName = () => {
  return 'SERMAD AHMAD';
};

const App = () => {
  
      const items = Array.from({ length: 10 });

  return (
      <View>
        {items.map((_, i) => (
        <Text key={i}>{showName()}</Text>
    ))}
      </View>
  );
};

export default App;