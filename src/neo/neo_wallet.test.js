import 'node-assist'
import NeoWalletHelper from './neo_wallet'
import assert from "assert"


describe('neoWalletHelper', () => {

  let walletHelper
  const testnet = 'testnet', mainnet = 'mainnet'

  before(async () => {
    walletHelper = new NeoWalletHelper()
  })

  // it('getAddressFromWif', async () => {
  //   try {
  //     const result = walletHelper.getAddressFromWif('KyN5VWycg25RPMWu1Za5ajBCt6PnVmzYEUfEdYkrodPKpqZCJucf')
  //     logger.error(result)
  //     // assert.strictEqual(result, 'Aatqqnhk5T3APLPDYzCuAXuTyGEufu8LEL')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('encryptWif', async () => {
  //   try {
  //     const result = walletHelper.encryptWif('L5E2CtQXRUqmSn2Tuvp6mjPpTAAZtr6DN36p6ThzRVmcfe4HvaC8', 'test123456')
  //     // logger.error(result)
  //     assert.strictEqual(result, '6PYNYuL3ALr32vfE1P5XMJXTmWJEm6wVD1SGdyTPurpDTz5QV7B7Kgd5o2')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('decryptToWif', async () => {
  //   try {
  //     const result = walletHelper.decryptToWif('6PYNYuL3ALr32vfE1P5XMJXTmWJEm6wVD1SGdyTPurpDTz5QV7B7Kgd5o2', 'test123456')
  //     // logger.error(result)
  //     assert.strictEqual(result, 'L5E2CtQXRUqmSn2Tuvp6mjPpTAAZtr6DN36p6ThzRVmcfe4HvaC8')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('getScriptHashFromAddress', async () => {
  //   try {
  //     const result = walletHelper.getScriptHashFromAddress('Aatqqnhk5T3APLPDYzCuAXuTyGEufu8LEL')
  //     // logger.error(result)
  //     assert.strictEqual(result, '005f6fd6299c8ed650d0b712ed858a3b6bcbbbd1')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getPublicKeyFromWif', async () => {
  //   try {
  //     const result = walletHelper.getPublicKeyFromWif('L5E2CtQXRUqmSn2Tuvp6mjPpTAAZtr6DN36p6ThzRVmcfe4HvaC8')
  //     // logger.error(result)
  //     assert.strictEqual(result, '02259f06462719e1f5fd76ca1a10f0ec43fa48a856aab661b1021f819653ae1f8e')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getPrivateKeyFromWif', async () => {
  //   try {
  //     const result = walletHelper.getPrivateKeyFromWif('L5E2CtQXRUqmSn2Tuvp6mjPpTAAZtr6DN36p6ThzRVmcfe4HvaC8')
  //     // logger.error(result)
  //     assert.strictEqual(result, 'eedbe854b8525525f74af6eda59c5904e13713117b163f810df35ed4a11f53d8')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getAddressFromPublicKey', async () => {
  //   try {
  //     const result = walletHelper.getAddressFromPublicKey('02259f06462719e1f5fd76ca1a10f0ec43fa48a856aab661b1021f819653ae1f8e')
  //     // logger.error(result)
  //     assert.strictEqual(result, 'Aatqqnhk5T3APLPDYzCuAXuTyGEufu8LEL')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getAddressFromPrivateKey', async () => {
  //   try {
  //     const result = walletHelper.getAddressFromPrivateKey('eedbe854b8525525f74af6eda59c5904e13713117b163f810df35ed4a11f53d8')
  //     // logger.error(result)
  //     assert.strictEqual(result, 'Aatqqnhk5T3APLPDYzCuAXuTyGEufu8LEL')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getAddressFromScriptHash', async () => {
  //   try {
  //     const result = walletHelper.getAddressFromScriptHash('005f6fd6299c8ed650d0b712ed858a3b6bcbbbd1')
  //     // logger.error(result)
  //     assert.strictEqual(result, 'Aatqqnhk5T3APLPDYzCuAXuTyGEufu8LEL')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getAllBySeedAndIndex', async () => {
  //   try {
  //     const result = walletHelper.getAllBySeedAndIndex('da2a48a1b9fbade07552281143814b3cd7ba4b53a7de5241439417b9bb540e229c45a30b0ce32174aaccc80072df7cbdff24f0c0ae327cd5170d1f276b890173', 1)
  //     // logger.error(result)
  //     assert.strictEqual(result['address'], 'AKnxfJidqBpPLLUuUoK4mwudqRkqB72Xpm')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('isAddress', async () => {
  //   try {
  //     const result = walletHelper.isAddress('ASeAiXviZ4m5mcqmM2eAus7p9spjmwZqZ9')
  //     // logger.error('result', result)
  //     assert.strictEqual(result, true)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  // it('getAssertIdByName', async () => {
  //   try {
  //     const result = walletHelper.getAssertIdByName('NEO')
  //     const result1 = walletHelper.getAssertIdByName('NEO1')
  //     // logger.error('result', result)
  //     assert.strictEqual(result, 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b')
  //     assert.strictEqual(result1, null)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
  //
  // it('getNameByAssertId', async () => {
  //   try {
  //     const result = walletHelper.getNameByAssertId('c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b')
  //     const result1 = walletHelper.getNameByAssertId('2324tqerg24hwgnwrth')
  //     // logger.error('result', result)
  //     assert.strictEqual(result, 'NEO')
  //     assert.strictEqual(result1, null)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  it('sendAssets', async () => {
    try {
      const result = await walletHelper.sendAssets(
        walletHelper.getPrivateKeyFromWif(`KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr`),
        'Ab32mtZkkMyPfvTnGmTfgsKQDKEy7fgWs5',
        1,
        0.00001,
      )
      logger.error('result', result)
    } catch (err) {
      logger.error(err)
      assert.throws(() => {}, err)
    }
  })
})

