export interface Colors {
  black: string;
  body: string;
  bodyDisabled: string;
  border: string;
  blue: string;
  description: string;
  green: string;
  label: string;
  orange: string;
  primary: string;
  primaryBackground: string;
  purple: string;
  red: string;
  secondary: string;
  secondaryBackground: string;
  subtitle: string;
  tableBorder: string;
  tertiary: string;
  tertiaryBackground: string;
  title: string;
  white: string;
  yellow: string;
}

export interface GlobalTheme {
  // ---- Animation Time ---- //
  animationTimeVeryFast: number;
  animationTimeFast: number;
  animationTimeMedium: number;
  animationTimeSlow: number;

  // ---- Button ---- //
  buttonBorderRadius: string;
  buttonPadding: string;
  buttonFontWeight: string;
  buttonSmallHeight: string;
  buttonSmallFontSize: string;
  buttonDefaultHeight: string;
  buttonDefaultFontSize: string;
  buttonLargeHeight: string;
  buttonLargeFontSize: string;

  // ---- Primary Button ---- //
  buttonPrimaryBackground: string;
  buttonPrimaryBorder: string;
  buttonPrimaryBorderColor: string;
  buttonPrimaryColor: string;
  buttonPrimaryHoverBackground: string;
  buttonPrimaryHoverColor: string;
  buttonPrimaryActiveBackground: string;
  buttonPrimaryActiveColor: string;

  // ---- Secondary Button ---- //
  buttonSecondaryBackground: string;
  buttonSecondaryBorder: string;
  buttonSecondaryBorderColor: string;
  buttonSecondaryColor: string;
  buttonSecondaryHoverBackground: string;
  buttonSecondaryHoverColor: string;
  buttonSecondaryActiveBackground: string;
  buttonSecondaryActiveColor: string;

  // ---- Tertiary Button ---- //
  buttonTertiaryBackground: string;
  buttonTertiaryBorder: string;
  buttonTertiaryBorderColor: string;
  buttonTertiaryColor: string;
  buttonTertiaryHoverBackground: string;
  buttonTertiaryHoverColor: string;
  buttonTertiaryActiveBackground: string;
  buttonTertiaryActiveColor: string;

  // ---- Danger Button ---- //
  buttonDangerBackground: string;
  buttonDangerBorder: string;
  buttonDangerBorderColor: string;
  buttonDangerColor: string;
  buttonDangerHoverBackground: string;
  buttonDangerHoverColor: string;
  buttonDangerActiveBackground: string;
  buttonDangerActiveColor: string;

  // ---- Ghost Button ---- //
  buttonGhostBackground: string;
  buttonGhostBorder: string;

  // ----- Link Button ---- //
  buttonLinkBackground: string;
  buttonLinkBorder: string;
  buttonLinkBorderColor: string;
  buttonLinkColor: string;
  buttonLinkHoverBackground: string;
  buttonLinkHoverColor: string;
  buttonLinkActiveBackground: string;
  buttonLinkActiveColor: string;

  // ---- Collapse ---- //
  collapseBorder: string;
  collapseBorderColor: string;
  collapseBorderRadius: string;
  collapseBoxShadow: string;
  collapseContentPadding: string;
  collapseContentBackground: string;
  collapseHeaderColor: string;
  collapseHeaderBackground: string;
  collapseHeaderHoverBackground: string;
  collapseHeaderHoverColor: string;
  collapseHeaderOpenBackground: string;
  collapseHeaderOpenColor: string;
  collapseHeaderPadding: string;
  collapseHeaderHeight: string;
  collapseIconSize: string;

  // ---- Divider ---- //
  dividerBorder: string;
  dividerBackground: string;
  dividerTextPrimaryBackground: string;
  dividerTextColor: string;

  // ---- Input ---- //
  inputBackground: string;
  inputBorder: string;
  inputBorderRadius: string;
  inputBorderColor: string;
  inputFocusBorderColor: string;
  inputColor: string;
  inputDefaultHeight: string;
  inputDefaultFontSize: number;
  inputStatusMessageHeight: string;
  inputStatusFontSize: string;
  inputStatusColor: string;
  inputStatusErrorColor: string;
  inputStatusErrorBorderColor: string;
  inputStatusSuccessColor: string;
  inputStatusSuccessBorderColor: string;
  inputStatusLoadingColor: string;
  inputStatusLoadingBorderColor: string;
  inputSmallHeight: string;
  inputSmallFontSize: number;
  inputLargeHeight: string;
  inputLargeFontSize: number;
  inputPadding: string;
  inputTextAreaPadding: string;
  inputPlaceholderColor: string;
  inputPrefixLeft: string;
  inputSuffixRight: string;

