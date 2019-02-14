import Neon, {
  wallet,
  rpc,
  u,
  api,
  tx,
} from '@cityofzion/neon-js'
import BaseCoin from '../base/base_coin'
import CryptUtil from 'p-js-utils/lib/crypt'
import ErrorHelper from 'p-js-error'


export default class BaseNeoWalletHelper extends BaseCoin {

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
    for (let [currency, assetId_] of Object.entries(this._assets)) {
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

  /**
   * 使用密码加密wif成nep2密文string
   * @param wif
   * @param password
   * @param opts
   * @returns {string}
   */
  encryptWif (wif, password, opts = {
    cost: 16384,
    blockSize: 8,
    parallel: 8,
    size: 64
  }) {
    const account = new wallet.Account(wif)
    return account.encrypt(password, opts).encrypted
  }

  /**
   * 使用密码解密nep2密文string成wif
   * @param nep2Str
   * @param password
   * @param opts
   * @returns {string}
   */
  decryptToWif (nep2Str, password, opts = {
    cost: 16384,
    blockSize: 8,
    parallel: 8,
    size: 64
  }) {
    const account = new wallet.Account(nep2Str)
    return account.decrypt(password, opts).WIF
  }

  decryptNep2 (nep2Str, password, opts = {
    cost: 16384,
    blockSize: 8,
    parallel: 8,
    size: 64
  }) {
    return this.decryptToWif(nep2Str, password, opts)
  }

  getScriptHashFromAddress (address) {
    const account = new wallet.Account(address)
    return account.scriptHash
  }

  // getPrivateKeyBySeedAndIndex (seed, index) {
  //   const md5 = CryptUtil.md5(seed + index)
  //   const md5TwoArr = CryptUtil.md5(md5).toArray(2)
  //   const targetArr = md5TwoArr.append(md5.toArray(2))
  //   const arr = targetArr.map((hexStr) => {
  //     return hexStr.hexToNumber()
  //   })
  //   const privateKey = u.ab2hexstring(arr)
  //   const account = new wallet.Account(privateKey)
  //   return {
  //     seed,
  //     index,
  //     privateKey,
  //     publicKey: account.publicKey,
  //     address: account.address,
  //     wif: account.WIF,
  //     scriptHash: account.scriptHash
  //   }
  // }

  /**
   * 获取地址、私钥等
   * @param seed {string} 种子
   * @param index {string | number} 索引
   * @returns {{seed: *, index: *, sha256: string, privateKey: string, publicKey: string, address: string, wif: string, scriptHash: string}}
   */
  getAllBySeedAndIndex (seed, index) {
    const sha256 = CryptUtil.sha256ToHex(seed + index)
    const arr = sha256.toArray(2).map((hexStr) => {
      return hexStr.hexToNumber()
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
    logger.error(network)

    const intent = api.makeIntent({ [this._mainCurrency]: neoAmount, GAS: gasAmount }, targetAddress)

    console.log("\n\n--- Intents ---")
    intent.forEach(i => console.log(i))

    const apiProvider = new api.neoscan.instance(network)

    console.log("\n\n--- API Provider ---")
    console.log(apiProvider)

    const account = new wallet.Account(privateKey);

    console.log("\n\n--- Sending Address ---");
    console.log(account);

    const config = {
      api: apiProvider, // The network to perform the action, MainNet or TestNet.
      account: account, // This is the address which the assets come from.
      intents: intent, // This is where you want to send assets to.
    };

    return await Neon.sendAsset(config)
  }
}
