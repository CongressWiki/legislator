import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Message from '@components/molecules/Message';
import Avatar from '@components/atoms/Avatar';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { User } from '@type/hasura';
import AutoComplete from '@components/atoms/AutoComplete';

const NANCI_PELOSI_IMG =
  'https://usacounts.com/static/41b2ff95c7960d73526fe2b2aded1820/80ea3/P000197.avif';

export type PrivateChatBoxProps = {
  userProfile: User;
};

export type Decision = Record<string, () => void>;

const PrivateChatBox = ({ userProfile }: PrivateChatBoxProps) => {
  const [messages, setMessages] = useState([]);
  const [decisions, setDecisions] = useState<Decision | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [botMessageIndex, setBotMessageIndex] = useState(0);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);

  const messageFeed = useRef(null);

  const botMessages: Array<string | Decision> = [
    "So you're my new assistant? Glad to have you.",
    'I need your help to identify which bills I should prioritize. Your task is to vote on bills that you believe are important.',
    `My phone shows your name as ${userProfile.first_name} ${userProfile.last_name}, is that correct?`,
    {
      "Yes that's my name.": async () => {
        await sendMessageAsBot('Excellent.');
        setBotMessageIndex(botMessageIndex + 1);
      },
      'No I go by another name.': async () => {
        await sendMessageAsBot('Okay what should I call you?');
      },
    },
    `Nice to meet you ${userProfile.first_name}. What state are you from?`,
  ];

  const handleMessageInput: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setInputMessage(event.target.value);
  };

  const handleMessageSubmit = () => {
    if (inputMessage.trim() === '') {
      return false;
    }

    insertMessage(true, inputMessage, userProfile.picture);
    setInputMessage('');
  };

  const handleAutoCompleteClick = (suggestion: string) => {
    insertMessage(true, suggestion, userProfile.picture);
    decisions[suggestion]();
    setDecisions(null);
  };

  const createTimestamp = () => {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const am_pm = date.getHours() >= 12 ? 'PM' : 'AM';
    const minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes + ' ' + am_pm;
  };

  const insertMessage = (
    isSentFromUser: boolean,
    message: string,
    picture: string
  ) => {
    const newMessage = {
      isSentFromUser,
      message,
      picture,
      time: createTimestamp(),
    };
    setMessages((prevState) => [...prevState, newMessage]);
  };

  const scrollToBottom = () => {
    messageFeed?.current.scrollTo({
      top: messageFeed?.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const onEnterPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleMessageSubmit();
    }
  };

  const wait = async (seconds?: number) => {
    const randomTimeDuration = () => 2000 + Math.random() * 20 * 100;
    if (!seconds) seconds = randomTimeDuration();
    // Not sure what is expected from eslint here...
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((r) => setTimeout(r, seconds));
  };

  const sendMessageAsBot = async (message: string) => {
    setIsBotTyping(true);
    await wait();
    setIsBotTyping(false);
    insertMessage(false, message, NANCI_PELOSI_IMG);
  };

  // Auto-Scroll
  useEffect(() => {
    scrollToBottom();
  }, [messages, isUserTyping, isBotTyping]);

  // User typing animation
  useEffect(() => {
    if (inputMessage === '') {
      return;
    }

    setIsUserTyping(true);

    setTimeout(() => {
      setIsUserTyping(false);
    }, 2000);
  }, [inputMessage]);

  // Render decision
  useEffect(() => {
    const nextDecision = botMessages[botMessageIndex];

    if (typeof nextDecision !== 'object') {
      return;
    }

    setDecisions(nextDecision);
  }, [botMessageIndex]);

  // Send next bot message
  useEffect(() => {
    console.log('botMessageIndex: ', botMessageIndex);
    if (botMessageIndex >= botMessages.length) {
      return;
    }

    async function sendNextBotMessage() {
      const nextBotMessage = botMessages[botMessageIndex];

      if (typeof nextBotMessage !== 'string') {
        return;
      }

      // Send intro messages
      if (botMessageIndex <= 2) {
        // Wait for Chat box opening animation to finish
        await wait(400);
      }

      await sendMessageAsBot(nextBotMessage);
      setBotMessageIndex(botMessageIndex + 1);
    }

    sendNextBotMessage();
  }, [botMessageIndex]);

  return (
    <AnimateSharedLayout>
      <Chat
        layout
        variants={chatBoxMotionVariants}
        transition={{ duration: 0.4 }}
        initial="hidden"
        animate="visible"
      >
        <Title>
          <h1 className="name">Nancy Pelosi</h1>
          <h2 className="title">Speaker of the House</h2>
          <Avatar className="image" party="Democrat" size="50px">
            <StyledImg src={NANCI_PELOSI_IMG} />
          </Avatar>
        </Title>
        <MessageFeed
          ref={messageFeed}
          layout
          variants={messageFeedMotionVariants}
        >
          {messages.map((message, index) => {
            return (
              <Message
                // Non-index key is not necessary because this list will not change
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="posted"
                {...message}
              />
            );
          })}
          <AnimatePresence>
            {isUserTyping && (
              <Message
                isSentFromUser
                isTyping={isUserTyping}
                picture={userProfile.picture}
              />
            )}
            {isBotTyping && (
              <Message
                isSentFromUser={false}
                isTyping={isBotTyping}
                picture={NANCI_PELOSI_IMG}
              />
            )}
          </AnimatePresence>
        </MessageFeed>
        <AnimatePresence>
          {decisions && (
            <AutoComplete
              suggestions={Object.keys(decisions)}
              onSuggestionClick={handleAutoCompleteClick}
            />
          )}
        </AnimatePresence>
        <MessageBox>
          <textarea
            className="message-input"
            placeholder="Type message..."
            value={inputMessage}
            onKeyDown={onEnterPress}
            onChange={handleMessageInput}
          />
          <button
            type="submit"
            className="message-submit"
            onClick={handleMessageSubmit}
          >
            Send
          </button>
        </MessageBox>
      </Chat>
    </AnimateSharedLayout>
  );
};

