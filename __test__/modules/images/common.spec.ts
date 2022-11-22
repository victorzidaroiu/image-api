import fetch from 'node-fetch'
import { getImageFromUrl } from '../../../src/modules/images/common'

jest.unmock('../../../src/modules/images/common')

describe('getImageFromUrl', () => {
  it('Gets an image using fetch', async () => {
    await getImageFromUrl('//test-url')

    expect(fetch).toHaveBeenCalledWith('//test-url')
  })

  it('Returns the image', async () => {
    const response = await getImageFromUrl('//test-url')

    expect(response).toStrictEqual({
      contentType: 'image/png',
      data: Buffer.from('__BUFFER__'),
    })
  })
})
