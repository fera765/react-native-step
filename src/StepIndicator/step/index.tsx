import React, { useState } from 'react';
import { Animated } from 'react-native';
import { Container, Content } from './styles';

import ListStep from '../listStep';

export interface IStepPreferences {
  colorPoint?: string;
  iconColor?: string;
  size?: string;
}

interface IProps {
  countStep: number;
  positionActual: number;
  pref?: IStepPreferences;
}

const Step: React.FC<IProps> = ({ countStep, pref, positionActual }) => {
  const [animation] = useState(new Animated.Value(0));
  const position = positionActual === 0 ? 1 : positionActual + 1;
  const act = Math.abs(120 * ((countStep - position) / countStep) - 97);
  const newValue = act === 0 ? 1 : act;

  Animated.timing(animation, {
    toValue: newValue,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  const styled = animation.interpolate({
    inputRange: [0, newValue],
    outputRange: ['0%', `${Number(newValue)}%`],
  });

  const inputRange = Array(countStep)
    .fill(0)
    .map((_, i) => i / countStep);

  return (
    <Container>
      <Content style={{ width: '100%', backgroundColor: '#ebebeb' }} />
      <Content
        style={{
          width: styled,
          backgroundColor: pref?.colorPoint ?? '#bc8242',
        }}
      />

      {inputRange.map((item, index) => (
        <ListStep
          itemPref={pref}
          key={item}
          passed={index < position}
          active={index === positionActual}
        />
      ))}
    </Container>
  );
};

export default Step;
