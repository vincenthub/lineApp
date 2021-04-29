/**
 * common validation rules
 */
export const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const VALID_PHONE_NUMBER_REGEX = /09\d{9}$/i
export const REMOVE_FIREBASE_ERROR_TYPE = /\[(.*?)\]\s/g
