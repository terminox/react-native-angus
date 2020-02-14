import React from 'react'

import { VStack, Headline, Caption } from '../primitives'
import { LinkButton, ListItemContainer } from '../components'

// MARK: - Interfaces
interface DataListItemProps {
  title: string
  subtitle: string
  actionTitle?: string
  action?: () => void
}

// MARK: - Main
const DataListItem: React.FC<DataListItemProps> = props => {
  const { title, subtitle, actionTitle, action } = props

  return (
    <ListItemContainer>
      <VStack>
        <Caption>{subtitle}</Caption>
        <Headline>{title}</Headline>
      </VStack>

      {actionTitle && action && (
        <LinkButton onPress={action}>
          {actionTitle}
        </LinkButton>
      )}
    </ListItemContainer>
  )
}

export default DataListItem
