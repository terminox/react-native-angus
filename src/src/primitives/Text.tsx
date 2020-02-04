import React from 'react'
import { View, Platform, MaskedViewIOS } from 'react-native'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import Font, { FontSize, FontWeight } from './Font'
import { Color, Gradient, ColorScheme, GradientScheme } from './Color'
import { HStack } from './Stack'

// MARK: - Base
const Text = styled.Text`
  font-family: ${Font.default};
  color: ${Color(ColorScheme.labelPrimary)};
`

// MARK: - Interfaces
interface TextProps {
  children: string
}

// MARK: - Main
const boldFontWeight = Platform.select({
  ios: FontWeight.bold,
  android: FontWeight.normal
})

const ExtraLargeTitle = styled(Text)`
  font-size: ${FontSize.xxl}px;
  font-weight: ${boldFontWeight};
  color: ${Color(ColorScheme.titlePrimary)};
`

export const PrimaryTitle: React.SFC<TextProps> = props => {
  const { children } = props
  const { colors, locations, angle } = Gradient(GradientScheme.labelGradient)

  if (Platform.OS === 'android') {
    return <ExtraLargeTitle>{children}</ExtraLargeTitle>
  }

  return (
    <HStack justifyContent="space-between">
      <MaskedViewIOS maskElement={<ExtraLargeTitle>{children}</ExtraLargeTitle>}>
        <LinearGradient colors={colors ?? []} locations={locations} angle={angle}>
          <ExtraLargeTitle style={{ opacity: 0 }}>{children}</ExtraLargeTitle>
        </LinearGradient>
      </MaskedViewIOS>

      {/* Use an empty view to make gradient view wrap to text */}
      <View />
    </HStack>
  )
}

export const LargeTitle = styled(Text)`
  font-size: ${FontSize.xl}px;
  font-weight: ${boldFontWeight};
`

export const Title = styled(Text)`
  font-size: ${FontSize.l}px;
  font-weight: ${boldFontWeight};
`

export const Headline = styled(Text)`
  font-size: ${FontSize.m}px;
`

export const Subheadline = styled(Text)`
  font-size: ${FontSize.s}px;
  color: ${Color(ColorScheme.labelSecondary)};
`

export const Body = styled(Text)`
  font-size: ${FontSize.m}px;
`

export const Callout = styled(Text)`
  font-size: ${FontSize.m}px;
`

export const Caption = styled(Text)`
  font-size: ${FontSize.xs}px;
`

export const Footnote = styled(Text)`
  font-size: ${FontSize.xxs}px;
`
