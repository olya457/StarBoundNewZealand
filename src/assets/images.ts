import type {ImageSourcePropType} from 'react-native';

export const images = {
  logo: require('./images/brand-star.png'),
  splash: require('./images/splash-loader.png'),
  onboardingFollow: require('./images/onboarding-follow.png'),
  onboardingRoutes: require('./images/onboarding-routes.png'),
  onboardingMap: require('./images/onboarding-map.png'),
  onboardingPicker: require('./images/onboarding-picker.png'),
  onboardingSaved: require('./images/onboarding-saved.png'),
  darkAorakiMackenzie: require('./images/dark-aoraki-mackenzie.png'),
  darkMountJohn: require('./images/dark-mount-john.png'),
  darkLakeTekapoNight: require('./images/dark-lake-tekapo-night.png'),
  darkTwizelFields: require('./images/dark-twizel-fields.png'),
  darkNaseby: require('./images/dark-naseby.png'),
  mountainAorakiViewpoint: require('./images/mountain-aoraki-viewpoint.png'),
  mountainRoysPeak: require('./images/mountain-roys-peak.png'),
  mountainLindisPass: require('./images/mountain-lindis-pass.png'),
  mountainRemarkables: require('./images/mountain-remarkables.png'),
  mountainAspiring: require('./images/mountain-aspiring.png'),
  lakeTekapo: require('./images/lake-tekapo.png'),
  lakePukaki: require('./images/lake-pukaki.png'),
  lakeWanaka: require('./images/lake-wanaka.png'),
  lakeWakatipu: require('./images/lake-wakatipu.png'),
  lakeMatheson: require('./images/lake-matheson.png'),
  coastCapeReinga: require('./images/coast-cape-reinga.png'),
  coastNuggetPoint: require('./images/coast-nugget-point.png'),
  coastCastlepoint: require('./images/coast-castlepoint.png'),
  coastCapeEgmont: require('./images/coast-cape-egmont.png'),
  coastKaikoura: require('./images/coast-kaikoura.png'),
} satisfies Record<string, ImageSourcePropType>;

export type ImageKey = keyof typeof images;
