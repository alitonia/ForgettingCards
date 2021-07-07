import React from 'react';
import {StyleSheet, View} from 'react-native';

export const CardGroup = props => {
  const {component: Component, renderInfo = {}} = props ?? {};
  const {info = [], answer} = renderInfo;

  if (!Component) {
    return <View />;
  }
  const handlePress = v => console.log(v);

  const correctPress = async v => {
    handlePress(v);
    return true;
  };

  const failPress = async v => {
    handlePress(v);
    return false;
  };

  return (
    <View style={styles.container}>
      {info.map((infoBit, index) => {
        const {value} = infoBit;
        const isChosenCard = value === answer;
        const handler = isChosenCard ? correctPress : failPress;

        return <Component value={infoBit} key={index} handlePress={handler} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  smallContainer: {},
});
