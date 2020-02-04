import styled from 'styled-components/native'

import { Color, ColorScheme, VStack } from '../primitives'

export const PrimaryBackground = styled(VStack)`
  flex: 1;
  width: 100%;
  background-color: ${Color(ColorScheme.backgroundPrimary)};
`

export const SecondaryBackground = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Color(ColorScheme.backgroundPrimary)};
`

export const TertiaryBackground = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Color(ColorScheme.backgroundPrimary)};
`
