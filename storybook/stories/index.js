import React from 'react'
import { Text, View, ScrollView, Platform } from 'react-native'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Welcome from './Welcome'
import Button from './Button'
import CenterView from './CenterView'
import Angus from '../../src'

const {
  // Primitive
  Color,
  Gradient,
  Font,
  FontSize,
  FontWeight,
  Spacing,
  Spacer,
  applyHSpacer,
  applyVSpacer,
  HStack,
  VStack,
  PrimaryTitle,
  LargeTitle,
  Title,
  Headline,
  Subheadline,
  Body,
  Callout,
  Caption,
  Footnote,
  // Components
  PrimaryBackground,
  SecondaryBackground,
  TertiaryBackground,
  PrimaryButton,
  LinkButton,
  ListItem,
  DataListItem,
  InstructionListItem,
  Paragraph,
  SafeAreaView,
  PrimaryScreenHeader,
  ScreenHeader,
  TextInput,
  LineSeparator,
  SpaceSeparator,
  SectionHeader,
  Camera,
  CardCaptureGuideline,
  SelfieCaptureGuideline,
  GradientText,
  GradientBackground
} = Angus

const GroupView = styled.View`
  flex: 1;
`

const GroupCenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ColorItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
`
const ColorBox = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor };
`
const ColorText = styled.Text`
  margin-left: 14px;
`
const ColorItem = ({ color, name }) => (
  <ColorItemContainer>
    <ColorBox backgroundColor={color} />
      <ColorText>
        {name}
      </ColorText>
  </ColorItemContainer>
)

