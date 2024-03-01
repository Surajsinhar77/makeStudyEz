import { Flex, Input, Button } from "@chakra-ui/react";

interface checktyping{
    inputMessage : string,
    setInputMessage: any,
    handleSendMessage : any,
}

const Footer = ({ inputMessage, setInputMessage, handleSendMessage } : checktyping) => {
    return (
        <Flex w="100%" mt={5} padding={2} className="flex items-center border">
            <Input

                placeholder="Type Something..."
                border={"black"}
                borderRadius="none"
                color={"black"}
                _focus={{
                    border: "0.5px solid black",
                }}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handleSendMessage();
                    }
                }}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
            />
            <Button
                bg="black"
                color="white"
                borderRadius="none"
                _hover={{
                    bg: "white",
                    color: "black",
                    border: "1px solid black",
                }}
                disabled={inputMessage.trim().length <= 0}
                onClick={handleSendMessage}
            >
                Send
            </Button>
        </Flex>
    );
};

export default Footer;
