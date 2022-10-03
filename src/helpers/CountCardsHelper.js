export function getStartCountAndOffset(width) {
  const config = {};
  if (width >= 955) {
    config.offset = 3;
    config.count = 12;
  } else if (width >= 480 && width < 955) {
    config.offset = 2;
    config.count = 8;
  } else if (width <= 480 && width >= 320) {
    config.offset = 1;
    config.count = 5;
  }
  return config;
}