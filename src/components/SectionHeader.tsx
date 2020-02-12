import React from 'react'
import styled from 'styled-components/native'

import { Title, Spacing } from '../primitives'

// MARK: - Interfaces
interface SectionProps {
  title: string
}

interface HeaderProps {
  section: SectionProps
}

// MARK: - Main
const SectionHeader: React.SFC<HeaderProps> = ({ section }) => {
  const { title } = section
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default SectionHeader

// MARK: - Components
const Container = styled.View`
  padding-horizontal: ${Spacing.semiLarge};
  padding-top: ${Spacing.semiLarge};
  padding-bottom: ${Spacing.micro};
`
