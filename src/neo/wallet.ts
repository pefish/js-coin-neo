import '@pefish/js-node-assist'
import BaseNeoWalletHelper from '../base/base_wallet'


export default class NeoWalletHelper extends BaseNeoWalletHelper {

  constructor () {
    super()
    this._mainCurrency = `NEO`
    this._assets = {
      [this._mainCurrency]: 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
      GAS: '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7'
    }
  }
}
