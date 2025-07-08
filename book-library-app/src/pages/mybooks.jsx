import "./mybooks.css";
import LoadingIndicator from "../components/loadingIndicator";
import { fetchMyBooks, updateBook } from "../reduxfiles/action";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorIndicator from "../components/errorIndicator";

const MyBooks = () => {
  const dispatch = useDispatch();
  const { mybooks, isLoading, isErr } = useSelector((state) => state.book);
  const { token } = useSelector((state) => state.auth);
  const [flag, setFlag] = useState(false);

  const handleStatus = async (e, id) => {
    const payload = {
      status: e.target.value,
    };
    try {
      dispatch(
        updateBook(
          `${import.meta.env.VITE_BASE_URL}/api/mybooks/${id}/status`,
          payload,
          token
        )
      );
      setFlag(!flag);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRating = async (e, id) => {
    const payload = {
      rating: e.target.value,
    };
    try {
      dispatch(
        updateBook(
          `${import.meta.env.VITE_BASE_URL}/api/mybooks/${id}/rating`,
          payload,
          token
        )
      );
      setFlag(!flag);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dispatch(fetchMyBooks(`${import.meta.env.VITE_BASE_URL}/api/mybooks`, token));
  }, [dispatch, flag]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isErr) {
    return <ErrorIndicator err={isErr} />;
  }

  return (
    <>
      <Box className="my-books">
        {mybooks.length == 0 && (
          <Box className="empty-shell">
            <Heading>Your Book-Shell is Empty Add Books !</Heading>
          </Box>
        )}
        {mybooks?.map((item, idx) => (
          <Box shadow={"md"} key={idx} className="book-card">
            <VStack>
              <Image src={item.bookId.coverImage} alt="cover-image" />
              <Text>{item.bookId.title}</Text>
              <Text>{item.bookId.author}</Text>
              <Text
                style={{ color: item.bookId.availability ? "green" : "red" }}
              >
                {item.bookId.availability ? "Available" : "Not-Available"}
              </Text>
              <Text>Status : {item.status}</Text>
              <Text>Rating : {item.rating}/5</Text>
              <Box>
                <select onChange={(e) => handleStatus(e, item._id)}>
                  <option>Update Status</option>
                  <option value={"Currently Reading"}>Currently Reading</option>
                  <option value={"Read"}>Read</option>
                </select>
                <select onChange={(e) => handleRating(e, item._id)}>
                  <option>Give Rating</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </Box>
            </VStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MyBooks;

// {mybooks?.map((item, idx) => (
//           <Box key={idx} className="book-card">
//             <Image src="" alt="cover-image" />
//             <Text>{item.bookId.title}</Text>
//             <Text>{item.bookId.author}</Text>
//             <Text style={{ color: item.bookId.availability ? "green" : "red" }}>
//               {item.bookId.availability ? "Available" : "Not-Available"}
//             </Text>
//             <Text>{item.status}</Text>
//             <Text>{item.rating}</Text>
//           </Box>
//         ))}
