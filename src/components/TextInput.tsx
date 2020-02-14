import React from 'react'
import { TextInputProps } from 'react-native'
import { TextField as RNETextField } from 'react-native-material-textfield'
import styled from 'styled-components/native'

import { Font, FontSize, Color, ColorScheme, Spacing } from '../primitives'

// MARK: - Base
const TextField = styled(RNETextField).attrs({
  containerStyle: {
    width: '100%',
    paddingHorizontal: Spacing.semiLarge,
    // paddingBottom: Spacing.medium
  },
  fontSize: FontSize.s,
  titleFontSize: FontSize.xs,
  labelFontSize: FontSize.xs,
  tintColor: Color(ColorScheme.textFieldPrimary),
  baseColor: Color(ColorScheme.placeholder),
  errorColor: Color(ColorScheme.textFieldNegative),
  textColor: Color(ColorScheme.labelPrimary),
  placeholderTextColor: Color(ColorScheme.placeholder),
  lineWidth: 1,
  disabledLineWidth: 1,
  activeLineWidth: 1,
  labelTextStyle: {
    fontFamily: Font.default
  },
  titleTextStyle: {
    fontFamily: Font.default
  }
})``

const TextInput: React.SFC<TextInputProps> = props => (
  <TextField
    {...props}
  />
)

export default TextInput