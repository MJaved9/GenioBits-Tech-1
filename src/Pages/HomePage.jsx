import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Divider,
  Flex,
  Spacer,
  Select,
  Link
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { getMEALDetailsAPI } from "../Redux/AppReducer/actionCreator";
const HomePage = () => {
  // https://note-mock-14.onrender.com/meals?_page=1&_limit=5&q=Lamb
  const t=localStorage.getItem("token")
    console.log(t)
  const data = useSelector((state) => state.AppReducer.data);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMEALDetailsAPI(1));
    console.log(data)
  }, []);
if(!t){
    return <Box>
        <Heading>Please Login</Heading></Box>
}
else{
  return (
    <Box>
      <Box>
        <Filter/>
      </Box>
      <Box p="5%">
        <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px">
          {data.map((ele, i) => {
            return (
              <Card maxW="sm" key={i}>
                <CardBody alignItems={"center"}>
                  <Image
                    src={ele.strMealThumb}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />  
                  <Stack mt="6" spacing="3" textAlign={"justify"}>
                    <Heading size="md">{ele.strMeal}</Heading>
                    <Text>
                      <b>Area:{ele.strArea}</b>
                    </Text>
                    <Text>
                      <b>category:</b>
                      {ele.strCategory}
                    </Text>
                    <Text>
                      {ele.description}
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      <Link href={ele.strYoutube}><Button paddingLeft={20} paddingRight={20} bg="black" color="white">Watch on Youtube</Button></Link>
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="0">
                    <Link href={ele.id}><Button paddingLeft={20} paddingRight={20} bg="black" color="white">Read Recipes</Button></Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
}

export default HomePage