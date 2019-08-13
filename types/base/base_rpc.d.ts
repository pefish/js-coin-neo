import RpcRequester from '../rpc_requester';
import { RPCClient } from '@cityofzion/neon-core/lib/rpc';
export default class BaseNeoRpcHelper extends RpcRequester {
    client: RPCClient;
    constructor(url: any);
    getClient(): RPCClient;
    getNewAddress(): Promise<any>;
    getWalletBalance(assetId: any): Promise<any>;
    getAccountBalance(address: any, assetId: any): Promise<any>;
    sendToAddress(assetId: any, address: any, amount: any, fee?: number, changeAddress?: any): Promise<any>;
}
