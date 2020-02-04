import React, { ReactElement } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { HStack, VStack } from '../primitives/Stack'
import { Headline, Caption, applyHSpacer, Spacing } from '../primitives'

// MARK: - Interfaces
interface ListItemProps {
  title: string
  subtitle?: string
  leadingElement?: ReactElement
  trailingElement?: ReactElement
  isEnabled: boolean
  action?(): void
}

// MARK: - Main
const ListItem: React.FC<ListItemProps> = props => {
  const { title, subtitle, leadingElement, trailingElement } = props
  const leadingSpacing = leadingElement ? Spacing.medium : Spacing.zero
  const trailingSpacing = trailingElement ? Spacing.medium : Spacing.zero

  return (
    <Container>
      <HStack alignItems="center">
        {leadingElement ?? <View />}
        {applyHSpacer(leadingSpacing)}

        <VStack>
          <Headline>{title}</Headline>

          {subtitle ? <Caption>{subtitle}</Caption> : <View />}
        </VStack>
      </HStack>

      <HStack alignItems="center" justifyContent="flex-end">
        {applyHSpacer(trailingSpacing)}
        {trailingElement ?? <View />}
      </HStack>
    </Container>
  )
}

export default ListItem

// MARK: - Components
const Container = styled(HStack).attrs({
  alignItems: 'center',
  justifyContent: 'space-between'
})`
  padding-horizontal: ${Spacing.semiLarge};
  padding-vertical: ${Spacing.small};
`
