export class BoardDTO {
    id: number = 0;

    title: string = '';

    content: string = '';

    username: string = '';

    regdate?: Date;

    moddate?: Date | null;
}
