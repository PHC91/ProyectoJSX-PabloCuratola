import React, {useState} from 'react'
import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Grid, Input, SimpleGrid, Stack } from '@chakra-ui/react';

const Suscripcion = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Se ha suscrito con el correo electrónico: ${email}`);
  };

  const validateEmail = (inputEmail) => {
    // Puedes agregar tu lógica de validación de correo electrónico aquí
    // Por ejemplo, puedes usar una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  return (
      <Grid templateColumns="1, 1fr" mt="100px" h="150" bgSize="cover" bgImage="https://png.pngtree.com/background/20210714/original/pngtree-food-fruits-hand-drawn-background-picture-image_1196758.jpg">
        <Center>
<Box  color="purple" textShadow="2px 2px 4px #333, 0px 0px 1em #fff">
    <h2>Enterate de las ultimas promociones!</h2>
</Box> 
</Center>
<Box>
<Center ml="400px">
<Grid templateColumns='repeat(2, 1fr)'>
    <Box  width="500px">
      <form onSubmit={handleSubmit}>
          <FormControl id="email" isInvalid={!isValidEmail}>
            <FormLabel></FormLabel>
            <Input
            bg="white"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={handleInputChange}
              />
            <FormErrorMessage>Ingresa un correo electrónico válido.</FormErrorMessage>
          </FormControl>
          </form>
          </Box>
<Box mt={2}> 
          <Button type="submit" colorScheme="teal" size="md" isLoading={!isValidEmail}>
            Suscribirse
          </Button>         
      </Box>
              </Grid>
              </Center>
              </Box>
              </Grid>
               )
};
export default Suscripcion