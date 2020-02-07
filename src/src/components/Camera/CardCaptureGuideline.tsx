import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { VStack, Spacing, Color, ColorScheme, Callout, applyVSpacer } from '../../primitives'

// MARK: - Interfaces
interface CardCaptureGuidelineProps {
  text: string
}

// MARK: - Main
const CardCaptureGuideline: React.SFC<CardCaptureGuidelineProps> = props => {
  const { text } = props

  return (
    <GuidelineContainer>
      <GuidelineTransformer alignItems="center" justifyContent="center">
        <TextContainer>
          <Callout>{text}</Callout>
        </TextContainer>

        {applyVSpacer(Spacing.medium)}

        <Guideline />
      </GuidelineTransformer>
    </GuidelineContainer>
  )
}

export default CardCaptureGuideline

// MARK: - Components
const GuidelineContainer = styled.View.attrs({
  flex: 1
})`
  align-items: center;
  justify-content: center;
`

const GuidelineTransformer = styled(VStack).attrs(() => {
  const screenSize = Dimensions.get('window')

  return {
    transform: [{ rotate: '90deg' }],
    height: screenSize.width - screenSize.width * 0.15,
    width: screenSize.height * 0.85 - 80 - screenSize.height * 0.27
  }
})`
  padding-bottom: ${Spacing.semiLarge}px;
`

const TextContainer = styled(VStack)`
  background-color: #fff;
  padding-vertical: ${Spacing.small}px;
  padding-horizontal: ${Spacing.medium}px;
  border-radius: 25px;
`

const Guideline = styled.View.attrs({
  flex: 1
})`
  aspect-ratio: 1.6;
  border-color: ${Color(ColorScheme.separatorPrimary)};
  border-width: 2px;
  border-radius: 8px;
  border-style: dashed;
`