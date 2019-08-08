import BaseCoin from '../base/base_coin';
export default class BaseNeoWalletHelper extends BaseCoin {
    _networks: any;
    _mainCurrency: string;
    _assets: any;
    constructor();
    getAssetIdByCurrency(currency: any): any;
    getCurrencyByAssetId(assetId: any): string;
    /**
     * 由wif得到地址，testnet mainnet通用
     * @param wif
     * @returns {string}
     */
    getAddressFromWif(wif: any): string;
    getAddressFromPublicKey(publicKey: any): string;
    getAddressFromScriptHash(scriptHash: any): string;
    getAddressFromPrivateKey(privateKey: any): string;
    getPrivateKeyFromWif(wif: any): string;
    getPublicKeyFromWif(wif: any): string;
    encryptWif(wif: any, password: any): Promise<string>;
    decryptToWif(nep2Str: any, password: any): Promise<string>;
    decryptNep2(nep2Str: any, password: any): Promise<string>;
    getScriptHashFromAddress(address: any): string;
    /**
     * 获取地址、私钥等
     * @param seed {string} 种子
     * @param index {string | number} 索引
     * @returns {{seed: *, index: *, sha256: string, privateKey: string, publicKey: string, address: string, wif: string, scriptHash: string}}
     */
    getAllBySeedAndIndex(seed: any, index: any): {
        seed: any;
        index: any;
        sha256: string;
        privateKey: string;
        publicKey: string;
        address: string;
        wif: string;
        scriptHash: string;
    };
    isAddress(address: any): boolean;
    _parseNetwork(name: any): any;
    /**
     * 向三方获取一个最优节点的rpc url。只适用于mainnet、testnet、coznet
     * @param network
     * @returns {Promise<*>}
     */
    getBestRpcUrl(network: any): Promise<string>;
    /**
     * 设置私链
     * @param url {string} 节点网关url
     */
    setPrivateNetwork(url: any): void;
    addNetwork(networkName: any, url: any): void;
    decodeTransaction(hex: any): import("@cityofzion/neon-core/lib/tx").BaseTransaction;
    sendAssets(privateKey: any, targetAddress: any, neoAmount: any, gasAmount: any, network?: string): Promise<import("@cityofzion/neon-api/lib/funcs/types").SendAssetConfig>;
}
