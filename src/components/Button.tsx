import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

import { Color, Gradient, ColorScheme, GradientScheme, Font, Spacing, Callout } from '../primitives'

// MARK: - Interfaces
interface ButtonProps {
  children: string
  onPress?: () => void
}

// MARK: - Main
const GradientButton = styled(Button).attrs(() => {
  const ViewComponent = LinearGradient
  const linearGradientProps = Gradient(GradientScheme.buttonBackgroundGradientPrimary)
  const defaultProps = {
    containerStyle: {
      width: '100%',
      backgroundColor: Color(ColorScheme.backgroundPrimary),
      paddingHorizontal: Spacing.semiLarge,
      paddingBottom: Spacing.semiLarge,
      paddingTop: Spacing.medium
    },
    buttonStyle: {
      borderRadius: 3,
      height: 48
    },
    titleStyle: {
      fontFamily: Font.default
    }
  }

  return {
    ViewComponent,
    linearGradientProps,
    ...defaultProps
  }
})``

const LinkText = styled(Callout)`
  color: ${Color(ColorScheme.linkPrimary)};
  text-align: center;
`

export const PrimaryButton: React.SFC<ButtonProps> = props => {
  const { children, onPress } = props
  return <GradientButton title={children} onPress={onPress} />
}

export const LinkButton: React.SFC<ButtonProps> = props => {
  const { children, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <LinkText>{children}</LinkText>
    </TouchableOpacity>
  )
}
