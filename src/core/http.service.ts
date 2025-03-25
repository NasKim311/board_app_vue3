import axios from 'axios';
export type httpCallback = { req: Promise<any>; cancel: AbortController };
const apiBase = (import.meta as any).env.VITE_API_URL; // Vue 환경 변수로 변경

class Http {
    private getOption(headers?: any, params?: any): any {
        const controller = new AbortController();

        let result: any = headers ? { ...headers } : {};

        if (params) {
            result['params'] = JSON.parse(JSON.stringify(params));
        }

        result['signal'] = controller.signal;

        return { header: result, controller: controller };
    }

    public get(uri: string, params?: any, headers?: any): httpCallback {
        try {
            let opt = this.getOption(headers, params);
            //console.log("options",opt);
            return { req: axios.get(apiBase + uri, { headers: opt.header, params: opt.header.params }), cancel: opt.controller };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    public post(uri: string, data: any, headers?: any): httpCallback {
        try {
            let opt = this.getOption(headers, null);
            //console.log("options",opt);
            return { req: axios.post(apiBase + uri, data, { headers: opt.header }), cancel: opt.controller };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    public put(uri: string, data: any, headers?: any): httpCallback {
        try {
            let opt = this.getOption(headers, null);
            //console.log("options",opt);
            //return {req : axios.put(apiBase + uri , {header : opt.header , data : data} ) , cancel : opt.controller}
            return { req: axios.put(apiBase + uri, data, { headers: opt.header }), cancel: opt.controller };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    public delete(uri: string, headers?: any): httpCallback {
        try {
            let opt = this.getOption(headers, null);
            //console.log("options",opt);
            return { req: axios.delete(apiBase + uri, { headers: opt.header }), cancel: opt.controller };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

// 인스턴스를 하나로 만들어서 관리
let http;
export default http = new Http();