const chatBoxMotionVariants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
  },
};

const messageFeedMotionVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export default PrivateChatBox;

const Chat = styled(motion.div)`
  width: 700px;
  max-width: 100vw;
  height: 80vh;
  max-height: 500px;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: solid thin var(--color-text);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  z-index: 2;

  flex: 0 1 65px;
  height: 70px;
  padding: 10px;

  background: rgba(0, 0, 0, 0.2);

  color: #fff;
  text-transform: uppercase;
  text-align: left;

  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 20px 1fr;
  grid-template-areas:
    'image name'
    'image title';

  .img {
    grid-area: image;
  }

  .name {
    grid-area: name;
  }

  .title {
    grid-area: title;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  h1,
  h2 {
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 60px;
`;

const MessageFeed = styled(motion.div)`
  flex: 1 1 auto;
  color: rgba(255, 255, 255, 0.5);
  overflow-y: scroll;
  position: relative;
  width: 100%;
  height: 101%;

  > .posted:last-child {
    /* Leave room for typing animation */
    margin-bottom: 66px;
  }

  /* Scrollbar */

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
    padding: 0 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.5);
    width: 1px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-text);
    border-radius: 3px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray500);
  }
`;

const MessageBox = styled.div`
  flex: 0 1 40px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  position: relative;

  & .message-input {
    background: none;
    border: none;
    outline: none !important;
    resize: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    height: 30px;
    margin: 0;
    padding-right: 20px;
    width: 90%;
  }

  textarea:focus:-webkit-placeholder {
    color: transparent;
  }

  & .message-submit {
    position: absolute;
    z-index: 1;
    top: 9px;
    right: 10px;
    color: #fff;
    border: none;
    background: var(--color-secondary);
    font-size: 0.8rem;
    text-transform: uppercase;
    line-height: 1;
    padding: 6px 10px;
    border-radius: 10px;
    outline: none !important;
  }
`;
