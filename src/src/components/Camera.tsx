import React, { ReactElement } from 'react'
import { View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import styled from 'styled-components/native'

import { Color, ColorScheme } from '../primitives'
import { SafeAreaView } from '../components'

// MARK: - Interfaces
interface CameraProps {
  children?: ReactElement
  ref?: React.LegacyRef<RNCamera>
}

// MARK: - Main
const Camera: React.FC<CameraProps> = props => {
  const { children, ref } = props

  return (
    <SafeAreaView style={{ backgroundColor: Color(ColorScheme.cameraBackground) }}>
      <RNCamera ref={ref}>
        {children ?? <View />}  
      </RNCamera>

      <FooterContainer>
        <ShutterButtonContainer>
          <ShutterButton />
        </ShutterButtonContainer>

        {/* <FlashButtonContainer>
          <FlashButton />
        </FlashButtonContainer> */}
      </FooterContainer>
    </SafeAreaView>
  )
}

export default Camera

// MARK: - Components
const FooterContainer = styled.View`
  height: 15%;
  background-color: ${Color(ColorScheme.cameraBackground)};
  align-items: center;
  justify-content: center;
`

const ShutterButtonContainer = styled.View`
  border-width: 3px;
  border-color: ${Color(ColorScheme.cameraButton)};
  padding: 2px;
  height: 90%;
  max-height: 80px;
  aspect-ratio: 1;
  border-radius: 100;
  align-items: center;
  justify-content: center;
`

const ShutterButton = styled.TouchableOpacity`
  background-color: ${Color(ColorScheme.cameraButton)};
  borderRadius: 100px;
  max-height: 75px;
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
`

const FlashButtonContainer = styled.View``

const FlashButton = styled.TouchableOpacity``