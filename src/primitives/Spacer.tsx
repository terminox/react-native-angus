import React, { ReactElement } from 'react'
import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

const VSpacer = styled.View`
  ${(props: any) => css`
    height: ${props?.height ?? 0}px;
  `}
`

const HSpacer = styled.View`
  ${(props: any) => css`
    width: ${props?.width ?? 0}px;
  `}
`

export const Spacer: React.SFC<{}> = () => {
  return <View style={{ flex: 1 }} />
}

export const applyVSpacer = (height: number): ReactElement => <VSpacer height={height} />
export const applyHSpacer = (width: number): ReactElement => <HSpacer width={width} />
