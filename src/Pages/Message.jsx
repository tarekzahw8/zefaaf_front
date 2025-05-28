import { useState, useEffect, useRef } from "react";
import avatar from "../assets/Avatar man with background.jpg";
import avatar2 from "../assets/Avatar girl with background .jpg";
import { FaSearch } from "react-icons/fa";
// import { FaMessage } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion"; // استيراد framer-motion للأنيميشن
// import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
// import { MdArrowBack } from "react-icons/md";

const Message = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      clientName: "محمد محمود",
      avatar: avatar,
      messages: [
        {
          id: 1,
          text: "مرحبًا! كيف يمكنني مساعدتك؟",
          sender: "أنت",
          time: "10:00 AM",
        },
        {
          id: 2,
          text: "أحتاج إلى معلومات حول منتجاتكم.",
          sender: "هم",
          time: "10:05 AM",
        },
      ],
    },
    {
      id: 2,
      clientName: "علي أحمد",
      avatar: avatar,
      messages: [
        { id: 1, text: "السلام عليكم.", sender: "أنت", time: "10:10 AM" },
        {
          id: 2,
          text: "هل يمكنني معرفة تفاصيل الطلب؟",
          sender: "هم",
          time: "10:12 AM",
        },
      ],
    },
    {
      id: 3,
      clientName: "سارة خالد",
      avatar: avatar2,
      messages: [
        {
          id: 1,
          text: "أحتاج مساعدة في استرجاع منتج.",
          sender: "أنت",
          time: "10:15 AM",
        },
        {
          id: 2,
          text: "بالطبع، كيف يمكنني مساعدتك؟",
          sender: "هم",
          time: "10:20 AM",
        },
      ],
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [hoveredMessageId, setHoveredMessageId] = useState(null);
  // const [showChat, setShowChat] = useState(false);
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: selectedConversation.messages.length + 1,
        text: newMessage,
        sender: "أنت",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
      const updatedConversation = {
        ...selectedConversation,
        messages: [...selectedConversation.messages, newMsg],
      };
      setSelectedConversation(updatedConversation);
      setConversations(
        conversations.map((conv) =>
          conv.id === selectedConversation.id ? updatedConversation : conv
        )
      );
      setNewMessage("");

      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  const handleEditMessage = (messageId) => {
    const messageToEdit = selectedConversation.messages.find(
      (msg) => msg.id === messageId
    );
    if (messageToEdit) {
      setNewMessage(messageToEdit.text);
      setEditingMessageId(messageId);
    }
  };

  const handleUpdateMessage = () => {
    if (editingMessageId) {
      const updatedMessages = selectedConversation.messages.map((msg) => {
        if (msg.id === editingMessageId) {
          return { ...msg, text: newMessage };
        }
        return msg;
      });

      const updatedConversation = {
        ...selectedConversation,
        messages: updatedMessages,
      };
      setSelectedConversation(updatedConversation);
      setConversations(
        conversations.map((conv) =>
          conv.id === selectedConversation.id ? updatedConversation : conv
        )
      );
      setNewMessage("");
      setEditingMessageId(null);
    }
  };

  const handleDeleteMessage = (messageId) => {
    const updatedMessages = selectedConversation.messages.filter(
      (msg) => msg.id !== messageId
    );
    const updatedConversation = {
      ...selectedConversation,
      messages: updatedMessages,
    };
    setSelectedConversation(updatedConversation);
    setConversations(
      conversations.map((conv) =>
        conv.id === selectedConversation.id ? updatedConversation : conv
      )
    );
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation]);

  useEffect(() => {
    const handleScroll = () => {
      const container = messagesContainerRef.current;
      if (container) {
        setShowScrollButton(container.scrollTop > 50);
      }
    };

    const container = messagesContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [selectedConversation]);

  const filteredConversations = conversations.filter((conv) =>
    conv.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editingMessageId ? handleUpdateMessage() : handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-screen w-[100%] scroll mx-auto  rounded-lg shadow-lg">
      {/* قسم قائمة المحادثات */}
      <div className="w-[28%] max-md:px-3 max-md:pt-[80px] px-6 max-md:w-[100%] bg-[#20234d] rounded-lg p-4">
        <div className="flex items-center mb-4 pt-4 justify-between">
          <h2 className="text-start text-xl font-bold  ">المحادثات</h2>
          <AiOutlineMessage className="w-8 h-5 text-[white]" />
        </div>
        <div className="w-full relative">
          <FaSearch className="absolute left-2 w-[25px] h-[25px] text-gray-300 top-[20%]" />
          <input
            type="text"
            placeholder="ابحث عن اسم المستخدم..."
            className="text-indigo-950 px-2 py-3 w-full outline-none rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="flex  flex-col items-start pt-4 w-full gap-2">
          {filteredConversations.map((conv) => (
            <li
              key={conv.id}
              className="py-2 w-full flex items-center justify-between cursor-pointer rounded-xl hover:bg-indigo-500"
              onClick={() => setSelectedConversation(conv)}
            >
              <div className="flex relative items-center w-full justify-start gap-2">
                <img
                  src={conv.avatar}
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <span>{conv.clientName}</span>
                  <div className="flex line-clamp-1 items-center justify-between">
                    <span className="text-gray-400 w-[120px] max-md:w-[100%] line-clamp-1 text-sm">
                      {conv.messages[conv.messages.length - 1].text}
                    </span>
                    <span className="ml-2 absolute left-0 text-[10px]">
                      {conv.messages[conv.messages.length - 1].time}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* قسم محادثة العميل المحدد */}
      <div className="flex-1 max-md:hidden flex flex-col">
        <div className="flex items-center p-2 button_bg rounded-[15px] gap-4  ">
          <img
            src={selectedConversation.avatar}
            alt="Client"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">
              {selectedConversation.clientName}
            </h3>
            <p className="text-sm text-gray-200">أونلاين</p>
          </div>
        </div>

        <div
          className="flex-1 p-4  flex flex-col-reverse scroll-container overflow-y-auto"
          ref={messagesContainerRef}
        >
          <div className="flex flex-col gap-2">
            {selectedConversation.messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`p-2 rounded-lg text-white w-fit transition duration-500 ${message.sender === "أنت"
                    ? "bg-[#5271ff] self-end"
                    : "bg-gray-500 self-start"
                  }`}
                onMouseEnter={() => setHoveredMessageId(message.id)}
                onMouseLeave={() => setHoveredMessageId(null)}
              >
                <div className="flex  relative items-center">
                  {hoveredMessageId === message.id && (
                    <div
                      className={`mr-2 absolute ${message.sender === "أنت"
                          ? "right-[-50px]"
                          : "left-[-50px]"
                        }  space-x-2`}
                    >
                      <button onClick={() => handleEditMessage(message.id)}>
                        <FaEdit className="text-white" />
                      </button>
                      <button onClick={() => handleDeleteMessage(message.id)}>
                        <FaTrash className="text-white" />
                      </button>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
                <p className="text-[10px] text-gray-300">{message.time}</p>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {showScrollButton && (
          <button
            className="absolute bottom-24    bg-blue-500 text-white rounded-full p-2 shadow-lg"
            onClick={scrollToBottom}
          >
            <FaArrowDown className="w-6 h-6" />
          </button>
        )}

        <div className="flex items-center p-2 border-t border-gray-300">
          <input
            type="text"
            placeholder="اكتب رسالة..."
            className="flex-1 outline-none h-[50px] text-[#131652] rounded-r-lg px-2 py-1 bg-[#E6E6E6]"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ml-2 px-4 py-1 button_bg h-[50px] text-white rounded-l-lg"
            onClick={editingMessageId ? handleUpdateMessage : handleSendMessage}
          >
            {editingMessageId ? "تعديل" : "إرسال"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
