
export type ButtonVariant = 'TMPrimaryLightButton'
  | 'LAPrimaryBoldTextLightButton'
  | 'LASecondaryLightButton'
  | 'LASecondaryBoldTextLightButton'
  | 'LATransparentLightButton'
  | 'LATransparentDarkButton'
  | 'LATransparentBoldLightButton'
  | 'LATransparentBoldSmallDarkButton'
  | 'LATransparentBoldSmallLightButton'
  | 'LATransparentBoldDarkButton'
  | 'LATransparentMediumBoldDarkButton'
  | 'LATransparentMediumDarkButton'
  | 'LATransparentIconButton'
  | 'LASmallBoldRedButton'
  | 'LASmallBoldBlueGreenButton'
  | 'LASmallBoldSecondaryButton'
  | 'LATabIconButton'
  | 'LARatingTabIconButton'
  | 'LAFacebookButton'

export type ButtonProps = {
  variant: ButtonVariant;
  text: string;
  onPress?: () => void;
  disabled?: boolean;
}

