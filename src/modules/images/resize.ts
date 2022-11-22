import sharp from 'sharp'
import { logger } from '../../modules/common/logger'
import { Image, getImageFromUrl } from './common'

export const MIN_RESIZE_VALUE = 5
export const MAX_RESIZE_VALUE = 3000

export const isResizeValueValid = (value: number): boolean => value >= MIN_RESIZE_VALUE && value <= MAX_RESIZE_VALUE

/**
 * Resize an image from a remote url using either width or height or both
 *
 * @param {string} url - Image URL
 * @param {number} width - Width of new image, optional
 * @param {number} height - Height of new image, optional
 */
export const resizeFromUrl = async (url: string, width: number | null, height: number | null): Promise<Image> => {
  logger.info(`Resizing URL: ${url} with params: width: ${width}, height: ${height}`)
  let image: Image
  try {
    image = await getImageFromUrl(url)
  } catch (err) {
    logger.error(`Error getting image from URL: ${url}`)
    throw err
  }

  const data = await sharp(image.data).resize(width, height).toBuffer()

  return {
    data,
    contentType: image.contentType,
  }
}
