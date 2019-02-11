import 'node-assist'
import assert from "assert"
import NeoRpcHelper from './neo_rpc'

describe('neoRpcHelper', () => {

  let helper, client

  before(async () => {
    helper = new NeoRpcHelper(`http://47.99.166.159:30333`)
    client = helper.getClient()
  })

  it('getBlockCount', async () => {
    try {
      const result = await client.getBlockCount()
      logger.error('2', result)
      // assert.notStrictEqual(result, undefined)
    } catch (err) {
      logger.error(err)
      assert.throws(() => {}, err)
    }
  })

  // getAccountState
  it('getAccountState', async () => {
    try {
      const result = await client.getAccountState(`AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y`)
      logger.error('2', result)
      // assert.notStrictEqual(result, undefined)
    } catch (err) {
      logger.error(err)
      assert.throws(() => {}, err)
    }
  })

})

