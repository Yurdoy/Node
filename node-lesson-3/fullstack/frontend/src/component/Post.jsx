import { useEffect, useState } from "react";
import axios from "axios";
const Posts = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function fn() {
      try {
        const res = await axios.get("http://127.0.0.1:3000/");
        console.log(res.data);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fn();
  }, []);
  console.log(post);
  return (
    <div>
      <h3>All Posts</h3>
      {post &&
        post.map((item) => (
          <div key={item.id}>
            {item.title} {item.body}
          </div>
        ))}
    </div>
  );
};
export default Posts;
