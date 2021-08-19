import Post from './models/posts';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스터#${i}`,
    body: 'asddddddddddddddddddasdasdasdasdasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    tags: ['fakeData', 'abcd'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
