import React from 'react'
import styled from 'styled-components/native'

import { Color, ColorScheme, applyVSpacer, Spacing } from '../../primitives'

// MARK: - Main
const SelfieCaptureGuideline: React.SFC<{}> = () => {
  return (
    <GuidelineContainer>
      <FaceGuideline />
      {applyVSpacer(Spacing.semiLarge)}
      <CardGuideline />
    </GuidelineContainer>
  )
}

export default SelfieCaptureGuideline

// MARK: - Components
const GuidelineContainer = styled.View.attrs({
  flex: 1
})`
  width: 100%;
  align-items: center;
  justify-content: center;
`

const FaceGuideline = styled.View`
  width: 70%;
  height: 40%;
  border-color: ${Color(ColorScheme.separatorPrimary)};
  border-width: 2px;
  border-radius: 500px;
  border-style: dashed;
  aspect-ratio: 1;
`

const CardGuideline = styled.View`
  width: 80%;
  height: 35%;
  border-color: ${Color(ColorScheme.separatorPrimary)};
  border-width: 2px;
  border-radius: 8px;
  border-style: dashed;
`
