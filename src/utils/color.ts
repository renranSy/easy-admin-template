export const hexToRgba = (hex: string, alpha: number = 1): string => {
  // 移除可能存在的前缀#
  const strippedHex = hex.replace('#', '')

  // 检查十六进制颜色值的有效性
  if (strippedHex.length !== 6) {
    throw new Error('Invalid hex color')
  }

  // 将十六进制值转换为十进制
  const r = parseInt(strippedHex.substring(0, 2), 16)
  const g = parseInt(strippedHex.substring(2, 4), 16)
  const b = parseInt(strippedHex.substring(4, 6), 16)

  // 将Alpha值限制在0到1之间
  alpha = Math.max(0, Math.min(1, alpha))

  // 构造并返回RGBA字符串
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
