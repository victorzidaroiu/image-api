import winston from 'winston'
import { createServer } from '../src/server'

jest.unmock('../src/server')
jest.unmock('winston')
jest.unmock('express-winston')
jest.unmock('body-parser')
jest.unmock('express')

describe('createServer', () => {
  it('creates a server', () => {
    const nullLogger = winston.createLogger({
      level: 'debug',
      format: winston.format.simple(),
      transports: [new winston.transports.Console()],
    })
    expect(createServer({ logger: nullLogger })).toBeTruthy()
  })

  it('throws if not provided a logger', () => {
    // @ts-expect-error Test error assertion
    expect(() => createServer()).toThrowError()
  })
})
