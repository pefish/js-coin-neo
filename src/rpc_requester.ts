import '@pefish/js-node-assist'
import HttpRequestUtil from '@pefish/js-util-httprequest'

export default class RpcRequester {

  _url: string
  _username: string
  _password: string

  /**
   * 'host': '10.1.0.152',
   * 'port': 18332,
   * 'username': 'test',
   * 'password': '123456789',
   * 'ssl': false
   */
  constructor (config) {
    if (config[`url`] && typeof config[`url`] === 'string') {
      this._url = config[`url`]
    } else {
      this._url = `${config['ssl'] === true ? 'https' : 'http'}://${config['host']}${config['port'] ? `:${config['port']}` : ''}`
    }
    this._username = config['username']
    this._password = config['password']
  }

  async request (method, params = []) {
    let result = await HttpRequestUtil.postJsonByAuth(this._url, this._username, this._password, null, {
      jsonrpc: '2.0',
      method,
      params,
      id: 1
    })
    if (typeof result === 'string') {
      result = JSON.parse(result)
    }
    return result['result']
  }
}
