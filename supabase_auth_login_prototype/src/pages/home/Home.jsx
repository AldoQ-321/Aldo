import {Link} from "react-router-dom";

import {Box, Flex, Container, Image, Heading, Text} from "@chakra-ui/react";





function Home() {

    return (

        <>

            <Box>

                <Container maxW={1400}>

                    <Flex gap="20px" my="25px" px={{ lg: '50px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }}>

                        <Box flexBasis="60%">

                            <Heading as="h1" textStyle="4xl" color={{base:"#072C51", _dark:"white"}}>Explora sobre datos ambientales</Heading>

                            <Text>Conoce, predice y analisa los datos ambientales de la ciudad de juliaca asi esdasdasdasdasdsmdsdksmks</Text>

                        </Box>

                        <Box flexBasis="60%">

                            <Image mx="auto" src="/PORTADA.png"/>

                        </Box>



                    </Flex>

                </Container>

            </Box>

            <Box maxW="full" maxH="40xpx" bg="#CDF720" color="green">h</Box>

        </>

    );

}



export default Home;