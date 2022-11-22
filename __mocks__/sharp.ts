export default jest.fn(() => ({
  resize: () => ({
    toBuffer: () => Buffer.from('__BUFFER__'),
  }),
}))
