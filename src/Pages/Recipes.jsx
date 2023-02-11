import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams,useParams } from "react-router-dom";
import { getMEALDetailsAPI } from "../Redux/AppReducer/actionCreator";
const Recipes = () => {
    let book=JSON.parse(localStorage.getItem("book"))||[]
    const [item,setItem]=useState("")
    const Pdata=useSelector((state) => state.AppReducer.data)
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
   
    const params = useParams();
    const id=params.meal_id
    useEffect(() => {
       if(Pdata.length===0){
         dispatch(getMEALDetailsAPI())
       }
     }, [Pdata.length]);
   
     useEffect(()=>{
        Pdata.map((ele,i)=>{
            if(id===ele.id){
                console.log(ele)
                setItem(ele)
            }
        })
       
     },[id,Pdata])
   const SendR=(ele)=>{
    book.push(ele)
    localStorage.setItem("book",JSON.stringify(book))
    alert("Saved....")
   }
  return (
    <Card maxW='xxl'>
  <CardBody>
    <Image
      src={item.strMealThumb}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      boxSize={"150px"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{item.strMeal}</Heading>
      <Text>
        {item.strInstructions}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        <Link href=""><Button bg="black" color="white" onClick={()=>SendR(item)}>Click For Save Recipes</Button></Link>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Text variant='solid' colorScheme='blue'>
        Main Ingredient :
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient1} and Measure {item.strMeasure1},
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient2} and Measure {item.strMeasure2},
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient3} and Measure {item.strMeasure3},
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient4} and Measure {item.strMeasure4},
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient5} and Measure {item.strMeasure5},
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient6} and Measure {item.strMeasure6},
      </Text>
      <Text variant='ghost' colorScheme='blue'>
        {item.strIngredient7} and Measure {item.strMeasure7}
      </Text>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Recipes