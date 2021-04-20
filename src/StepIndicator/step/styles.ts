import styled from 'rn-css';
import { Animated } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  background-color: #fff;
  justify-content: space-between;
`;

export const Content = styled(Animated.View)`
  position: absolute;
  align-self: center;
  margin-left: 10px;
  height: 5px;
  background-color: #bc8242;
`;
