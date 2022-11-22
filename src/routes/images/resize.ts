import { Request, Response, NextFunction } from 'express'
import validator from 'validator'
import { isResizeValueValid, resizeFromUrl } from '../../modules/images/resize'
import { ErrorCodes } from '../../modules/common/errors'
import { logger } from '../../modules/common/logger'

export const resizeImageRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const params = {
    url: req.params.url,
    width: req.query.width as string,
    height: req.query.height as string,
  }
  const errors = validateParams(params)

  if (errors.length > 0) {
    res.status(400).send({
      errors,
    })
    return next()
  }

  const width = params.width ? parseInt(params.width) : null
  const height = params.height ? parseInt(params.height) : null

  try {
    const image = await resizeFromUrl(params.url, width, height)
    res.contentType(image.contentType)
    res.send(image.data)
  } catch (err) {
    logger.error(`Error resizing image`)
    next(err)
  }
}

type ResizeParams = {
  url: string
  width?: string
  height?: string
}

const validateParams = ({ width, height, url }: ResizeParams): ErrorCodes[] => {
  const errors = []

  if (!validator.isURL(url)) {
    errors.push(ErrorCodes.ERROR_INVALID_URL)
  }

  if (!width && !height) {
    errors.push(ErrorCodes.ERROR_MISSING_RESIZE_WIDTH_OR_HEIGHT)

    return errors
  }

  if (width && (!validator.isNumeric(width) || !isResizeValueValid(parseInt(width)))) {
    errors.push(ErrorCodes.ERROR_INVALID_RESIZE_WIDTH)
  }

  if (height && (!validator.isNumeric(height) || !isResizeValueValid(parseInt(height)))) {
    errors.push(ErrorCodes.ERROR_INVALID_RESIZE_HEIGHT)
  }

  return errors
}
