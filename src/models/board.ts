import { SearchDTO } from './search';

export class BoardSearchDTO extends SearchDTO {
    title: string = '';

    username: string = '';
}

export class BoardDTO {
    id: number = 0;

    title: string = '';

    content: string = '';

    username: string = '';

    regdate!: Date;

    moddate?: Date | null;
}

export class BoardUpdateDTO {
    title: string = '';

    content: string = '';
}
