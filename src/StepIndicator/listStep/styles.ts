import styled from 'rn-css';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ICheck {
  active?: boolean;
  passed?: boolean;
}

export const Container = styled.View`
  margin-right: 25px;
`;

export const Check = styled.View<ICheck>`
  position: absolute;
  margin-left: 10px;
  width: ${p => (p.passed ? '30px' : '20px')};
  height: ${p => (p.passed ? '30px' : '20px')};
  justify-content: center;
  align-items: center;
  border-radius: ${p => (p.passed ? '30px' : '10px')};
  top: ${p => (p.passed ? '-5px' : '0px')};
  left: -10px;
  background-color: #bc8242;
`;

export const ProgressCheck = styled(Icon)<ICheck>`
  font-size: ${p => (p.active ? '20px' : '16px')};
  background-color: transparent;
  border-radius: 10px;
  color: ${p => (p.active ? '#fff' : p.passed ? '#fff' : '#ccc')};
`;

export const Text = styled.Text``;
