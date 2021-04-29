import * as React from 'react'
import { View } from 'react-native'

import { FormProps } from './types'
import styles from './Form.style'

const cloneChildWithDefaultProps: React.ReactElement = (
  child: React.ReactElement<any>,
  { control, errors }
) => {
  const { name } = child.props
  const newProps = {
    key: name,
    control,
    error: errors[name],
    ...child.props,
  }

  return React.cloneElement(child, newProps)
}


// const focusOnNextField = (refIndex, formFieldRefs) => {
//   const curFormFieldRef = formFieldRefs.current[refIndex]
//   let nextFormFieldRef = null
//   // only move to the next field if it is the last
//   if (formFieldRefs.current.length - 1 < refIndex) {
//     nextFormFieldRef = formFieldRefs.current[refIndex + 1]
//   }
//   if (nextFormFieldRef) {
//     nextFormFieldRef.focus()
//   } else {
//     curFormFieldRef.blur()
//   }
// }

export const Form = ({
  control,
  register,
  errors,
  validation,
  children,
}: FormProps): React.ReactElement | null => {
  let formChildren = children

  if (!children) return null

  if (!Array.isArray(children)) {
    formChildren = [children]
  }

  React.useEffect(() => {
    formChildren.forEach(child => {
      const { name } = child.props
      if (name) register({ name }, validation[name])
    })
  }, [register])

  return (
    <View style={styles.container}>
      {formChildren.map((child) => {
        // the child is created by jsx
        // clone the child and add default props
        if (child.props.name) {
          return cloneChildWithDefaultProps(child, {
            control,
            errors,
          })
        }

        // leave as is if not a form input
        return child
      })}
    </View>
  )
}
