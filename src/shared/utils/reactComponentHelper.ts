import React from 'react'

export function isClassComponent(component: any): boolean {
  return (
      typeof component === 'function' &&
      !!component.prototype.isReactComponent
  )
}

export function isFunctionComponent(component: any): boolean {
  return (
      typeof component === 'function' &&
      String(component).includes('return React.createElement')
  )
}

export function isReactComponent(component: any): boolean {
  return (
      isClassComponent(component) ||
      isFunctionComponent(component)
  )
}

export function isElement(element: any): boolean {
  return React.isValidElement(element);
}

export function isDOMTypeElement(element: any): boolean {
  return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element: any): boolean {
  return isElement(element) && typeof element.type === 'function';
}
