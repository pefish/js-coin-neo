import '@pefish/js-node-assist'
import * as assert from 'assert'
import NeoRpcHelper from './rpc'

describe('neoRpcHelper', () => {

  let helper: NeoRpcHelper

  before(async () => {
    helper = new NeoRpcHelper(`http://35.229.244.190:50003`)
  })

  // it('getBlockchainInfo', async () => {
  //   try {
  //     const result = await helper.client.getBlockchainInfo()
  //     global.logger.error('2', result)
  //     // assert.notStrictEqual(result, undefined)
  //   } catch (err) {
  //     global.logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
})

