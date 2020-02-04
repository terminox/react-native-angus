# Angus

## Installation

### NPM
`$ npm install angus`

### Yarn
`$ yarn add angus`


## Viewing Components in Storybook
You might want to view all available components in Angus. We made it available in Storybook!

To view the components, please follow the steps below:

1. Clone the repository

`$ git clone https://github.com/terminox/react-native-angus.git`

2. Install packages / dependencies

`$ npm install`

or

`$ yarn`

3. ***Required** Patch Storybook

At the time of writing, Storybook has an issue with JSON serialization, making viewing components impossible. You only need to modify a line of code to make it work again.

In **path_to_root/node_modules/@storybook/addons/dist/hooks.js**, find this line:

`hooks.currentContext = context;`

Change it to:

`hooks.currentContext = Object.assign({}, context, { hooks: null });`


4. Run the project

At the project root, run:

iOS

`$ npm start ios`

Android

`$ npm start android`

And you're good to go!

## Known Issues
Storybook isn't working well at the time of writing. To view components in Storybook, you need to patch its dependency.

In **path_to_root/node_modules/@storybook/addons/dist/hooks.js**, find this line:

`hooks.currentContext = context;`

Change it to:

`hooks.currentContext = Object.assign({}, context, { hooks: null });`

Then everything should work well.

#### Thanks to https://github.com/storybookjs/react-native/issues/13