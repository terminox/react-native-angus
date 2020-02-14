import styled from 'styled-components/native'

import { Color, Spacing } from '../primitives'

// MARK: - Main
export const LineSeparator = styled.View`
  height: 1px;
  background-color: ${Color(Color.Scheme.separatorSecondary)};
  margin-horizontal: ${Spacing.semiLarge}px;
`

export const SpaceSeparator = styled.View`
  height: ${Spacing.medium};
`
