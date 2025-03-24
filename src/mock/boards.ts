// axios
const boards = [
    { id: 1, title: '제목1', content: '내용1', username: '작성자1', regdate: new Date(), moddate: null },
    { id: 2, title: '제목2', content: '내용2', username: '작성자2', regdate: new Date(), moddate: null },
    { id: 3, title: '제목3', content: '내용3', username: '작성자3', regdate: new Date(), moddate: null },
    { id: 4, title: '제목4', content: '내용4', username: '작성자4', regdate: new Date(), moddate: null },
    { id: 5, title: '제목5', content: '내용5', username: '작성자5', regdate: new Date(), moddate: null },
    { id: 6, title: '제목6', content: '내용6', username: '작성자6', regdate: new Date(), moddate: null },
];

export function getList() {
    return boards;
}
