/**
 * Image utility functions for handling council logos and images
 */

export const getCouncilLogoUrl = (councilSlug: string): string => {
  // Map council slugs to their actual logo files
  const logoMap: Record<string, string> = {
    'yaounde-2-council': '/local-councils/Yaounde-II-Council.png',
    'mokolo-council': '/local-councils/Mokolo-Council.png',
    'wum-council': '/local-councils/Wum-Council.jpeg',
    'bazou-council': '/local-councils/Bazou-Council.jpeg',
    'baham-council': '/local-councils/Baham-Council.jpg',
    'elak-oku-council': '/local-councils/Elak-Council.png',
    'mbonge-council': '/local-councils/Mbonge-Council.jpg',
    'kette-council': '/local-councils/Kette-Council.jpg',
    'olanguina-council': '/local-councils/Olanguina-Council.jpg',
    'booue-council': '/local-councils/Booue-Council-Gabon.jpg',
    'buea-council': '/local-councils/Buea-Council.png',
  }

  return logoMap[councilSlug] || '/images/placeholder-council.png'
}

export const getCouncilImageUrl = (councilSlug: string): string => {
  // For now, use the same as logo, but this could be expanded for hero images
  return getCouncilLogoUrl(councilSlug)
}

export const getPlaceholderImage = (): string => {
  return '/images/placeholder-council.svg'
}

/**
 * Generate a placeholder image URL with text
 */
export const generatePlaceholderImage = (text: string, width: number = 400, height: number = 300): string => {
  const encodedText = encodeURIComponent(text)
  return `https://via.placeholder.com/${width}x${height}/f3f4f6/6b7280?text=${encodedText}`
}

/**
 * Check if an image URL is valid
 */
export const isValidImageUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
