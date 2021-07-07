import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {makeSignature} from '../../utils/makeSignature';

export const WordCard = props => {
  const {value, handlePress: _handlePress = () => {}} = props ?? {};
  const {text = ''} = value ?? {};

  const [isCorrectState, setCorrectState] = useState(null);

  const valueSignature = makeSignature(value);

  useEffect(() => {
    setCorrectState(null);
  }, [valueSignature]);

  const handlePress = async () => {
    const truth = await _handlePress(value);
    if (truth) {
      setCorrectState(true);
    } else {
      setCorrectState(false);
    }
  };

  const isChosen = isCorrectState !== null;
  const isTrue = isCorrectState === true;

  const outerStyle = Object.assign(
    isChosen
      ? isTrue
        ? {...styles.chosenOuter, backgroundColor: 'blue'}
        : {...styles.chosenOuter, backgroundColor: 'red'}
      : {},
    styles.outer,
  );

  return (
    <Card style={outerStyle} onPress={handlePress}>
      <Card.Content style={styles.container}>
        <Title>{text}</Title>
        <Title>{isTrue ? '1' : '0'}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outer: {
    flex: 1,
    flexBasis: '40%',
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  chosenOuter: {
    borderColor: 'white',
  },
});
