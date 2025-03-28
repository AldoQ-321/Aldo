import {Flex, Box} from "@chakra-ui/react";
import {NavbarHo} from "@/components/Home/header/NavBar.jsx";
import Home from "@/pages/home/Home.jsx";
import {Footer} from "@/components/Home/footer/Footer.jsx"

export function HomeLayout() {

    return (
        <Flex w="full" h="full" spacing={0} display="flex" flexDirection="column">
            <Box flex="1" >
            <NavbarHo />
            </Box>

            <Footer  />

        </Flex>
    );
}