import { useState, useEffect } from "react";
import { Box, VStack, Button, Text, Flex, Heading } from "@chakra-ui/react";
import { FiGrid, FiSettings, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { FaTemperatureHigh, FaRegBell } from "react-icons/fa";

import { useNavigate, useLocation, Link } from "react-router-dom";
import supabase from "@/api/supabaseClient.js";

const SidebarUs = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determinar la sección seleccionada basada en la URL actual
    const [selected, setSelected] = useState("user");

    // Actualiza el estado 'selected' cuando cambia la ubicación
    useEffect(() => {
        const path = location.pathname.split('/');
        if (path.length > 1) {
            setSelected(path[2]);
        } else {
            setSelected("user");
        }
    }, [location]);

    const singOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    };

    return (
        <Box   bg="blue.700" maxWidth={{ base: "70px", md:"250px"}} p={2} shadow="md" borderRadius="md" alignItems="center">
            <Flex display="flex" >
            <VStack  gap={6}  mt={3}  spacing={2} justifyContent="flex-start" >
                <Heading display={{ base: "none", md:"flex"}} fontSize="lg" color="white" >Barra lateral</Heading>

                <Button
                    bg={selected === "dashboard" ? "blue.400" : "transparent"}
                    color={selected === "dashboard" ? "white" : "gray.200"}
                    onClick={() => navigate("dashboard")}
                    w={{base:"max", md:"full"}}
                    display={{ base: "max", md:"flex" }}



                >
                    <FiGrid m={0} />
                    <Text display={{ base: "none", md:"flex"}}>Dashboard</Text>
                </Button>

                <Button

                    bg={selected === "sensores" ? "blue.400" : "transparent"}
                    color={selected === "sensores" ? "white" : "gray.200"}
                    onClick={() => navigate("sensores")}
                    w={{base:"max", md:"full"}}



                >
                    <FaTemperatureHigh m={0}/>
                    <Text display={{ base: "none", md:"flex"}}>Sensores</Text>
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "historial" ? "blue.400" : "transparent"}
                    color={selected === "historial" ? "white" : "gray.200"}
                    onClick={() => navigate("historial")}
                    w={{base:"max", md:"full"}}

                    alignItems="center"


                >
                    <FaRegBell  m={0} />
                    <Text display={{ base: "none", md:"flex"}}>Notificaciones</Text>
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "configuraciones" ? "blue.400" : "transparent"}
                    color={selected === "configuraciones" ? "white" : "gray.200"}
                    onClick={() => navigate("configuraciones")}
                    w={{base:"max", md:"full"}}


                >
                    <FiSettings  m={0}/>
                    <Text display={{ base: "none", md:"flex"}}>configuraciones</Text>
                </Button>

                <Button
                    variant="ghost"
                    bg={selected === "soporte" ? "blue.400" : "transparent"}
                    color={selected === "soporte" ? "white" : "gray.200"}
                    onClick={() => navigate("soporte")}
                    w={{base:"max", md:"full"}}
                    mt="40vh"
                    style={{ marginRight: "8px" }}
                >
                    <FiHelpCircle  m={0}/>
                    <Text display={{ base: "none", md:"flex"}}>Soporte</Text>
                </Button>

                <Button onClick={singOut}
                        m={0}
                        w={{base:"max", md:"full"}}
                        colorScheme="blue" >
                    <FiLogOut style={{ color: "red" }}/>
                    <Text display={{ base: "none", md:"flex"}}>Cerrar sesión</Text>
                </Button>
            </VStack>
            </Flex>
        </Box>
    );
};

export default SidebarUs;