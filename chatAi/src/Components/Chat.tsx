import { Flex } from "@chakra-ui/react";
import { useState } from "react";
// import Divider from "../components/Divider";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Message";
import api from "../api/api";


const Chat = () => {
    const [messages, setMessages] = useState([
        { from: "computer", text: "Hi, My Name is Gemini what can i help u " },
        
    ]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = async() => {
        if (!inputMessage.trim().length) {
            return;
        }
        const data = inputMessage;

        setMessages((old) => [...old, { from: "me", text: data }]);
        setInputMessage("");

        try{
            const response = await api.get(`/?question=${data}`);
            console.log("this is from the response :", response.data.answer);
            
            // function separateText(text: string){ 
            //     text = text.replace(/\*\*/g, '\n'); 
            //     return text; 
            // }
            
            setTimeout(() => {
                setMessages((old) => [...old, { from: "computer", text: response.data.answer 
            }]);
            }, 1000);
        }catch(err){
            console.log(err);
        }
        
    };

    return (
        <Flex w="100%" h="100vh" justify="center" align="center">
        <Flex w="100%" h="90%" flexDir="column" className="border border-green-500">
            <Header />
            <hr />
            <Messages messages={messages} />
            <Footer
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                handleSendMessage={handleSendMessage}
            />
        </Flex>
        </Flex>
    );
};

export default Chat;
