<h1 align="center">React Native Step</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/fera765/react-native-step?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/fera765/react-native-step?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/fera765/react-native-step?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/fera765/react-native-step?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/fera765/react-native-step?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/fera765/react-native-step?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/fera765/react-native-step?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  React Native Step 🚀 Em construção...  🚧
</h4>

<hr> -->



<p align="center">
  <a href="#wrench-installation">Installation</a> &#xa0; | &#xa0;
  <a href="#sparkles-functionalities">Functionalities</a> &#xa0; | &#xa0;
  <a href="#blush-simple-documentation">Documentation</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="#rocket-technology">Technology</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765" target="_blank">Autor</a>
  &#xa0; | &#xa0;
  <a href="https://github.com/fera765/react-native-step/exemple" target="_blank">Demo</a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/fera765/react-native-step/main/demo/exemplo.gif" />
</p>

<br>

## :wrench: Installation ##


```bash
# Install React Native Step

yarn add react-native-step

# or if you prefer

npm install react-native-step



# Install React Native Vector Icons

yarn add react-native-vector-icons

# or if you prefer

npm install react-native-vector-icons

# Any problem with icons, try to link
react-native link react-native-vector-icons
# or
npx react-native link react-native-vector-icons

```

## :sparkles: Functionalities ##

:heavy_check_mark: Creating simple step navigation.

## :blush: Simple documentation ##

```ts
  // The color of the step indicator
  colorPoint: string = '#000',

  // Color icon step indicator
  iconColor: string =  '#fff',

```

## :star: Example ##

```tsx
  import React from 'react';
  import StepIndicator, {IStepPreferences} from 'react-native-step';
  const App = () => {
    const pref: IStepPreferences = {
      colorPoint: '#000',
    }
    return (
      <View style={{flex: 1}}>
        <StepIndicator stepIndex={2} stepPreferences={pref}>
          <Preparing />
          <Sending />
          <HasArrived />
          <Finished />
        </StepIndicator>
      </View>
    )
  };

  export default App;
```

## :rocket: Technology ##

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vector Icons](https://www.npmjs.com/package/react-native-vector-icons/)

## :memo: License ##


This project is under MIT license. See the archive [LICENSE](LICENSE.md) for more details.


Done with :heart: per <a href="https://github.com/fera765" target="_blank">Mateus Conceição</a>

&#xa0;

<a href="#top">Back to the top
</a>
