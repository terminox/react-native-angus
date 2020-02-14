import React, { ReactElement, ReactText } from 'react'
import { View, Platform, MaskedViewIOS } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Gradient, HStack } from '../primitives'

interface GradientCompatible {
  colors?: ReactText[]
  locations?: number[]
  angle?: number
}
interface GradientElementProps {
  children: ReactElement
  gradientProps: GradientCompatible
}

export const GradientText : React.SFC<GradientElementProps> = props => {
  const { children, gradientProps } = props
  const { colors, locations, angle } = gradientProps ?? Gradient(Gradient.Scheme.labelGradient)

  if (Platform.OS === 'android') {
    return children
  }

  const cloneChildren = React.cloneElement(children, { style: { opacity: 0 } })

  return (
    <HStack justifyContent="space-between">
      <MaskedViewIOS maskElement={children}>
        <LinearGradient colors={colors ?? []} locations={locations} angle={angle}>
          {cloneChildren}
        </LinearGradient>
      </MaskedViewIOS>

      {/* Use an empty view to make gradient view wrap to text */}
      <View />
    </HStack>
  )
}

export const GradientBackground : React.SFC<GradientElementProps> = props => {
  const { children, gradientProps } = props
  const { colors, locations, angle } = gradientProps ?? Gradient(Gradient.Scheme.backgroundGradient)

  return (
    <LinearGradient style={{ flex: 1 }} colors={colors ?? []} locations={locations} angle={angle}>
      {children}
    </LinearGradient>
  )
}