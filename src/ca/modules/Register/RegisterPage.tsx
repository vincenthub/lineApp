import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { get, isEqual } from 'lodash'
import { useForm } from 'react-hook-form'

import { RootState } from 'CaAppTypes'
import { RegisterParams } from 'RegisterModuleTypes'

import { Form, TextInputField } from '@lineapp-components/Form'
import { VALID_EMAIL_REGEX, REMOVE_FIREBASE_ERROR_TYPE } from '@lineapp-utils/validation'
import { Button } from '@lineapp-components/Buttons/Button'
import { t } from '@lineapp-utils/localize'
import { AuthNavParmProps } from '@lineapp-ca-navigations/Auth.types'

import { actions, selectors } from './state'

import { styles } from './Register.style'

const mapStateToProps = (state: RootState) => ({
  isLoading: selectors.getLoading(state),
  errorMessages: selectors.getError(state),
  user: selectors.getIsRegisterIn(state)
})
  
const dispatchProps = {
  registerUser: actions.registerAsync.request
}

const navProps = (props: AuthNavParmProps<'Register'>) => ({
  navigation: props.navigation,
  route: props.route
})
  
type RegisterPageProps  = ReturnType<typeof mapStateToProps> & typeof dispatchProps & ReturnType<typeof navProps>

export const RegisterPage: React.FC<{}> = (props: RegisterPageProps) => {
  
  const { isLoading, errorMessages, registerUser, navigation } = props
  const { register, errors, control, handleSubmit  } = useForm<RegisterParams>({})


  const validation = {
    username: { 
      required: { value: true, message: t('validation.requiredField', { fieldName: t('login.username') }) },
      pattern: { value: VALID_EMAIL_REGEX, message: t('login.usernameEmail') } 
    },
    password: { required: { value: true, message: t('validation.requiredField', { fieldName: t('login.password') }) } },
  }

  const onSubmit = (data: RegisterParams) => {
    registerUser(data)
  }

  const onError = (formErrors: FormErrors<RegisterParams>) => {
    const errorKeys: string [] = Object.keys(formErrors)
    const firstErrorKey: string = get(errorKeys, '[0]')
    const firstError = get(formErrors, firstErrorKey)
    if (firstError) {
    //   showError({ message: firstError.message })
    }
  }

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.pageTitle}>{t('register.pageTitle')}</Text>
            </View>
            <Form {...{ register, control, validation, errors }}>
              <TextInputField name="email" label={t('register.email')} editable={true} keyboardType={'email-address'}/>
              <TextInputField name="password" label={t('register.password')} secureTextEntry={true} editable={true} blurOnSubmit={false}/>
              <View style={styles.errorView}>
                <Text style={styles.errorText}>{errorMessages? errorMessages.replace(REMOVE_FIREBASE_ERROR_TYPE, '') : null}</Text>
              </View>
              <View style={styles.bottonView}>
                <Button
                    content={t('register.signupButton')}
                    onPress={handleSubmit(onSubmit, onError)}
                    stretched
                />
              </View>
            </Form>
            <View style={styles.signupView}>
                <Button
                    variant={'LATransparentBoldSmallDarkButton'}
                    disabled={false}
                    left={null}
                    right={null}
                    content={<Text style={styles.signupSubText}>{t('register.haveAccount')}</Text>}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}

export const RegisterPageReduxed = connect(
    mapStateToProps,
    dispatchProps
)(RegisterPage)