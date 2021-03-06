import Neon, {
  wallet,
  rpc,
  u,
  api,
  tx,
} from '@cityofzion/neon-js'
import BaseCoin from '../base/base_coin'
import CryptUtil from '@pefish/js-util-crypto'
import ErrorHelper from '@pefish/js-error'


export default class BaseNeoWalletHelper extends BaseCoin {

  _networks: any
  _mainCurrency: string
  _assets: any

  constructor () {
    super()
    this._networks = {
      testnet: `TestNet`,
      mainnet: `MainNet`,
      coznet: `CozNet`,
      regtest: `PrivateNet`
    }
  }

  getAssetIdByCurrency (currency) {
    return this._assets[currency]
  }

  getCurrencyByAssetId (assetId) {
    for (const [currency, assetId_] of Object.entries(this._assets)) {
      if (assetId === assetId_) {
        return currency
      }
    }
    throw new ErrorHelper(`assetId ${assetId} not exists`)
  }

  /**
   * 由wif得到地址，testnet mainnet通用
   * @param wif
   * @returns {string}
   */
  getAddressFromWif (wif) {
    const account = new wallet.Account(wif)
    return account.address
  }

  getAddressFromPublicKey (publicKey) {
    const account = new wallet.Account(publicKey)
    return account.address
  }

  getAddressFromScriptHash (scriptHash) {
    const account = new wallet.Account(scriptHash)
    return account.address
  }

  getAddressFromPrivateKey (privateKey) {
    const account = new wallet.Account(privateKey)
    return account.address
  }

  getPrivateKeyFromWif (wif) {
    const account = new wallet.Account(wif)
    return account.privateKey
  }

  getPublicKeyFromWif (wif) {
    const account = new wallet.Account(wif)
    return account.publicKey
  }

  async encryptWif (wif, password) {
    const account = new wallet.Account(wif)
    return (await account.encrypt(password)).encrypted
  }

  async decryptToWif (nep2Str, password) {
    const account = new wallet.Account(nep2Str)
    return (await account.decrypt(password)).WIF
  }

  async decryptNep2 (nep2Str, password) {
    return await this.decryptToWif(nep2Str, password)
  }

  getScriptHashFromAddress (address) {
    const account = new wallet.Account(address)
    return account.scriptHash
  }

  /**
   * 获取地址、私钥等
   * @param seed {string} 种子
   * @param index {string | number} 索引
   * @returns {{seed: *, index: *, sha256: string, privateKey: string, publicKey: string, address: string, wif: string, scriptHash: string}}
   */
  getAllBySeedAndIndex (seed, index) {
    const sha256 = CryptUtil.sha256ToHex(seed + index)
    const arr = sha256.toArray_(2).map((hexStr) => {
      return hexStr.hexToNumber_()
    })
    const privateKey = u.ab2hexstring(arr)
    const account = new wallet.Account(privateKey)
    return {
      seed,
      index,
      sha256,
      privateKey,
      publicKey: account.publicKey,
      address: account.address,
      wif: account.WIF,
      scriptHash: account.scriptHash
    }
  }

  isAddress(address) {
    return wallet.isAddress(address)
  }

  _parseNetwork (name) {
    const networkName = this._networks[name]
    if (!networkName) {
      throw new ErrorHelper(`network name error`)
    }
    return networkName
  }

  /**
   * 向三方获取一个最优节点的rpc url。只适用于mainnet、testnet、coznet
   * @param network
   * @returns {Promise<*>}
   */
  async getBestRpcUrl (network) {
    network = this._parseNetwork(network)
    const apiProvider = new api.neoscan.instance(network)
    return await apiProvider.getRPCEndpoint()
  }

  /**
   * 设置私链
   * @param url {string} 节点网关url
   */
  setPrivateNetwork (url) {
    const privateNet = new rpc.Network({
      name: `PrivateNet`,
      extra: {
        neoscan: url
      }
    })
    Neon.add.network(privateNet, true)
  }

  addNetwork (networkName, url) {
    this._networks[networkName] = networkName
    const privateNet = new rpc.Network({
      name: networkName,
      extra: {
        neoscan: url
      }
    })
    Neon.add.network(privateNet, true)
  }

  decodeTransaction (hex) {
    return tx.Transaction.deserialize(hex)
  }

  async sendAssets (privateKey, targetAddress, neoAmount, gasAmount, network = `testnet`) {
    network = this._parseNetwork(network)

    const intent = api.makeIntent({ [this._mainCurrency]: neoAmount, GAS: gasAmount }, targetAddress)

    intent.forEach(i => console.log(i))

    const apiProvider = new api.neoscan.instance(network)

    const account = new wallet.Account(privateKey);
    const config = {
      api: apiProvider, // The network to perform the action, MainNet or TestNet.
      account: account, // This is the address which the assets come from.
      intents: intent, // This is where you want to send assets to.
    };

    return await Neon.sendAsset(config)
  }
}
