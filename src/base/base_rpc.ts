import Neon, {
  rpc,
} from '@cityofzion/neon-js'
import RpcRequester from '../rpc_requester'

export default class BaseNeoRpcHelper extends RpcRequester {

  _client: any

  constructor (url) {
    super({
      url
    })
    this._client = Neon.create.rpcClient(url, `MainNet`)
  }

  getClient () {
    return this._client
  }

  async getNewAddress () {
    return await this.request(`getnewaddress`)
  }

  async getWalletBalance (assetId) {
    return await this.request(`getbalance`, [assetId])
  }

  async getAccountBalance (address, assetId) {
    const accountState = await this._client.getAccountState(address)
    const balances = accountState[`balances`]
    for (const balance of balances) {
      if (balance[`asset`] === assetId) {
        return balance[`value`]
      }
    }
    return `0`
  }

  async sendToAddress (assetId, address, amount, fee = 0, changeAddress = null) {
    const params = [assetId, address, amount, fee]
    if (changeAddress) {
      params.push(changeAddress)
    }
    return await this.request(`sendtoaddress`, params)
  }
}
