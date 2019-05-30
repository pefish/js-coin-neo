import '@pefish/js-node-assist';
export default class RpcRequester {
    _url: string;
    _username: string;
    _password: string;
    /**
     * 'host': '10.1.0.152',
     * 'port': 18332,
     * 'username': 'test',
     * 'password': '123456789',
     * 'ssl': false
     */
    constructor(config: any);
    request(method: any, params?: any[]): Promise<any>;
}
