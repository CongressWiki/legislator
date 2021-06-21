import React from 'react';
import styled from 'styled-components';
import Avatar from '@components/atoms/Avatar';
import { motion } from 'framer-motion';

export type MessageProps = {
  isSentFromUser: boolean;
  message: string;
  time: string;
  picture: string;
};

const Message = ({ isSentFromUser, message, time, picture }: MessageProps) => {
  return (
    <Wrapper layout isSentFromUser={isSentFromUser}>
      <Avatar className="image" party="Democrat" size="40px">
        <StyledImg src={picture} />
      </Avatar>
      <Timestamp className="timestamp">{time}</Timestamp>
      <MessageText isSentFromUser={isSentFromUser} className="message">
        {message}
      </MessageText>
    </Wrapper>
  );
};

export default Message;

const Wrapper = styled(motion.div)<{ isSentFromUser: boolean }>`
  width: 100%;
  padding: 10px;

  display: grid;
  grid-template-rows: auto auto;

  ${({ isSentFromUser }) =>
    isSentFromUser ? 'text-align: right;' : 'text-align: left;'}

  ${({ isSentFromUser }) =>
    isSentFromUser
      ? 'grid-template-columns: 1fr 45px;'
      : 'grid-template-columns: 45px 1fr;'}

  ${({ isSentFromUser }) =>
    isSentFromUser ? 'justify-items: end;' : 'justify-items: start;'}

  ${({ isSentFromUser }) =>
    isSentFromUser
      ? "grid-template-areas: 'message image''timestamp image';"
      : "grid-template-areas: 'image message''image timestamp';"}

  .image {
    grid-area: image;
    align-self: end;
  }

  .message {
    grid-area: message;
  }

  .timestamp {
    grid-area: timestamp;
  }
`;

const StyledImg = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

const Timestamp = styled.span`
  font-size: 0.7rem;
  padding: 3px 7px;
`;

const MessageText = styled.span<{ isSentFromUser: boolean }>`
  position: relative;
  clear: both;
  font-size: 1rem;
  background: linear-gradient(120deg, hsl(193.5, 48%, 16%), #02475a);
  padding: 6px 10px 7px;
  max-width: 70%;

  ${({ isSentFromUser }) =>
    isSentFromUser
      ? 'border-radius: 10px 10px 0 10px;'
      : 'border-radius: 10px 10px 10px 0;'}

  &::before {
    box-sizing: border-box;
    position: absolute;
    bottom: -7px;
    content: '';
    border-top: 7px solid hsl(193.5, 48%, 16%);

    ${({ isSentFromUser }) =>
      isSentFromUser
        ? 'border-left: 5px solid transparent;'
        : 'border-left: unset;'}
    ${({ isSentFromUser }) =>
      isSentFromUser
        ? 'border-right: none;'
        : 'border-right: 6px solid rgba(0, 0, 0, 0.3);'}
    ${({ isSentFromUser }) => (isSentFromUser ? 'left: auto;' : 'left: 0;')}
    ${({ isSentFromUser }) => (isSentFromUser ? 'right: 0;' : 'right: unset;')}
  }
`;
