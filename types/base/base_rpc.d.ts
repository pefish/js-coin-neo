import RpcRequester from '../rpc_requester';
export default class BaseNeoRpcHelper extends RpcRequester {
    _client: any;
    constructor(url: any);
    getClient(): any;
    getNewAddress(): Promise<any>;
    getWalletBalance(assetId: any): Promise<any>;
    getAccountBalance(address: any, assetId: any): Promise<any>;
    sendToAddress(assetId: any, address: any, amount: any, fee?: number, changeAddress?: any): Promise<any>;
}
