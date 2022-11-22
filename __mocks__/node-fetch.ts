export default jest.fn(async function () {
  return {
    headers: {
      get: () => 'image/png',
    },
    arrayBuffer: () => '__BUFFER__',
  }
})
