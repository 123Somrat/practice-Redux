import Heading from "../components/Heading";
import Post from "../components/Post";
import post from "../redux/fetchingData/FetchTodo";

export default function Home() {
  const useGetAllPosts = post.endpoints.getAllPosts.useQuery;
  const { data, error, isLoading } = useGetAllPosts();

  if (isLoading) {
    return (
      <div
        style={{
          width: "1000px",
          height: "250px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            border: "2px solid green",
            margin: "0 auto",
            width: "200px",
            height: "30px",
            padding: "5px",
          }}
        >
          Data is loading......
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          width: "1098px",
          height: "100px",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            width: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p>404</p>
          <p>{error.error}</p>
          <p></p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Khaja ajmir Traders" />
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data && data.map((post) => <Post post={post} />)}
      </div>
    </div>
  );
}
