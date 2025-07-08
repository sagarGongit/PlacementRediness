import "./home.css";
import { addBook, fetchBooks } from "../reduxfiles/action";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "./loadingIndicator";
import ErrorIndicator from "./errorIndicator";
import { Toaster, toaster } from "./ui/toaster";

const Home = () => {
  const { books, isLoading, isErr } = useSelector((state) => state.book);
  const { isLogged, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const AddMyBook = async (id) => {
    try {
      if (!isLogged) {
        return toaster.create({
          title: "Please Login First!",
          duration: 1500,
          type: "warning",
        });
      }

      dispatch(addBook(`${import.meta.env.VITE_BASE_URL}/api/mybooks/${id}`, token));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    dispatch(fetchBooks(`${import.meta.env.VITE_BASE_URL}/api/books`));
  }, [dispatch]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isErr) {
    return <ErrorIndicator err={isErr} />;
  }

  return (
    <>
      <Box className="home">
        {books?.map((item) => (
          <Box key={item._id} shadow={"md"}>
            <VStack>
              <Image src={item.coverImage} alt="cover-image" />
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text style={{ color: item.availability ? "green" : "red" }}>
                {item.availability ? "Available" : "Not-Available"}
              </Text>
              <Button
                onClick={() => AddMyBook(item._id)}
                colorPalette={"orange"}
                variant={"solid"}
              >
                Want to Read
              </Button>
            </VStack>
          </Box>
        ))}
      </Box>
      <Toaster />
    </>
  );
};

export default Home;
