import { useParams } from "react-router-dom";
import "./blog-details.css";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorIndicator from "../indicator/errorIndicator";
import LoadingIndicator from "../indicator/loadingIndicator";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [status, setStatus] = useState({ isLoading: false, error: null });

  const FetchBlog = async () => {
    setStatus({ isLoading: true, error: null });
    try {
      const res = await axios.get(`https://dummyjson.com/posts/${id}`);
      if (res.status === 200) {
        setBlog(res.data);
        setStatus({ isLoading: false, error: null });
      }
    } catch (error) {
      console.log(error.message);
      setStatus({ isLoading: false, error: error.message });
    }
  };

  useEffect(() => {
    FetchBlog();
  }, [id]);

  if (status.isLoading) {
    return <LoadingIndicator />;
  }

  if (status.error) {
    return <ErrorIndicator err={status.error} />;
  }

  const { title, body, tags } = blog;

  return (
    <>
      <Box className="blog-detail">
        <Heading>{title}</Heading>
        <Text>{body}</Text>

        <Box>
          {tags?.map((val, idx) => (
            <Text key={idx}>{val}</Text>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default BlogDetail;
