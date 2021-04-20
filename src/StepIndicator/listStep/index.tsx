import React from 'react';

import { Container, Check, ProgressCheck, Text } from './styles';
import { IStepPreferences } from '../step';

interface IProps {
  active: boolean;
  passed: boolean;
  itemPref?: IStepPreferences;
}

const ListStep = ({ active, itemPref, passed }: IProps) => {
  return (
    <Container>
      <Check
        style={{ backgroundColor: itemPref?.colorPoint ?? '#bc8242' }}
        passed={passed}
      >
        {passed && (
          <ProgressCheck
            style={{ color: itemPref?.iconColor ?? '#fff' }}
            name={active ? 'dot-circle-o' : 'check'}
            active={active}
            passed={passed}
          />
        )}
      </Check>
      <Text>.</Text>
    </Container>
  );
};

export default ListStep;
