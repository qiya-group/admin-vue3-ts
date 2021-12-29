// method: 'POST', // *GET, POST, PUT, DELETE, etc.
// mode: 'cors', // no-cors, *cors, same-origin
// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// credentials: 'same-origin', // include, *same-origin, omit
// headers: {
//   'Content-Type': 'application/json'
//   // 'Content-Type': 'application/x-www-form-urlencoded',
// },
// redirect: 'follow', // manual, *follow, error
// referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// body: JSON.stringify(data) // body data type must match "Content-Type" header

class FetchHooks {
    private baseUrl: string = '/api';
    public constructor(){};
    beforeFetch(ctx: any){
        let {url, headers={}, method, params, ...other } = ctx;
        let reqUrl= this.baseUrl + url;
       
        if(!method || (method && method.toLowerCase() == 'get' )){
            method = 'GET';
            const args: string = new URLSearchParams(params).toString();
            reqUrl = args ? reqUrl+'?'+args : reqUrl;
        }
        
        let body;
        if(method.toLowerCase() == 'post' && params){
            if(!headers['Content-Type']){
                headers['Content-Type'] = 'application/json;charset=UTF-8';
                body = JSON.stringify(params);
            }
            if(headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1){
                body = new URLSearchParams(params).toString()
            }
        }
       
        const config = {
            method, params, headers,...other 
        }
        if(body){
            config.body = body;
        }

        return {
            url: reqUrl,
            options: config
        }

    }

    async afterFetch(response: Response){
        const res = await response.json();
        return res;
    }

    onErrorFetch(error: Response){
        let { status, statusText, url } = error;
        if(url && url.indexOf('api') !== -1 ){
            const reg = url.split('api').filter((v)=> v);
            url = reg.pop() || '';
        }
        console.error({status, statusText, url});
        return {
            code: status,
            messgae: statusText,
            url: url
        }
        
    }
}

class Fetch {
    private  TIME_OUT: number = 8 * 1000;
    private  hooks;
    constructor(){
        this.hooks = new FetchHooks();
    }
    
    private async initFetch(reqUrl: string, params?: FetchParams , config?: any): Promise<any>{
        const [err, data] = await this.handleResponse(this.handleFetch(reqUrl, params, config));
        if(err){
            return this.hooks.onErrorFetch(err)
            
        }
        return data;
    }
    
    private async handleResponse(response: Promise<any>): Promise<any>{
        return await response
                .then(data => [null, data])
                .catch(err => [err, null])
    }

    private handleFetch(reqUrl: string, params?: FetchParams , config?: any){
        const { timeout = this.TIME_OUT, ...other } = config || {};
        const controller = new AbortController();
        const { url, options }  = this.hooks.beforeFetch({url:reqUrl, params, ...other});
        return new Promise((resolve,reject)=>{
            const id = setTimeout(() => {
                reject(new Response('timeout', { status: 504, statusText: 'timeout' }));
                controller.abort();
                clearTimeout(id);
            }, timeout);
            fetch(url, {...options, signal: controller.signal  }).then((response: Response)=>{
                if(response.status !== 200 ){
                    reject(response);
                }else {
                    resolve(this.hooks.afterFetch(response));
                }
            });
        })
    }

    getFetch(url: string, params?: FetchParams, options?: any):Promise<any>{
        return this.initFetch(url, params, options);
    }

    postFetch(url: string, params?: FetchParams, options?: any):Promise<any>{
        options = Object.assign({}, options,{method: 'POST'})
        return this.initFetch(url, params, options);
    }
   
}

class HttpFetch {
    public static instance: Fetch;
    private constructor(){}
    public static getInstance(){
        if(!HttpFetch.instance){
            HttpFetch.instance = new Fetch();
        }
        return HttpFetch.instance;
    }
}

export default HttpFetch.getInstance();


interface FetchParams {
    [index:string]: any;
}