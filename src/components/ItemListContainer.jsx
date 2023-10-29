import { Box, Stack, Image } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
<Stack marginTop="100px">
    <Box  display="inline-block" justifyContent= "center" alignItems="center" mx="auto" boxSize="500px" >
      <Image  src={'https://i.pinimg.com/1200x/89/a4/73/89a4739e69dd1c88dca8905fc90baf23.jpg'}></Image>
      <Box  fontSize="25px" as="cite">{greeting}</Box>
    </Box>
    </Stack>
  )
}

export default ItemListContainer