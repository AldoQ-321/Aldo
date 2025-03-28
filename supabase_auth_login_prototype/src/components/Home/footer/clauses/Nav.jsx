import {Button, Icon, Link, List, Text} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


export function NavItemsF({ label, uri, icon }) {
    return (
        <List.Item>

            <Button
                color="fg.muted"
                as={NavLink}
                to={uri}
                colorPalette="teal"
                variant="ghost"

                _hover={{ textDecoration: 'none', bg: 'gray.300' }}

            >

                    {icon && <Icon as={icon}  />} <Text display={{ base: "none", md:"flex"}}> {label} </Text>

            </Button>
        </List.Item>
    );
}

NavItemsF.propTypes = {
    label: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
};