import styled, { css } from 'styled-components/native'

// MARK: - Interfaces
interface StackProps {
  alignItems?: string
  justifyContent?: string
}

// MARK: - Main
const Stack = styled.View`
  ${(props: StackProps): {} => css`
    align-items: ${props.alignItems ?? 'flex-start'};
    justify-content: ${props.justifyContent ?? 'flex-start'};
  `}
`

export const HStack = styled(Stack)`
  flex-direction: row;
`

export const VStack = styled(Stack)`
  flex-direction: column;
`
