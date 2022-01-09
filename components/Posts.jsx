import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "arbazalam01",
    userImg: "https://arbaz.tech/static/media/web-profileimage.06c3c674.jpg",
    img: "https://arbaz.tech/static/media/web-profileimage.06c3c674.jpg",
    caption: "Everything is Good.. Keep Up the Godd Work",
  },
  {
    id: "123",
    username: "arbazalam01",
    userImg: "https://arbaz.tech/static/media/web-profileimage.06c3c674.jpg",
    img: "https://arbaz.tech/static/media/web-profileimage.06c3c674.jpg",
    caption: "Everything is Good.. Keep Up the Godd Work",
  },
  {
    id: "123",
    username: "arbazalam01",
    userImg: "https://arbaz.tech/static/media/web-profileimage.06c3c674.jpg",
    img: "https://arbaz.tech/static/media/web-profileimage.06c3c674.jpg",
    caption: "Everything is Good.. Keep Up the Godd Work",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Posts;
