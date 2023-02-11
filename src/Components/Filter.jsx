import { Box, Button, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { FilterMEALDetailsAPI} from "../Redux/AppReducer/actionCreator";

const Filter = () => {
  const [filter,setFilter]=useState(null);
  const [query,setQuery]=useState(null);
  const [sortByage,setSortByage]=useState("asc")
  const dispatch=useDispatch();

  useEffect(() => {
    
    console.log("filters",filter);
    if(filter){
      dispatch(FilterMEALDetailsAPI(`https://mock-4-json-api.onrender.com/dogs?_page=1&_limit=10&gender=${filter}`))

    }
 
    else if(query){
      dispatch(FilterMEALDetailsAPI(`https://mock-4-json-api.onrender.com/dogs?_page=1&_limit=10&q=${query}`))

    }
    else if(sortByage){
      if(sortByage=="asc"){
        setSortByage("desc")
      }
      else{
        setSortByage("desc")
      }
      dispatch(FilterMEALDetailsAPI(`https://mock-4-json-api.onrender.com/dogs?_sort=age&_order=${sortByage}`))
    }
  
    
   
  }, [filter,query]);

  return (
    <Box boxShadow="lg" w="78%" m="auto" rounded='md'  h="100px" marginTop="20px">
      
      
    
      <SimpleGrid  minChildWidth='120px'>
        <Box w="70%" m="auto">
        <Text>Search</Text>
          <Input placeholder="Search" type="text" name="langauge" onChange={(e)=>setQuery(e.target.value)}/>
        </Box>
    
    
         </SimpleGrid>
        
      
     
     
    </Box>
  );
};

export default Filter;
