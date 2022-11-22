import sharp from 'sharp'
import { resizeFromUrl } from '../../../src/modules/images/resize'
import { getImageFromUrl } from '../../../src/modules/images/common'

jest.unmock('../../../src/modules/images/resize')

describe('resizeFromUrl', () => {
  it('Gets the image from a remote URL', async () => {
    await resizeFromUrl('//test-url', 100, 100)

    expect(getImageFromUrl).toHaveBeenCalledWith('//test-url')
  })

  it('Resizes the image using the sharp library', async () => {
    await resizeFromUrl('//test-url', 100, 100)

    expect(sharp).toHaveBeenCalledWith('__BUFFER__')
  })

  it('Gets the resized image', async () => {
    const response = await resizeFromUrl('//test-url', 100, 100)

    expect(response).toStrictEqual({
      contentType: 'image/png',
      data: Buffer.from('__BUFFER__'),
    })
  })
})
