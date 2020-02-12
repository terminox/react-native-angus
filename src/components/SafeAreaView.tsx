import styled from 'styled-components/native'
import { SafeAreaView as RNSafeAreaView } from 'react-navigation'

// MARK: - Interfaces
interface SafeAreaProps {
  alignItems?: string
  justifyContent?: string
}

// MARK: - Main
const SafeAreaView = styled(RNSafeAreaView).attrs((props: SafeAreaProps): {} => {
  const { alignItems, justifyContent } = props
  return {
    alignItems,
    justifyContent,
    ...props
  }
})`
  flex: 1;
  width: 100%;
`

export default SafeAreaView
