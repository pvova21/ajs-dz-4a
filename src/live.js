export default function liveFunc(item) {
  if (item.health > 50) {
    return 'healthy';
  }
  if (item.health >= 15 && item.health < 50) {
    return 'wounded';
  }
  return 'critical';
}
