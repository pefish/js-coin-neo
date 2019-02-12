import Neon, {
  rpc,
} from '@cityofzion/neon-js'
import RpcRequester from '../rpc_requester'

export default class NeoRpcHelper extends RpcRequester {
  constructor (url) {
    super({
      url
    })
    this._client = Neon.create.rpcClient(url)
  }

  getClient () {
    return this._client
  }

  async getNewAddress () {
    return await this.request(`getnewaddress`)
  }
}
