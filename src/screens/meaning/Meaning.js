import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {WordCardGroup} from '../../components/WordCard/WordCardGroup';
import {makeRandomString} from '../../utils/makeRandomString';
import {randomChoice} from '../../utils/randomChoice';
import {Button} from "react-native-paper";

const info = 'abc ssh shsh moon'.split(' ').map(x => {
  return {
    text: x.toUpperCase(),
    value: x.toLowerCase(),
  };
});

const renderInfo = {
  info: info,
  answer: info[0].value,
};

const generateSample = () => {
  const data = [...Array(4).keys()]
    .map(_ => makeRandomString(5))
    .map(x => {
      return {
        text: x.toUpperCase(),
        value: x.toLowerCase(),
      };
    });
  const answer = randomChoice(data).value;

  return {
    info: data,
    answer: answer,
  };
};

export const Meaning = () => {
  const [v, setV] = useState(generateSample());
  const next = () => setV(generateSample());

  return (
    <View>
      <Text>{JSON.stringify(v)}</Text>
      <Button onPress={next}>Next</Button>

      <WordCardGroup renderInfo={v} />
    </View>
  );
};
