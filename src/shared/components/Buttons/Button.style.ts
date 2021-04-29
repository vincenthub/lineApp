import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { from } from 'rxjs';

const { width } = Dimensions.get('window')
import  { colors } from '@lineapp-themes/Colors'
type Style = {
  container: ViewStyle;
  textStyle: TextStyle;
  selectedContainer: ViewStyle;
  selectedText: TextStyle;
};


const ctextColors = {
  light: colors.whiteColor,
  dark: colors.blackColor,
  mediumDark: colors.blackLighColor
};

const mediumTextStyle = {
  marginHorizontal: 16,
  fontSize: 16,
  textAlign: "center",
  textAlignVertical: "center",
  alignSelf:'stretch',
  justifyContent:'center',
  fontWeight: '500',
} as TextStyle;

const normalTextStyle = {
  marginHorizontal: 16,
  fontSize: 12,
  textAlign: "center",
  width
} as TextStyle;

const normalTextNoWidthStyle = {
  marginHorizontal: 8,
  fontSize: 12,
  textAlign: "center"
} as TextStyle;

const normalTextNoFilterStyle = {
  fontSize: 12,
  textAlign: "center"
} as TextStyle;

const baseContainer = {
  flexDirection: 'row',
  paddingHorizontal: 8,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  height: 48,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  elevation: 2,
} as ViewStyle;

const smallBaseContainer = {
  borderRadius: 2,
  alignItems: "center",
  justifyContent: "center",
  elevation: 0,
  width: 67,
  height: 23
} as ViewStyle;

const transparentBaseBigButtonContainer = {
  marginTop: 16,
  paddingHorizontal: 8,
  alignSelf: "stretch",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: colors.darkBorderColor,
  paddingLeft: 8,
  height: 48,
  elevation: 0
} as ViewStyle;

const transparentBaseContainer = {
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  borderWidth: 1,
  borderColor: colors.borderColor,
  paddingLeft: 8,
  height: 31,
  elevation: 0
} as ViewStyle;

const tabBaseContainer = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 100,
  height: 80,
  elevation: 0
} as ViewStyle;

const ratingTabBaseContainer = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: width / 2 - 45,
  height: 80,
  elevation: 0
} as ViewStyle;

const facebookButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.facebook
  },
  textStyle: {
    ...mediumTextStyle,
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const primaryLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.secondaryColor
  },
  textStyle: {
    ...mediumTextStyle,
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const primaryBoldTextLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.dropDownText
  },
  textStyle: {
    ...mediumTextStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const secondaryLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.blueColor
  },
  textStyle: {
    ...mediumTextStyle,
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const smallBoldSecondaryButton = StyleSheet.create<Style>({
  container: {
    ...smallBaseContainer,
    backgroundColor: colors.blueColor
  },
  textStyle: {
    ...normalTextNoFilterStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const smallBoldRedButton = StyleSheet.create<Style>({
  container: {
    ...smallBaseContainer,
    backgroundColor: colors.redColor
  },
  textStyle: {
    ...normalTextNoFilterStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const smallBoldBlueGreenButton = StyleSheet.create<Style>({
  container: {
    ...smallBaseContainer,
    backgroundColor: colors.blueGreenColor
  },
  textStyle: {
    ...normalTextNoFilterStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const secondaryBoldTextLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.blueColor
  },
  textStyle: {
    ...mediumTextStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const transparentLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...mediumTextStyle,
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const transparentDarkButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...mediumTextStyle,
    fontWeight: "bold",
    color: ctextColors.dark
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const transparentBoldLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...mediumTextStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const transparentBoldSmallDarkButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...normalTextStyle,
    fontWeight: "bold",
    color: ctextColors.dark
  },
  selectedContainer: {
    backgroundColor: colors.transparent
  },
  selectedText: {
    color: ctextColors.dark
  }
});

const transparentBoldSmallLightButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...normalTextStyle,
    fontWeight: "bold",
    color: ctextColors.light
  },
  selectedContainer: {
    backgroundColor: colors.transparent
  },
  selectedText: {
    color: ctextColors.light
  }
});

const transparentBoldDarkButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...mediumTextStyle,
    fontWeight: "bold",
    color: ctextColors.dark
  },
  selectedContainer: {
    backgroundColor: colors.tangerine
  },
  selectedText: {
    color: ctextColors.light
  }
});

const transparentMediumBoldDarkButton = StyleSheet.create<Style>({
  container: {
    ...baseContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...normalTextStyle,
    fontWeight: "bold",
    color: ctextColors.dark
  },
  selectedContainer: {
    ...baseContainer,
    backgroundColor: colors.tangerine
  },
  selectedText: {
    ...normalTextStyle,
    fontWeight: "bold",
    color: ctextColors.light
  }
});

const transparentMediumDarkButton = StyleSheet.create<Style>({
  container: {
    ...transparentBaseBigButtonContainer,
    backgroundColor: colors.transparent
  },
  textStyle: {
    ...mediumTextStyle,
    color: ctextColors.dark
  },
  selectedContainer: {
    ...baseContainer,
    backgroundColor: colors.tangerine
  },
  selectedText: {
    ...normalTextStyle,
    color: ctextColors.light
  }
});

const transparentIconButton = StyleSheet.create<Style>({
  container: {
    ...transparentBaseContainer,
    backgroundColor: colors.borderColor
  },
  textStyle: {
    ...normalTextNoWidthStyle,
    fontWeight: "bold",
    color: ctextColors.dark
  },
  selectedContainer: {
    ...transparentBaseContainer,
    backgroundColor: colors.tangerine
  },
  selectedText: {
    ...normalTextNoWidthStyle,
    fontWeight: "bold",
    color: ctextColors.light
  }
});

const tabIconButton = StyleSheet.create<Style>({
  container: {
    ...tabBaseContainer,
    backgroundColor: colors.bgColor
  },
  textStyle: {
    ...normalTextNoWidthStyle,
    fontWeight: "bold",
    color: ctextColors.mediumDark
  },
  selectedContainer: {
    ...tabBaseContainer,
    backgroundColor: colors.orangeColor
  },
  selectedText: {
    ...normalTextNoWidthStyle,
    fontWeight: "bold",
    color: ctextColors.light
  }
});

const ratingTabIconButton = StyleSheet.create<Style>({
  container: {
    ...ratingTabBaseContainer,
    backgroundColor: colors.mediumColor
  },
  textStyle: {
    ...normalTextNoWidthStyle,
    fontWeight: "bold",
    color: ctextColors.mediumDark
  },
  selectedContainer: {
    ...ratingTabBaseContainer,
    backgroundColor: colors.orangeColor
  },
  selectedText: {
    ...normalTextNoWidthStyle,
    fontWeight: "bold",
    color: ctextColors.light
  }
});

export default function buttonTheme(theme: string): any {
  switch (theme) {
    case "LAFacebookButton":
      return facebookButton;
      break;
    case "LAPrimaryLightButton":
      return primaryLightButton;
      break;
    case "LAPrimaryBoldTextLightButton":
      return primaryBoldTextLightButton;
      break;
    case "LASecondaryLightButton":
      return secondaryLightButton;
      break;
    case 'LASecondaryBoldTextLightButton':
      return secondaryBoldTextLightButton;
      break;
    case "LATransparentLightButton":
      return transparentLightButton;
      break;
    case "LATransparentDarkButton":
      return transparentDarkButton;
      break;
    case "LATransparentBoldLightButton":
      return transparentBoldLightButton;
      break;
    case "LATransparentBoldSmallDarkButton":
      return transparentBoldSmallDarkButton;
      break;
    case "LATransparentBoldSmallLightButton":
      return transparentBoldSmallLightButton;
      break;
    case "LATransparentBoldDarkButton":
      return transparentBoldDarkButton;
      break;
    case "LATransparentMediumBoldDarkButton":
      return transparentMediumBoldDarkButton;
      break;
    case "LATransparentMediumDarkButton":
      return transparentMediumDarkButton;
      break;
    case "LATransparentIconButton":
      return transparentIconButton;
      break;
    case "LASmallBoldRedButton":
      return smallBoldRedButton;
      break;
    case "LASmallBoldBlueGreenButton":
      return smallBoldBlueGreenButton;
      break;
    case "LASmallBoldSecondaryButton":
      return smallBoldSecondaryButton;
      break;
    case "LATabIconButton":
      return tabIconButton;
      break;
    case "LARatingTabIconButton":
      return ratingTabIconButton;
      break;
    default:
      return primaryLightButton;
  }
}
