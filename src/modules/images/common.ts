import fetch from 'node-fetch'

export type Image = {
  contentType: string
  data: Buffer
}

export const getImageFromUrl = async (url: string): Promise<Image> => {
  const response = await fetch(url)
  const contentType = response.headers.get('content-type')
  const arrayBuffer = await response.arrayBuffer()

  return {
    contentType,
    data: Buffer.from(arrayBuffer),
  }
}
