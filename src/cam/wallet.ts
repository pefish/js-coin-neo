import '@pefish/js-node-assist'
import BaseNeoWalletHelper from '../base/base_wallet'


export default class CamWalletHelper extends BaseNeoWalletHelper {

  _mainCurrency: string = `CAM`
  _assets: any

  constructor () {
    super()
    this._assets = {
      [this._mainCurrency]: '0xceac4961fe81a783516519d263efe4b614777d427b2eccebd1bdb897b705edec',
      GAS: '0x44c014a45d068d383422f6aa6131fe9fb3a3fc62ec5d01afe9c4e12ac2e46d02'
    }
  }
}
