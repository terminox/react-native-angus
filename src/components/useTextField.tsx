import React, { useRef, ReactElement } from 'react'
import { View } from 'react-native'
import { Field } from 'formik'
import { TextField as RNETextField } from 'react-native-material-textfield'
import styled from 'styled-components/native'

import { Font, FontSize, Color, Spacing } from '../primitives'

// MARK: - Base
const TextField = styled(RNETextField).attrs({
  containerStyle: {
    width: '100%',
    paddingHorizontal: Spacing.semiLarge,
    // paddingBottom: Spacing.medium
  },
  fontSize: FontSize.s,
  titleFontSize: FontSize.xs,
  labelFontSize: FontSize.xs,
  tintColor: Color(Color.Scheme.textFieldPrimary),
  baseColor: Color(Color.Scheme.placeholder),
  errorColor: Color(Color.Scheme.textFieldNegative),
  textColor: Color(Color.Scheme.labelPrimary),
  placeholderTextColor: Color(Color.Scheme.placeholder),
  lineWidth: 1,
  disabledLineWidth: 1,
  activeLineWidth: 1,
  labelTextStyle: {
    fontFamily: Font.default
  },

  titleTextStyle: {
    fontFamily: Font.default
  }
})``

// MARK: - Interfaces
interface FormTextFieldProps {
  name: string
  validate?: () => string
}

interface Status {
  [key: string]: boolean
}

interface FieldProps {
  name: string
  value: string
}

interface FormProps {
  handleChange: (name: string) => void
  handleBlur: (name: string) => void
  errors: Status
  touched: Status
}

interface TextFieldProps {
  field: FieldProps
  form: FormProps
}

// MARK: - Main
const useFormTextField = (): [
  React.FC<FormTextFieldProps>,
  React.MutableRefObject<ReactElement>
] => {
  const fieldRef = useRef<ReactElement>(<View />)
  const FormTextField: React.FC<FormTextFieldProps> = ({ name: fieldName, validate, ...props }) => (
    <Field name={fieldName} validate={validate}>
      {(textFieldProps: TextFieldProps): ReactElement => {
        const {
          field: { name, value },
          form: { handleChange, handleBlur, errors, touched }
        } = textFieldProps
        return (
          <TextField
            ref={fieldRef}
            value={value}
            error={touched[name] && errors[name]}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            {...props}
          />
        )
      }}
    </Field>
  )

  return [FormTextField, fieldRef]
}

export default useFormTextField
