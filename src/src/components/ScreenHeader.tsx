import React, { ReactElement } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import {
  VStack,
  HStack,
  applyHSpacer,
  Spacing,
  LargeTitle,
  PrimaryTitle,
  Subheadline
} from '../primitives'

// MARK: - Interfaces
interface ScreenHeaderProps {
  title: string
  subtitle?: string
  leadingElement?: ReactElement
}

export const PrimaryScreenHeader: React.SFC<ScreenHeaderProps> = props => {
  const { title, subtitle, leadingElement } = props
  const leadingSpacing = leadingElement ? Spacing.medium : Spacing.zero

  return (
    <Container>
      {leadingElement ?? <View />}
      {applyHSpacer(leadingSpacing)}

      <VStack>
        <PrimaryTitle>{title}</PrimaryTitle>

        {subtitle ? <Subheadline>{subtitle}</Subheadline> : <View />}
      </VStack>
    </Container>
  )
}

export const ScreenHeader: React.SFC<ScreenHeaderProps> = props => {
  const { title, subtitle, leadingElement } = props
  const leadingSpacing = leadingElement ? Spacing.medium : Spacing.zero

  return (
    <Container>
      {leadingElement ?? <View />}
      {applyHSpacer(leadingSpacing)}

      <VStack>
        <LargeTitle>{title}</LargeTitle>

        {subtitle ? <Subheadline>{subtitle}</Subheadline> : <View />}
      </VStack>
    </Container>
  )
}

// MARK: - Components
const Container = styled(HStack).attrs({
  alignItems: 'center'
})`
  padding-horizontal: ${Spacing.semiLarge};
  padding-vertical: ${Spacing.small};
`
