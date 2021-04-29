export const logError = (error: Error, params: any): void => {
  // TODO: implement logging to Sentry
  console.error(error,  JSON.stringify(params))
}

export const logInfo = (message: string, params: any): void => {
  // TODO: implement logging to Analytics
  console.info(message, JSON.stringify(params))
}

export const logger = {
  logError,
  logInfo,
}
