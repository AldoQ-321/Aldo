import { Box, Grid, Heading, List } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {NavItemsF} from "@/components/Home/footer/clauses/Nav.jsx";


export function FollowUs({ items = []}) {

    return (
        <Box>
            <Heading color="fg.muted">Siguenos</Heading>
            <Grid pt="40px" color="white">
                <List.Root
                    justifyContent="center"
                    colorText="white"
                    variant="plain"
                    flexDirection={{base:"row", md:"column"}}
                    gap={1}

                >
                    {items.map((item) => (
                        <NavItemsF key={item.label} {...item} />
                    ))}
                </List.Root>
            </Grid>
        </Box>
    )

}

FollowUs.propTypes = {
    items: PropTypes.array,
    onToggle: PropTypes.func.isRequired
};