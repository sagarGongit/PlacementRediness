import "./home.css";
import ErrorIndicator from "../indicator/errorIndicator";
import LoadingIndicator from "../indicator/loadingIndicator";
import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState({ isLoading: false, error: null });
  const navigate = useNavigate();

  const FetchPost = async () => {
    setStatus({ isLoading: true, error: null });
    try {
      const res = await axios.get(`https://dummyjson.com/posts`);
      if (res.status === 200) {
        setBlogs(res.data.posts);
        setStatus({ isLoading: false, error: null });
      }
    } catch (error) {
      console.log(error.message);
      setStatus({ isLoading: false, error: error.message });
    }
  };

  useEffect(() => {
    FetchPost();
  }, []);

  if (status.isLoading) {
    return <LoadingIndicator />;
  }

  if (status.error) {
    return <ErrorIndicator err={status.error} />;
  }

  return (
    <>
      <Box className="blogs">
        {blogs?.map((post) => (
          <Box shadow={"lg"} className="blog" key={post.id}>
            <Box>
              <Text>{post.title}</Text>
            </Box>
            <Box>
              <Text>{post.body}</Text>
            </Box>
            <Box className="tag">
              {post.tags.map((item, idx) => (
                <Text key={idx} fontWeight={"bold"}>
                  {item}
                </Text>
              ))}
            </Box>
            <Box>
              <Button onClick={() => navigate(`/post/${post.id}`)}>
                View Post
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