  // ---- Layout ---- //
  layoutHeaderHeight: string;
  layoutHeaderPaddingSmall: string;
  layoutHeaderPaddingMedium: string;
  layoutHeaderPaddingLarge: string;
  layoutFooterHeight: string;
  layoutSiderWidthSmall: string;
  layoutSiderWidthMedium: string;
  layoutSiderWidthLarge: string;

  // ---- Media Screen ---- //
  mediaScreenSmall: string;
  mediaScreenMedium: string;
  mediaScreenLarge: string;
  mediaScreenVeryLarge: string;

  // ---- Menu ---- //
  menuItemPadding: string;
  menuItemHoverColor: string;
  menuItemHoverBackground: string;

  // ---- Modal ---- //
  modalBackground: string;
  modalBorder: string;
  modalBorderColor: string;
  modalBorderRadius: string;
  modalBoxShadow: string;
  modalContentPadding: string;
  modalFooterBackground: string;
  modalFooterHeight: string;
  modalFooterPadding: string;
  modalHeaderBackground: string;
  modalHeaderColor: string;
  modalHeaderMarginTop: string;
  modalHeaderPadding: string;
  modalMaskBackground: string;
  modalMinHeight: string;
  modalMinWidth: string;

  // ---- Panel ---- //
  panelBackground: string;
  panelBorder: string;
  panelBorderColor: string;
  panelBorderRadius: string;
  panelPadding: string;
  panelMargin: string;
  panelActiveBoxShadow: string;
  panelHoverBoxShadow: string;

  // ---- Table ---- //
  tableEmptyContainerHeight: string;
  tableHeadCellPadding: string;
  tableHeadBorder: string;
  tableHeadBorderColor: string;
  tableBodyCellPadding: string;
  tableBodyRowBorder: string;
  tableBodyRowBorderColor: string;

  // ---- Tabs ---- //
  tabsInkbarThickness: string;
  tabsItemPadding: string;

  // ---- Typography ---- //
  typographyTitleFontFamily: string;
  typographyTitle1Color: string;
  typographyTitle1FontSize: string;
  typographyTitle1FontWeight: string;
  typographyTitle1LineHeight: string;
  typographyTitle1LetterSpacing: string;

  typographyTitle2Color: string;
  typographyTitle2FontSize: string;
  typographyTitle2FontWeight: string;
  typographyTitle2LineHeight: string;
  typographyTitle2LetterSpacing: string;

  typographyTitle3Color: string;
  typographyTitle3FontSize: string;
  typographyTitle3FontWeight: string;
  typographyTitle3LineHeight: string;
  typographyTitle3LetterSpacing: string;

  typographyTitle4Color: string;
  typographyTitle4FontSize: string;
  typographyTitle4FontWeight: string;
  typographyTitle4LineHeight: string;
  typographyTitle4LetterSpacing: string;

  typographyTitle5Color: string;
  typographyTitle5FontSize: string;
  typographyTitle5FontWeight: string;
  typographyTitle5LineHeight: string;
  typographyTitle5LetterSpacing: string;

  typographyTitle6Color: string;
  typographyTitle6FontSize: string;
  typographyTitle6FontWeight: string;
  typographyTitle6LineHeight: string;
  typographyTitle6LetterSpacing: string;

  typographySubtitleColor: string;
  typographySubtitleFontFamily: string;
  typographySubtitleFontSize: string;
  typographySubtitleFontWeight: string;
  typographySubtitleLineHeight: string;
  typographySubtitleLetterSpacing: string;

  typographyBodyColor: string;
  typographyBodyFontFamily: string;
  typographyBodyFontSize: string;
  typographyBodyFontWeight: string;
  typographyBodyLineHeight: string;
  typographyBodyLetterSpacing: string;
  typographyBodyDisabledColor: string;

  typographyDescriptionColor: string;
  typographyDescriptionFontFamily: string;
  typographyDescriptionFontSize: string;
  typographyDescriptionFontWeight: string;
  typographyDescriptionLineHeight: string;
  typographyDescriptionLetterSpacing: string;

  typographyLabelColor: string;
  typographyLabelFontFamily: string;
  typographyLabelFontSize: string;
  typographyLabelFontWeight: string;
  typographyLabelLineHeight: string;
  typographyLabelLetterSpacing: string;
  typographyLabelTextTransform: string;

  colors: Colors;
}
