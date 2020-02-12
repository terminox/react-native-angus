import React, { ReactElement } from 'react'
import { View } from 'react-native'

import { HStack, VStack, Headline, Caption, applyHSpacer, Spacing } from '../primitives'
import { ListItemContainer } from '../components'

// MARK: - Interfaces
interface ListItemProps {
  title: string
  subtitle?: string
  leadingElement?: ReactElement
  trailingElement?: ReactElement
  action?(): void
}

// MARK: - Main
const ListItem: React.FC<ListItemProps> = props => {
  const { title, subtitle, leadingElement, trailingElement } = props
  const leadingSpacing = leadingElement ? Spacing.medium : Spacing.zero
  const trailingSpacing = trailingElement ? Spacing.medium : Spacing.zero

  return (
    <ListItemContainer>
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
    </ListItemContainer>
  )
}

export default ListItem
