import React from 'react'

import { VStack, Headline, Subheadline, applyHSpacer, Spacing } from '../primitives'
import { ListItemContainer } from '../components'

// MARK: - Interfaces
interface InstructionListItemProps {
  title: string
  description: string
}

// MARK: - Main
const InstructionListItem: React.FC<InstructionListItemProps> = props => {
  const { title, description } = props

  return (
    <ListItemContainer>
      <VStack>
        <Headline>{title}</Headline>
        <Subheadline>{description}</Subheadline>
      </VStack>
    </ListItemContainer>
  )
}

export default InstructionListItem
