import React, {useState} from 'react';
import {View} from 'react-native';
import StepIndicator, {IStepPreferences} from 'react-native-step';
import {Step, Text} from './styles';

const listStyle: IStepPreferences[] = [
  {
    colorPoint: '#f00',
    iconColor: '#f00',
  },
  {
    colorPoint: '#9159c1',
  },
  {
    colorPoint: '#000',
  },
  {
    colorPoint: '#FF6666',
  },
  {
    colorPoint: '#FF6666',
    iconColor: '#000',
  },
  {
    colorPoint: '#d4a',
    iconColor: '#fff',
  },
];

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [pref, setPref] = useState<IStepPreferences>({
    colorPoint: '#000',
  });

  const handleNewPage = () => {
    var step_id = Math.floor(Math.random() * listStyle.length);
    setPref(listStyle[step_id]);
    setPage(page + 1);
  };

  return (
    <View style={{flex: 1}}>
      <StepIndicator stepIndex={2} stepPreferences={pref}>
        <Step>
          <Text onPress={handleNewPage}>Pagina 01</Text>
        </Step>
        <Step>
          <Text onPress={handleNewPage}>Pagina 02</Text>
        </Step>
        <Step>
          <Text onPress={handleNewPage}>Pagina 03</Text>
        </Step>
        <Step>
          <Text onPress={handleNewPage}>Pagina 04</Text>
        </Step>
        <Step>
          <Text onPress={handleNewPage}>Pagina 05</Text>
        </Step>
      </StepIndicator>
    </View>
  );
};

export default App;