storiesOf('Welcome', module).add('to Angus', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Primitive', module)
  .add('Typography', () => (
    <GroupCenterView>
      <PrimaryTitle>PrimaryTitle</PrimaryTitle>
      <LargeTitle>LargeTitle</LargeTitle>
      <Title>Title</Title>
      <Headline>Headline</Headline>
      <Subheadline>Subheadline</Subheadline>
      <Body>Body</Body>
      <Callout>Callout</Callout>
      <Caption>Caption</Caption>
      <Footnote>Footnote</Footnote>
    </GroupCenterView>
  ))
  .add('Color Palette', () => (
    <ScrollView>
      <ColorItem color={Color.Palette.caribbeanGreen} name='caribbeanGreen' />
      <ColorItem color={Color.Palette.black} name='black' />
      <ColorItem color={Color.Palette.white} name='white' />
      <ColorItem color={Color.Palette.baliHai} name='baliHai' />
      <ColorItem color={Color.Palette.pickledBluewood} name='pickledBluewood' />
      <ColorItem color={Color.Palette.geyser} name='geyser' />
      <ColorItem color={Color.Palette.lightGray} name='lightGray' />
      <ColorItem color={Color.Palette.bitterSweet} name='bitterSweet' />
      <ColorItem color={Color.Palette.jittaBlue} name='jittaBlue' />
      <ColorItem color={Color.Palette.selectiveYellow} name='selectiveYellow' />
    </ScrollView>
  ))
  .add('Color Scheme', () => (
    <ScrollView>
      <ColorItem color={Color(Color.Scheme.titlePrimary)} name='titlePrimary' />
      <ColorItem color={Color(Color.Scheme.labelPrimary)} name='labelPrimary' />
      <ColorItem color={Color(Color.Scheme.labelSecondary)} name='labelSecondary' />
      <ColorItem color={Color(Color.Scheme.labelTertiary)} name='labelTertiary' />
      <ColorItem color={Color(Color.Scheme.labelPositive)} name='labelPositive' />
      <ColorItem color={Color(Color.Scheme.labelNegative)} name='labelNegative' />
      <ColorItem color={Color(Color.Scheme.textFieldPrimary)} name='textFieldPrimary' />
      <ColorItem color={Color(Color.Scheme.textFieldPositive)} name='textFieldPositive' />
      <ColorItem color={Color(Color.Scheme.textFieldNegative)} name='textFieldNegative' />
      <ColorItem color={Color(Color.Scheme.placeholder)} name='placeholder' />
      <ColorItem color={Color(Color.Scheme.separatorPrimary)} name='separatorPrimary' />
      <ColorItem color={Color(Color.Scheme.separatorSecondary)} name='separatorSecondary' />
      <ColorItem color={Color(Color.Scheme.tintPrimary)} name='tintPrimary' />
      <ColorItem color={Color(Color.Scheme.tintPositive)} name='tintPositive' />
      <ColorItem color={Color(Color.Scheme.tintNegative)} name='tintNegative' />
      <ColorItem color={Color(Color.Scheme.backgroundPrimary)} name='backgroundPrimary' />
      <ColorItem color={Color(Color.Scheme.backgroundSecondary)} name='backgroundSecondary' />
      <ColorItem color={Color(Color.Scheme.backgroundTertiary)} name='backgroundTertiary' />
      <ColorItem color={Color(Color.Scheme.buttonBackgroundPrimary)} name='buttonBackgroundPrimary' />
      <ColorItem color={Color(Color.Scheme.linkPrimary)} name='linkPrimary' />
      <ColorItem color={Color(Color.Scheme.cameraBackground)} name='cameraBackground' />
      <ColorItem color={Color(Color.Scheme.cameraButton)} name='cameraButton' />
    </ScrollView>
  ))

storiesOf('Component')
  .add('Button', () => (
    <GroupCenterView>
      <PrimaryButton>
        PrimaryButton
      </PrimaryButton>
      <LinkButton>
        LinkButton
      </LinkButton>
    </GroupCenterView>
  ))
  .add('Gradient', () => (
    <GroupView>
      {
        Platform.OS === 'ios' && (
          <GroupCenterView>
            <GradientText>
              <Body>This is {`<Text/> Component`} Gradient</Body>
            </GradientText>
          </GroupCenterView> 
        )
      }
      <GradientBackground>
        <Body>This is Background Gradient</Body>
      </GradientBackground>
    </GroupView>
  ))
  .add('Background', () => (
    <GroupView>
      <PrimaryBackground>
        <Body>This is child of PrimaryBackground</Body>
      </PrimaryBackground>
      <SecondaryBackground>
        <Body>This is child of SecondaryBackground</Body>
      </SecondaryBackground>
      <TertiaryBackground>
        <Body>This is child of TertiaryBackground</Body>
      </TertiaryBackground>
    </GroupView>
  ))
  .add('Screen Header', () => (
    <GroupView>
      <PrimaryScreenHeader title="PrimaryScreenHeader" subtitle="with subtitle" />
      <PrimaryScreenHeader title="PrimaryScreenHeader" />
      <ScreenHeader title="ScreenHeader" subtitle="with subtitle" />
      <ScreenHeader title="ScreenHeader" />
    </GroupView>
  ))
  .add('Separator', () => (
    <GroupView>
      <Body>This is LineSeparator</Body>
      <LineSeparator />
      <Body>This is LineSeparator</Body>
      <LineSeparator />
      <Body>This is SpaceSeparator</Body>
      <SpaceSeparator />
      <Body>This is SpaceSeparator</Body>
      <SpaceSeparator />
    </GroupView>
  ))
  .add('SectionHeader', () => (
    <SectionHeader section={{ title: 'Title of SectionHeader' }} />
  ))
  .add('ListItem', () => (
    <ScrollView>
      <ListItem
        title='Title'
        subtitle='subtitle'
        leadingElement={<Ionicons name='ios-add-circle' size={20} />}
        trailingElement={<Ionicons name='ios-arrow-forward' size={20} />}
      />
      <ListItem
        title='Title'
        leadingElement={<Ionicons name='ios-add-circle' size={20} />}
        trailingElement={<Ionicons name='ios-arrow-forward' size={20} />}
      />
      <ListItem
        title='Title'
        subtitle='subtitle'
        leadingElement={<Ionicons name='ios-add-circle' size={20} />}
      />
      <ListItem
        title='Title'
        leadingElement={<Ionicons name='ios-add-circle' size={20} />}
      />
      <ListItem
        title='Title'
        subtitle='subtitle'
        trailingElement={<Ionicons name='ios-arrow-forward' size={20} />}
      />
      <ListItem
        title='Title'
        trailingElement={<Ionicons name='ios-arrow-forward' size={20} />}
      />
      <ListItem
        title='Title'
        subtitle='subtitle'
      />
      <ListItem
        title='Title'
      />
    </ScrollView>
  ))
  .add('DataListItem', () => (
    <ScrollView>
      <DataListItem
        title='Title'
        subtitle='subtitle'
        actionTitle='Press'
        action={() => {}} 
      />
      <DataListItem
        title='Title'
        subtitle='subtitle'
      />
    </ScrollView>
  ))
  .add('InstructionListItem', () => (
    <ScrollView>
      <InstructionListItem
        title='Title'
        description='Description'
      />
    </ScrollView>
  ))
  .add('Paragraph', () => (
    <GroupView>
      <Paragraph>
        This is a Paragraph contain a very very long text xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </Paragraph>
    </GroupView>
  ))
  .add('TextInput', () => (
    <GroupView>
      <TextInput placeholder="This is TextInput"/>
    </GroupView>
  ))