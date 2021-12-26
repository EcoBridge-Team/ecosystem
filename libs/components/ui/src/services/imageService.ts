const API_URL = process.env.NEXT_PUBLIC_API_URL
const IMAGE_API_URL = API_URL + '/images/'

export const getImageUrl = (imageId: string | number): string =>
  `${IMAGE_API_URL}${imageId}`
