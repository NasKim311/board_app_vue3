import http, { type httpCallback } from '@/core/http.service';

export default class BaseService {
    protected reqs: httpCallback[] = [];

    public cancel(): void {
        for (const req of this.reqs) {
            console.log('HTTP CANCEL', req);
            req.cancel.abort();
        }

        this.reqs = [];
    }

    protected async request<T>(callback: httpCallback): Promise<T> {
        try {
            this.reqs.push(callback);
            const response = await callback.req;
            return response.data;
        } catch (error) {
            console.error('Request failed:', error);
            throw error;
        } finally {
            const index = this.reqs.indexOf(callback);
            if (index > -1) {
                this.reqs.splice(index, 1);
            }
        }
    }
}
