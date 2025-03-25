import http from '@/core/http.service';
import BaseService from '@/services/base.service';
import { BoardDTO, BoardSearchDTO, BoardUpdateDTO } from '@/models/board';
import type { Page } from '@/core/page';

class BoardService extends BaseService {
    public getList(search: BoardSearchDTO): Promise<Page<BoardDTO>> {
        return super.request(http.get('/boards', search));
    }

    public get(id: number): Promise<BoardDTO> {
        return super.request(http.get(`/boards/${id}`));
    }

    public add(dto: BoardUpdateDTO): Promise<void> {
        return super.request(http.post('/boards', dto));
    }

    public update(id: number, dto: BoardUpdateDTO): Promise<void> {
        return super.request(http.put(`/boards/${id}`, dto));
    }

    public remove(id: number): Promise<void> {
        return super.request(http.delete(`/boards/${id}`));
    }
}

let boardService;
export default boardService = new BoardService();
