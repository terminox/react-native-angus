import React, { ReactElement, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Icon } from 'react-native-elements'
import styled from 'styled-components/native'

import { Color, VStack, HStack, Spacing, Spacer } from '../../primitives'
import { SafeAreaView } from '../../components'

// MARK: - Interfaces
interface CameraProps {
  children?: ReactElement
  ref?: React.LegacyRef<RNCamera>
  onCapture?: () => void
}

// MARK: - Main
const Camera: React.FC<CameraProps> = props => {
  const { children, ref, onCapture } = props

  const [isFlashOn, setIsFlashOn] = useState<boolean>(false)
  const flashMode = isFlashOn ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off
  const flashIconName = `ios-flash${isFlashOn ? '' : '-off'}`

  const onPressFlashIcon = (): void => {
    setIsFlashOn(!isFlashOn)
  }

  return (
    <SafeAreaView
      forceInset={{ top: 'never' }}
      style={{ backgroundColor: Color(Color.Scheme.cameraBackground) }}>
      <RNCamera
        ref={ref}
        flashMode={flashMode}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        style={{ height: '100%' }}>
        <VStack justifyContent="flex-end" style={{ height: '100%' }}>
          {children ?? <View />}

          <FooterContainer alignItems="center" justifyContent="center">
            <Spacer />

            <ShutterButtonOuter>
              <ShutterButtonInner>
                <ShutterButton onPress={onCapture} />
              </ShutterButtonInner>
            </ShutterButtonOuter>

            <TouchableOpacity onPress={onPressFlashIcon} style={{ flex: 1 }}>
              <Icon name={flashIconName} color="white" type="ionicon" />
            </TouchableOpacity>
          </FooterContainer>
        </VStack>
      </RNCamera>
    </SafeAreaView>
  )
}

export default Camera

// MARK: - Components
const FooterContainer = styled(HStack)`
  padding-vertical: ${Spacing.medium};
  width: 100%;
  background-color: ${Color(Color.Scheme.cameraBackground)};
`

const ShutterButtonOuter = styled.View`
  background-color: ${Color(Color.Scheme.cameraButton)};
  width: 74px;
  border-radius: 37px;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
`

const ShutterButtonInner = styled.View`
  background-color: ${Color(Color.Scheme.cameraBackground)};
  width: 62px;
  border-radius: 31px;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
`

const ShutterButton = styled.TouchableOpacity`
  background-color: ${Color(Color.Scheme.cameraButton)};
  width: 56px;
  border-radius: 28px;
  aspect-ratio: 1;
`
