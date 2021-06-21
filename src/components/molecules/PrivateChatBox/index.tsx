import React, { useEffect, useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
import Message from '@components/molecules/Message';
import Avatar from '@components/atoms/Avatar';
import { motion } from 'framer-motion';
import { User } from '@type/hasura';

const NANCI_PELOSI_IMG =
  'https://usacounts.com/static/41b2ff95c7960d73526fe2b2aded1820/80ea3/P000197.avif';

export type PrivateChatBoxProps = {
  userProfile: User;
};

const PrivateChatBox = ({ userProfile }: PrivateChatBoxProps) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [botMessageIndex, setBotMessageIndex] = useState(0);
  const messageFeed = useRef(null);

  const botMessages = [
    "So you're my new assistant? I was told that you're quite the patriot.",
    "Well we could really use you right now. As speaker of the house i'm always busy. I need your help to identify which bills I should prioritize by voting on them.",
    "But before I set you loose on the legislation i'll need a few things from you...",
    `Really quick, my phone shows your name as ${
      userProfile.first_name + ' ' + userProfile.last_name
    }, is that right?`,
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

    setBotMessageIndex(botMessageIndex + 1);
  };

  const insertMessage = (
    isSentFromUser: boolean,
    message: string,
    picture: string
  ) => {
    const now = new Date();

    const newMessage = {
      isSentFromUser,
      message,
      picture,
      time: `${now.getHours()}:${now.getMinutes()}`,
    };
    setMessages((prevState) => [...prevState, newMessage]);
  };

  const sendMessageAsBot = () => {
    if (botMessageIndex >= botMessages.length) {
      return false;
    }

    insertMessage(false, botMessages[botMessageIndex], NANCI_PELOSI_IMG);
  };

  const scrollToBottom = () => {
    messageFeed?.current.scrollTo({
      top: messageFeed?.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const onEnterPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleMessageSubmit();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(
    function () {
      console.log({ botMessageIndex });

      setTimeout(function () {
        sendMessageAsBot();
      }, 1000 + Math.random() * 20 * 100);
    },
    [botMessageIndex]
  );

  return (
    <Chat>
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
        variants={motionVariants}
        initial="hidden"
        animate="visible"
      >
        {messages.map((message, index) => {
          // Non-index key is not necessary because this list will not change
          // eslint-disable-next-line react/no-array-index-key
          return <Message key={index} {...message} />;
        })}
      </MessageFeed>
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
  );
};

const motionVariants = {
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

const Chat = styled.div`
  width: 500px;
  height: 80vh;
  max-height: 500px;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: solid thin var(--color-gray300);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  flex: 0 1 65px;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  padding: 10px;

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

  > :last-child {
    margin-bottom: 30px;
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
    width: 265px;
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
