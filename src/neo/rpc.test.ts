import '@pefish/js-node-assist'
import * as assert from 'assert'
import NeoRpcHelper from './rpc'

describe('neoRpcHelper', () => {

  let helper, client

  before(async () => {
    helper = new NeoRpcHelper(`http://35.229.244.190:50003`)
    client = helper.getClient()
  })

  // it('getNewAddress', async () => {
  //   try {
  //     const result = await helper.getNewAddress()
  //     logger.error('2', result)
  //     // assert.notStrictEqual(result, undefined)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('getBlockCount', async () => {
  //   try {
  //     const result = await client.getBlockCount()
  //     logger.error('2', result)
  //     // assert.notStrictEqual(result, undefined)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // // getAccountState
  // it('getAccountState', async () => {
  //   try {
  //     const result = await client.getAccountState(`AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y`)
  //     logger.error('2', result)
  //     // assert.notStrictEqual(result, undefined)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('getWalletBalance', async () => {
  //   try {
  //     const result = await helper.getWalletBalance(`0xceac4961fe81a783516519d263efe4b614777d427b2eccebd1bdb897b705edec`)
  //     logger.error('2', result)
  //     // assert.notStrictEqual(result, undefined)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  it('getAccountBalance', async () => {
    try {
      const result = await helper.getAccountBalance(`AKnxfJidqBpPLLUuUoK4mwudqRkqB72Xpm`, `0xceac4961fe81a783516519d263efe4b614777d427b2eccebd1bdb897b705edec`)
      global.logger.error('2', result)
      // assert.notStrictEqual(result, undefined)
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })
})

