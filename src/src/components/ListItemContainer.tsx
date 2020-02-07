import styled from 'styled-components/native'

import { HStack, Spacing } from '../primitives'

const ListItemContainer = styled(HStack).attrs({
  alignItems: 'center',
  justifyContent: 'space-between'
})`
  padding-horizontal: ${Spacing.semiLarge};
  padding-vertical: ${Spacing.small};
`

export default ListItemContainer
