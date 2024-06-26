import { Post as post } from "../redux/fetchingData/FetchTodo";

export default function Post({ post }: { post: post }) {
  const { userId, id, title, body } = post;
  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        border: "1px solid green",
        padding: "10px",
      }}
    >
      <p>{id}</p>
      <p>{userId}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}
