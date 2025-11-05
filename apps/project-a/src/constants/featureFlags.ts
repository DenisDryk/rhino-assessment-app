type FeatureFlagName = keyof typeof FEATURE_FLAGS;

const FEATURE_FLAGS = {
  SHOW_BUTTON_ALERT: process.env.FEATURE_FLAG_SHOW_BUTTON_ALERT === 'true',
  HIDE_MARKET_BUTTON: process.env.FEATURE_FLAG_HIDE_MARKET_BUTTON === 'false',
} as const;

export const withFeatureFlag = (featureFlagName: FeatureFlagName) => {
  return !!FEATURE_FLAGS[featureFlagName];
};
