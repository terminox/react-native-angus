import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

import Angus from '../../src'
const { LargeTitle, ScreenHeader, Camera } = Angus

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));

storiesOf('LargeTitle')
  .add('English', () => (
    <LargeTitle>Welcome to Angus</LargeTitle>
  ))
  .add('Thai', () => (
    <LargeTitle>ยินดีต้อนรับสู่แองกัส</LargeTitle>
  ))

storiesOf('Screen Header')
  .add('Secondary - English', () => (
    <ScreenHeader title="Welcome to Angus" subtitle="The most delicious UIKit on Earth" />
  ))
  .add('Secondary - Thai', () => (
    <ScreenHeader title="พบกับแองกัส" subtitle="UIKit ที่จะทำให้คุณน้ำลายสอ" />
  ))
