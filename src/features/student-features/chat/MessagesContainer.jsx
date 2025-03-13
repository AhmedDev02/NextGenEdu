import { useSelector } from "react-redux";
import styled from "styled-components";
import Message from "./Message";

const StyledChatContainer = styled.div`
  margin-top: auto;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  direction: rtl;
  height: 75%;
  overflow-y: auto;
  overflow-x: hidden;
  border-bottom: 2px var(--color-grey-500) solid;
  &::-webkit-scrollbar {
    width: 16px; /* Scrollbar width */
    /* background-color: red; */
  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0; /* Track color */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2a3248; /* Scroll thumb color */
    border-radius: 10px;
    border: 2px solid #e0e0e0;
  }
`;

function MessagesContainer() {
  const messages = [
    { id: 1, text: "شباب في حد عنده فكرة عن مشروع الروضة؟", sender: "أنت" },
    { id: 2, text: "أنا عندي فكرة 🌟", sender: "أحمد" },
    { id: 3, text: "فكرة حلوة يا أحمد 👍", sender: "متولي" },
    { id: 4, text: "موافق! 📝", sender: "أنت" },
    { id: 5, text: "شباب في حد عنده فكرة عن مشروع الروضة؟", sender: "أنت" },
    { id: 6, text: "أنا عندي فكرة 🌟", sender: "أحمد" },
    { id: 7, text: "فكرة حلوة يا أحمد 👍", sender: "متولي" },
    { id: 8, text: "موافق! 📝", sender: "أنت" },
    { id: 9, text: "شباب في حد عنده فكرة عن مشروع الروضة؟", sender: "أنت" },
    { id: 10, text: "أنا عندي فكرة 🌟", sender: "أحمد" },
    { id: 11, text: "فكرة حلوة يا أحمد 👍", sender: "متولي" },
    { id: 12, text: "موافق! 📝", sender: "أنت" },
    {
      id: 13,
      text: "شباب ىبتنيبيلارسيبرلاخيبلاريسلارنيبلاسرنسيلامبربنسلارنامارنلايمنبارلااينمرسلاايبنلارميبنمر في حد عنده فكرة عن مشروع الروضة؟",
      sender: "أنت",
    },
    { id: 14, text: "أنا عندي فكرة 🌟", sender: "أحمد" },
    { id: 15, text: "فكرة حلوة يا أحمد 👍", sender: "متولي" },
    { id: 16, text: "موافق! 📝", sender: "أنت" },
  ];

  const searchQuery = useSelector((state) => state.filter.searchQuery);
  const filteredMessages = messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyledChatContainer>
      {filteredMessages.map((msg) => (
        <Message
          key={msg.id}
          isUser={msg.sender === "أنت"}
          name={msg.sender}
          className={msg.sender === "أنت" ? "left" : "right"}
          text={msg.text}
        />
      ))}
    </StyledChatContainer>
  );
}

export default MessagesContainer;
