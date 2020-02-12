import styled from 'styled-components/native'

import { Color, ColorScheme, Spacing } from '../primitives'

// MARK: - Main
export const LineSeparator = styled.View`
  height: 1px;
  background-color: ${Color(ColorScheme.separatorSecondary)};
  margin-horizontal: ${Spacing.semiLarge}px;
`

export const SpaceSeparator = styled.View`
  height: ${Spacing.medium};
`
