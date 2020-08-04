import { colors } from './colors';

import { Colors, GlobalTheme } from './types';

import { rgba, darken } from 'polished';

export const getDefaultTheme = (themeColors: Colors = colors): GlobalTheme => ({
  // ---- Animation ---- //
  animationTimeVeryFast: 0.1,
  animationTimeFast: 0.25,
  animationTimeMedium: 0.5,
  animationTimeSlow: 1,

  // ---- Badge ---- //
  badgeBackgroundGreen: themeColors.green,
  badgeBackgroundRed: themeColors.red,
  badgeBackgroundYellow: themeColors.yellow,
  badgeBackgroundOrange: themeColors.orange,
  badgeBackgroundPurple: themeColors.purple,
  badgeBackgroundBlue: themeColors.blue,
  badgeBackgroundGray: themeColors.gray,
  badgeTextColorDark: themeColors.label,
  badgeTextColorLight: themeColors.white,

  // ---- Button ---- //
  buttonBorderRadius: '4px',
  buttonPadding: '0px 15px',
  buttonFontWeight: '500',
  buttonSmallHeight: '24px',
  buttonSmallFontSize: '12px',
  buttonDefaultHeight: '32px',
  buttonDefaultFontSize: '14px',
  buttonLargeHeight: '44px',
  buttonLargeFontSize: '16px',

  // ---- Primary Button ---- //
  buttonPrimaryBackground: themeColors.primary,
  buttonPrimaryBorder: '1px solid',
  buttonPrimaryBorderColor: 'transparent',
  buttonPrimaryColor: themeColors.white,
  buttonPrimaryHoverBackground: `${darken(0.1, themeColors.primary)}`,
  buttonPrimaryHoverColor: themeColors.white,
  buttonPrimaryActiveBackground: `${darken(0.1, themeColors.primary)}`,
  buttonPrimaryActiveColor: themeColors.white,

  // ---- Secondary Button ---- //
  buttonSecondaryBackground: themeColors.secondary,
  buttonSecondaryBorder: '1px solid',
  buttonSecondaryBorderColor: 'transparent',
  buttonSecondaryColor: themeColors.white,
  buttonSecondaryHoverBackground: `${darken(0.1, themeColors.secondary)}`,
  buttonSecondaryHoverColor: themeColors.white,
  buttonSecondaryActiveBackground: `${darken(0.1, themeColors.secondary)}`,
  buttonSecondaryActiveColor: themeColors.white,

  // ---- Tertiary Button ---- //
  buttonTertiaryBackground: themeColors.tertiary,
  buttonTertiaryBorder: '1px solid',
  buttonTertiaryBorderColor: 'transparent',
  buttonTertiaryColor: themeColors.black,
  buttonTertiaryHoverBackground: `${darken(0.1, themeColors.tertiary)}`,
  buttonTertiaryHoverColor: themeColors.black,
  buttonTertiaryActiveBackground: `${darken(0.1, themeColors.tertiary)}`,
  buttonTertiaryActiveColor: themeColors.black,

  // ---- Danger Button ---- //
  buttonDangerBackground: themeColors.red,
  buttonDangerBorder: '1px solid',
  buttonDangerBorderColor: 'transparent',
  buttonDangerColor: themeColors.white,
  buttonDangerHoverBackground: `${darken(0.1, themeColors.red)}`,
  buttonDangerHoverColor: themeColors.white,
  buttonDangerActiveBackground: `${darken(0.1, themeColors.red)}`,
  buttonDangerActiveColor: themeColors.white,

  // ---- Ghost Button ---- //
  buttonGhostBackground: themeColors.primaryBackground,
  buttonGhostBorder: '1px solid',

  // ----- Link Button ---- //
  buttonLinkBackground: 'transparent',
  buttonLinkBorder: '1px solid',
  buttonLinkBorderColor: 'transparent',
  buttonLinkColor: themeColors.primary,
  buttonLinkHoverBackground: 'transparent',
  buttonLinkHoverColor: themeColors.secondary,
  buttonLinkActiveBackground: 'transparent',
  buttonLinkActiveColor: themeColors.secondary,

  // ---- Collapse ---- //
  collapseBorder: '1px solid',
  collapseBorderColor: themeColors.border,
  collapseBorderRadius: '4px',
  collapseBoxShadow: 'none',
  collapseContentPadding: '10px',
  collapseContentBackground: themeColors.primaryBackground,
  collapseContentFooterHoverColor: themeColors.tertiaryBackground,
  collapseHeaderColor: themeColors.body,
  collapseHeaderBackground: themeColors.primaryBackground,
  collapseHeaderHoverBackground: themeColors.primary,
  collapseHeaderHoverColor: themeColors.white,
  collapseHeaderOpenBackground: themeColors.primary,
  collapseHeaderOpenColor: themeColors.white,
  collapseHeaderPadding: '0px 15px',
  collapseHeaderHeight: '32px',
  collapseIconSize: '10px',

  // ---- Divider ---- //
  dividerBorder: themeColors.border,
  dividerBackground: themeColors.border,
  dividerTextPrimaryBackground: themeColors.primaryBackground,
  dividerTextColor: themeColors.body,

  // ---- DropPad ---- //
  dropPadPadding: '8px',
  dropPadHoverBackground: `${rgba(themeColors.primary, 0.6)}`,
  dropPadBackground: `${rgba(themeColors.primary, 0.2)}`,
  dropPadBorder: '1px dashed',
  dropPadHoverBorderColor: themeColors.primary,
  dropPadBorderColor: themeColors.primary,
  dropPadBorderRadius: '4px',
  dropPadFileLoadingBackground: themeColors.secondaryBackground,
  dropPadFileLoadingBarBackground: themeColors.primary,

  // ---- Layout ---- //
  layoutHeaderHeight: '44px',
  layoutHeaderPaddingSmall: '0 8px',
  layoutHeaderPaddingMedium: '0 16px',
  layoutHeaderPaddingLarge: '0 24px',
  layoutFooterHeight: '60px',
  layoutSiderWidthSmall: '100px',
  layoutSiderWidthMedium: '200px',
  layoutSiderWidthLarge: '300px',

  // ---- Input ---- //
  inputBackground: themeColors.primaryBackground,
  inputBorder: '1px solid',
  inputBorderRadius: '4px',
  inputBorderColor: themeColors.border,
  inputFocusBorderColor: themeColors.primary,
  inputColor: themeColors.body,
  inputDefaultHeight: '32px',
  inputDefaultFontSize: 14,
  inputFontFamily: "'Lato', sans-serif",
  inputStatusErrorBorderColor: themeColors.red,
  inputStatusWarningBorderColor: themeColors.orange,
  inputStatusSuccessBorderColor: themeColors.green,
  inputStatusLoadingBorderColor: themeColors.primary,
  inputSmallHeight: '24px',
  inputSmallFontSize: 12,
  inputLargeHeight: '44px',
  inputLargeFontSize: 18,
  inputPadding: '0 10px',
  inputTextAreaPadding: '10px 10px',
  inputPlaceholderColor: `${rgba(themeColors.body, 0.7)}`,

  // ---- Media Screen ---- //
  mediaScreenSmall: '600px',
  mediaScreenMedium: '748px',
  mediaScreenLarge: '992px',
  mediaScreenVeryLarge: '1200px',

  // ---- Menu ---- //
  menuItemPadding: '4px 16px',
  menuItemHoverColor: themeColors.primary,
  menuItemHoverBackground: themeColors.tertiaryBackground,

  // ---- Modal ---- //
  modalBackground: themeColors.primaryBackground,
  modalBorder: 'none',
  modalBorderColor: 'transparent',
  modalBorderRadius: '4px',
  modalBoxShadow: `0px 4px 12px ${rgba(themeColors.black, 0.15)}`,
  modalContentPadding: '32px',
  modalFooterBackground: themeColors.secondaryBackground,
  modalFooterHeight: '60px',
  modalFooterPadding: '0 32px',
  modalHeaderBackground: 'transparent',
  modalHeaderColor: themeColors.primary,
  modalHeaderMarginTop: '24px',
  modalHeaderPadding: '0 32px',
  modalMaskBackground: `${rgba(themeColors.black, 0.45)}`,
  modalMinHeight: '200px',
  modalMinWidth: '520px',

  // ---- Notification ---- //
  notificationMinHeight: '46px',
  notificationMaxWidth: '520px',
  notificationBoxShadow: `0px 0px 4px ${rgba(themeColors.black, 0.2)}`,

  // ---- NotificationBox ---- //
  notificationBoxMinHeight: '46px',
  notificationBoxMaxWidth: '520px',
  notificationBoxErrorBackground: `${rgba(themeColors.red, 0.25)}`,
  notificationBoxSuccessBackground: `${rgba(themeColors.green, 0.25)}`,
  notificationBoxWarningBackground: `${rgba(themeColors.yellow, 0.25)}`,
  notificationBoxInfoBackground: `${rgba(themeColors.blue, 0.25)}`,
  notificationBoxDefaultBackground: `${rgba(themeColors.gray, 0.25)}`,
  notificationBoxBorderRadius: '4px',
  notificationBoxBoxShadow: `0px 0px 4px ${rgba(themeColors.black, 0.2)}`,
  notificationBoxPadding: '8px 16px',

  // ---- Panel ---- //
  panelBackground: themeColors.primaryBackground,
  panelBorder: 'none',
  panelBorderColor: 'transparent',
  panelBorderRadius: '4px',
  panelPadding: '24px',
  panelMargin: '16px',
  panelActiveBoxShadow: `0px 0px 4px ${rgba(themeColors.black, 0.2)}`,
  panelHoverBoxShadow: `0px 7px 21px ${rgba(themeColors.black, 0.07)}`,
  panelWithTitleBorder: '1px solid',
  panelWithTitleBorderColor: themeColors.border,

  // ---- Radio ---- //
  radioItemLineHeight: '16px',
  radioItemMargin: '4px',
  radioItemFontSize: '14px',
  radioItemFontColor: themeColors.body,
  radioItemBorder: `1px solid ${themeColors.border}`,
  radioItemCheckedMiddleBackground: themeColors.primaryBackground,
  radioItemHoverColor: themeColors.primary,
  radioItemHoverBorder: `1px solid ${themeColors.primary}`,
  radioItemCheckedBackground: themeColors.primary,
  radioItemCheckedBorderColor: themeColors.primary,

  // ---- Select ---- //
  selectControlBorderColor: themeColors.border,
  selectControlHoverBorderColor: themeColors.primary,
  selectControlBackground: themeColors.primaryBackground,
  selectControlDisabledBackground: themeColors.disabledBackground,
  selectControlMinHeight: '32px',
  selectOptionColor: themeColors.title,
  selectOptionSelectedBackground: themeColors.tertiaryBackground,
  selectOptionSelectedColor: themeColors.primary,
  selectOptionFocusedBackground: themeColors.quaternaryBackground,
  selectMenuBackground: themeColors.primaryBackground,
  selectMultiValueLabelColor: themeColors.tag,
  selectMultiValueBackground: themeColors.quaternaryBackground,
  selectMultiValueRemoveHoverBackground: themeColors.quaternaryBackground,
  selectSingleValueColor: themeColors.primary,

  // ---- Table ---- //
  tableEmptyContainerHeight: '100px',
  tableHeadBorder: '2px solid',
  tableHeadBorderColor: themeColors.tableBorder,
  tableHeadCellPadding: '8px 16px',
  tableBodyCellPadding: '8px 16px',
  tableBodyRowBorder: '1px solid',
  tableBodyRowBorderColor: themeColors.tableBorder,

  // ---- Tabs ---- //
  tabsInkbarThickness: '4px',
  tabsItemPadding: '8px 16px',

  // ---- Toggle ---- //
  toggleHeight: '16px',
  toggleWidth: '32px',
  toggleOffBackground: themeColors.gray,
  toggleOnBackground: themeColors.primary,
  toggleDisabledBackground: `${rgba(themeColors.gray, 0.4)}`,
  toggleOnIconColor: themeColors.white,
  toggleBorderRadius: '8px',
  toggleCircleBackground: themeColors.white,
  toggleCircleHeight: '12px',
  toggleCircleWidth: '12px',
  toggleCircleTop: '2px',

  // ---- Tooltip ---- //
  tooltipBorder: '1px solid',
  tooltipBorderColor: themeColors.border,
  tooltipBorderRadius: '4px',
  tooltipArrowSize: '10px',
  tooltipBoxShadow: `0px 4px 4px ${rgba(themeColors.black, 0.25)}`,
  tooltipMargin: '4px',

  // ---- Typography ---- //
  typographyTitleFontFamily: '"Encode Sans", sans-serif',

  typographyTitle1Color: themeColors.title,
  typographyTitle1FontSize: '36px',
  typographyTitle1FontWeight: '700',
  typographyTitle1LineHeight: '1.1',
  typographyTitle1LetterSpacing: '0',

  typographyTitle2Color: themeColors.title,
  typographyTitle2FontSize: '24px',
  typographyTitle2FontWeight: '700',
  typographyTitle2LineHeight: '1.1',
  typographyTitle2LetterSpacing: '0',

  typographyTitle3Color: themeColors.title,
  typographyTitle3FontSize: '18px',
  typographyTitle3FontWeight: '700',
  typographyTitle3LineHeight: '1.1',
  typographyTitle3LetterSpacing: '0',

  typographyTitle4Color: themeColors.title,
  typographyTitle4FontSize: '16px',
  typographyTitle4FontWeight: '700',
  typographyTitle4LineHeight: '1.1',
  typographyTitle4LetterSpacing: '0',

  typographyTitle5Color: themeColors.title,
  typographyTitle5FontSize: '14px',
  typographyTitle5FontWeight: '700',
  typographyTitle5LineHeight: '1.1',
  typographyTitle5LetterSpacing: '0',

  typographyTitle6Color: themeColors.title,
  typographyTitle6FontSize: '12px',
  typographyTitle6FontWeight: '700',
  typographyTitle6LineHeight: '1.1',
  typographyTitle6LetterSpacing: '0',

  typographySubtitleColor: themeColors.subtitle,
  typographySubtitleFontFamily: '"Lato", sans-serif',
  typographySubtitleFontSize: '16px',
  typographySubtitleFontWeight: '700',
  typographySubtitleLineHeight: '1.5',
  typographySubtitleLetterSpacing: '0',

  typographyBodyColor: themeColors.body,
  typographyBodyFontFamily: '"Lato", sans-serif',
  typographyBodyFontSize: '16px',
  typographyBodyFontWeight: '400',
  typographyBodyLineHeight: '1.5',
  typographyBodyLetterSpacing: '0',
  typographyBodyDisabledColor: themeColors.bodyDisabled,

  typographyDescriptionColor: themeColors.description,
  typographyDescriptionFontFamily: '"Lato", sans-serif',
  typographyDescriptionFontSize: '12px',
  typographyDescriptionFontWeight: '400',
  typographyDescriptionLineHeight: '1.5',
  typographyDescriptionLetterSpacing: '0',

  typographyLabelColor: themeColors.label,
  typographyLabelFontFamily: '"Lato", sans-serif',
  typographyLabelFontSize: '11px',
  typographyLabelFontWeight: '600',
  typographyLabelLineHeight: '1.5',
  typographyLabelLetterSpacing: '0',
  typographyLabelTextTransform: 'uppercase',

  colors: {
    ...themeColors,
  },
});

export const createTheme = (
  colorOverrides: Partial<Colors>,
  themeOverrides: Partial<GlobalTheme>
): GlobalTheme => {
  const themeColors = {
    ...colors,
    ...colorOverrides,
  };

  const theme = getDefaultTheme(themeColors);

  return {
    ...theme,
    ...themeOverrides,
  };
};
