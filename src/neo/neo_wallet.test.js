import 'node-assist'
import NeoWalletHelper from './neo_wallet'
import assert from "assert"


describe('neoWalletHelper', () => {

  let walletHelper
  const testnet = 'testnet', mainnet = 'mainnet'

  before(async () => {
    walletHelper = new NeoWalletHelper()
  })

  // it('decodeTransaction', async () => {
  //   try {
  //     const result = await walletHelper.decodeTransaction(`80000001e70ef0f4bcdf43c3e18376dc67dc3769bbf0451a6845b9d40ad8bea5b4435558000001eced05b797b8bdd1ebcc2e7b427d7714b6e4ef63d219655183a781fe6149acce00e1f5050000000002e0204b35331038a1ac03edf88edaece62200380141408dee3fee36d3e1cda0e97ac54e97da315afb1569208d0b04a78b3b7361ee374838e0862c56e1772d660f5c7692347f5ab40521064ff37e5348c4428af40aeee92321031a6c6fbbdf02ca351745fa86b9ba5a9452d785ac4f7fc2b7548ca2a46c4fcf4aac`)
  //     logger.error('result', result)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

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
  //     const result = walletHelper.getAddressFromScriptHash('380022e6ecda8ef8ed03aca1381033354b20e002')
  //     // logger.error(result)
  //     assert.strictEqual(result, 'AG35VSTVmH1BqjfomkJeaqp2MA5hANSk3N')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

  it('getAllBySeedAndIndex', async () => {
    try {
      const result = walletHelper.getAllBySeedAndIndex('da2a48a1b9fbade07552281143814b3cd7ba4b53a7de5241439417b9bb540e229c45a30b0ce32174aaccc80072df7cbdff24f0c0ae327cd5170d1f276b890173', 1)
      logger.error(result)
      assert.strictEqual(result['address'], 'AKnxfJidqBpPLLUuUoK4mwudqRkqB72Xpm')
    } catch (err) {
      logger.error(err)
      assert.throws(() => {}, err)
    }
  })

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

  // it('getAssetIdByCurrency', async () => {
  //   try {
  //     const result = walletHelper.getAssetIdByCurrency('NEO')
  //     // logger.error('result', result)
  //     assert.strictEqual(result, 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b')
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })

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

  // it('sendAssets', async () => {
  //   try {
  //     const result = await walletHelper.sendAssets(
  //       walletHelper.getPrivateKeyFromWif(`KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr`),
  //       'Ab32mtZkkMyPfvTnGmTfgsKQDKEy7fgWs5',
  //       1,
  //       0.00001,
  //     )
  //     logger.error('result', result)
  //   } catch (err) {
  //     logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
})

