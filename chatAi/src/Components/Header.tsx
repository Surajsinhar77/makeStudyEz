import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex w="100%" padding={2} border={"black"}>
            <Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" className="text-sm">
                <AvatarBadge boxSize="0.8em" bg="green.500" />
            </Avatar>
            <Flex flexDirection="column" mx="5" justify="center">
                <Text fontSize="lg" fontWeight="bold" color={"black"}>
                    User
                </Text>
                <Text color="green.500">Online</Text>
            </Flex>
        </Flex>
    );
};

export default Header;
