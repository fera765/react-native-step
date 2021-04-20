import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SafeAreaView,
  useWindowDimensions,
  View,
} from 'react-native';

import StepComponent, { IStepPreferences } from './StepIndicator/step';

interface IStepIndicator extends Element {
  stepIndex: number;
  stepPreferences?: IStepPreferences;
}

const StepIndicator: React.FC<IStepIndicator> = ({
  children,
  stepPreferences,
  stepIndex,
}) => {
  const { width, height } = useWindowDimensions();
  const [positionActual, setPositionActual] = useState(0);

  const positionIndex = useRef(positionActual);
  positionIndex.current = positionActual;

  const childrens =
    React.Children.map(children, item => (
      <View style={{ flex: 1 }}>{item}</View>
    )) ?? [];

  const scroll = useRef<FlatList>(null);

  useEffect(() => {
    setPositionActual(stepIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scroll.current?.scrollToIndex({
      index: stepIndex,
      animated: false,
    });
  }, [stepIndex]);

  const handlePositionScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = nativeEvent.contentOffset.x / width;
    const roundIndex = Math.round(index);

    if (roundIndex !== positionIndex.current) {
      setPositionActual(roundIndex);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StepComponent
        pref={stepPreferences}
        positionActual={positionActual}
        countStep={Number(childrens?.length)}
      />

      <FlatList
        data={childrens}
        ref={scroll}
        horizontal
        pagingEnabled
        keyboardShouldPersistTaps="always"
        scrollEnabled
        keyExtractor={(_, index) => (index + 1).toString()}
        directionalLockEnabled
        contentOffset={{
          x: width * positionActual,
          y: height,
        }}
        overScrollMode="never"
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        snapToInterval={width}
        decelerationRate={1}
        snapToAlignment="start"
        onMomentumScrollEnd={handlePositionScroll}
        getItemLayout={(_, index) => ({
          index,
          length: width,
          offset: width * index,
        })}
        renderItem={({ item }) => {
          return <View>{item}</View>;
        }}
      />
    </SafeAreaView>
  );
};
export { IStepPreferences };
export default StepIndicator;
