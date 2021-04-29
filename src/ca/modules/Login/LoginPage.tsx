import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { get, isEqual } from 'lodash'
import { useForm } from 'react-hook-form'

import { RootState } from 'CaAppTypes'
import { LoginParams } from 'LoginModuleTypes'

import { Form, TextInputField } from '@lineapp-components/Form'
import { VALID_EMAIL_REGEX, REMOVE_FIREBASE_ERROR_TYPE } from '@lineapp-utils/validation'
import { Button } from '@lineapp-components/Buttons/Button'
import { t } from '@lineapp-utils/localize'
import { ParamList } from '@lineapp-ca-navigations/Auth.types'

import { actions, selectors } from './state'

import { styles } from './LoginPage.style'

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: selectors.getIsLoggedIn(state),
  errorMessages: selectors.getError(state)
})
  
const dispatchProps = {
  login: actions.loginAsync.request,
}

const navProps = (props: AuthNavParmProps<'Register'>) => ({
  navigation: props.navigation,
  route: props.route
})
  
type LoginPageProps  = ReturnType<typeof mapStateToProps> & typeof dispatchProps & ReturnType<typeof navProps>

export const LoginPage: React.FC<ParamList> = (props: LoginPageProps) => {
  
  const { login, errorMessages, navigation } = props
  const { register, errors, control, handleSubmit  } = useForm<FormData>({})

  const validation = {
    username: { 
      required: { value: true, message: t('validation.requiredField', { fieldName: t('login.email') }) },
      pattern: { value: VALID_EMAIL_REGEX, message: t('login.email') } 
    },
    password: { required: { value: true, message: t('validation.requiredField', { fieldName: t('login.password') }) } },
  }

  const onSubmit = (data: LoginParams) => {
    login(data)
  }

  const onError = (formErrors: FormErrors<LoginParams>) => {
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
                <Text style={styles.pageTitle}>{t('login.pageTitle')}</Text>
                <Text style={styles.appName}> {t('app')}</Text>
                <Text style={styles.pageSubTitle}>{t('login.pageSubTitle')}</Text>
            </View>
            <Form {...{ register, control, validation, errors }}>
                <TextInputField name="email" label={t('login.email')} editable={true} keyboardType={'email-address'}/>
                <TextInputField name="password" label={t('login.password')} secureTextEntry={true} editable={true} blurOnSubmit={false}/>
                <View style={styles.errorView}>
                  <Text style={styles.errorText}>{errorMessages? errorMessages.replace(REMOVE_FIREBASE_ERROR_TYPE, '') : null}</Text>
                </View>
                <View style={styles.bottonView}>
                    <Button
                        content={t('login.loginButton')}
                        onPress={handleSubmit(onSubmit, onError) }
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
                    content={<Text style={styles.signupSubText}>{t('login.loginNoAccount')}</Text>}
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );
}

export const LoginPageReduxed = connect(
    mapStateToProps,
    dispatchProps
)(LoginPage)