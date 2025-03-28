import { Box, Grid, Heading, List } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { NavItemsF } from "@/components/Home/footer/clauses/Nav.jsx";



export function UsefulLinks({ items = [], icon}) {
    return (
        <Box>
            <Heading color={{base:"pink", _dark:"violet"}}>Useful Links</Heading>
            <Grid pt="40px" color="white">
                <List.Root
                    justifyContent="center"
                    colorText="white"
                    variant="plain"
                    flexDirection={{base:"row", md:"column"}}
                    gap={1}
                    display={{ base: "flex", md: "flex" }}
                >
                    {items.map((item) => (
                        <NavItemsF key={item.label} {...item}  />
                    ))}
                </List.Root>
            </Grid>
        </Box>
    );
}

UsefulLinks.propTypes = {
    items: PropTypes.array,
    onToggle: PropTypes.func.isRequired,
    icon: PropTypes.elementType,
};
