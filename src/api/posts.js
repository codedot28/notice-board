const posts = [
  { id: 1, title: '제목1', content: '내용1', createdAt: '2024-07-19' },
  { id: 2, title: '제목2', content: '내용2', createdAt: '2024-07-20' },
  { id: 3, title: '제목3', content: '내용3', createdAt: '2024-07-21' },
  { id: 4, title: '제목4', content: '내용4', createdAt: '2024-07-22' },
  { id: 5, title: '제목5', content: '내용5', createdAt: '2024-07-23' },
  { id: 6, title: '제목6', content: '내용6', createdAt: '2024-07-24' },
  { id: 7, title: '제목7', content: '내용7', createdAt: '2024-07-25' },
];

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  // eslint-disable-next-line prettier/prettier
  return posts.find((item) => item.id === id);
}
