import Neon, {
  rpc,
} from '@cityofzion/neon-js'

export default class NeoRpcHelper {
  constructor (url) {
    this._client = Neon.create.rpcClient(url)
  }

  getClient () {
    return this._client
  }
}
