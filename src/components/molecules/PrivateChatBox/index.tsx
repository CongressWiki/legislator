import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export type PrivateChatBoxProps = {};

const PrivateChatBox = ({}: PrivateChatBoxProps) => {
  let $messages = ''; // $('.messages-content');
  let d;
  let h = 0;
  let m = 0;
  let i = 0;

  useEffect(function () {
    updateScrollbar();
    setTimeout(function () {
      fakeMessage();
    }, 100);
  });

  function updateScrollbar() {
    // TODO: Scroll to bottom
  }

  function setDate() {
    d = new Date();
    if (m !== d.getMinutes()) {
      m = d.getMinutes();

      // TODO: Mark last message?
      // $('<div className="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo(
      //   $('.message:last')
      // );
    }
  }

  function insertMessage() {
    // TODO: collect input value
    // msg = $('.message-input').val();
    let msg = '';

    if (msg.trim() === '') {
      return false;
    }

    // TODO: Add message to container
    // $('<div className="message message-personal">' + msg + '</div>')
    //   .appendTo($('.mCSB_container'))
    //   .addClass('new');

    setDate();

    // TODO: Clear input
    // $('.message-input').val(null);

    updateScrollbar();

    setTimeout(function () {
      fakeMessage();
    }, 1000 + Math.random() * 20 * 100);
  }

  const handleMessageSubmit = () => {
    insertMessage();
  };

  // TODO: Submit message on Enter key press

  const Fake = [
    "Hi there, I'm Fabio and you?",
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    "That's awesome",
    'Codepen is a nice place to stay',
    "I think you're a nice person",
    'Why do you think that?',
    'Can you explain?',
    "Anyway I've gotta go now",
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)',
  ];

  function fakeMessage() {
    // TODO: if message input is empty => do noting/return false

    // TODO: Add message loading to container
    // $(
    //   '<div className="message loading new"><figure className="avatar"><img src="https://usacounts.com/static/41b2ff95c7960d73526fe2b2aded1820/80ea3/P000197.avif" /></figure><span></span></div>'
    // ).appendTo($('.mCSB_container'));

    updateScrollbar();

    setTimeout(function () {
      // TODO: Remove loading from container
      // $('.message.loading').remove();

      // TODO: Add bot message to container
      // $(
      //   '<div className="message new"><figure className="avatar"><img src="https://usacounts.com/static/41b2ff95c7960d73526fe2b2aded1820/80ea3/P000197.avif" /></figure>' +
      //     Fake[i] +
      //     '</div>'
      // )
      //   .appendTo($('.mCSB_container'))
      //   .addClass('new');

      setDate();
      updateScrollbar();
      i++;
    }, 1000 + Math.random() * 20 * 100);
  }

  return (
    <Chat>
      <Title>
        <h1>Nancy Pelosi</h1>
        <h2>Speaker of the House</h2>
        <figure className="avatar">
          <img src="https://usacounts.com/static/41b2ff95c7960d73526fe2b2aded1820/80ea3/P000197.avif" />
        </figure>
      </Title>
      <Messages>
        <div className="messages-content">
          <div className="message loading new">
            <figure className="avatar">
              <img src="https://usacounts.com/static/41b2ff95c7960d73526fe2b2aded1820/80ea3/P000197.avif" />
            </figure>
            <span />
          </div>
        </div>
      </Messages>
      <MessageBox>
        <textarea className="message-input" placeholder="Type message..." />
        <button type="submit" className="message-submit">
          Send
        </button>
      </MessageBox>
    </Chat>
  );
};

export default PrivateChatBox;

const Chat = styled.div`
  @mixin center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @include center;
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
  padding: 10px 10px 10px 70px;

  h1,
  h2 {
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .avatar {
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 9px;
    border-radius: 30px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 2px solid rgba(255, 255, 255, 0.24);

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Messages = styled.div`
  flex: 1 1 auto;
  color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  position: relative;
  width: 100%;

  & .messages-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 101%;
    width: 100%;
  }

  .message {
    clear: both;
    float: right;
    padding: 6px 10px 7px;
    border-radius: 10px 10px 10px 0;
    background: rgba(0, 0, 0, 0.3);
    margin: 8px 0;
    font-size: 0.9rem;
    line-height: 1.4;
    margin-left: 35px;
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

    .timestamp {
      position: absolute;
      bottom: -15px;
      font-size: 9px;
      color: rgba(255, 255, 255, 0.3);
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -6px;
      border-top: 6px solid rgba(0, 0, 0, 0.3);
      left: 0;
      border-right: 7px solid transparent;
    }

    .avatar {
      position: absolute;
      z-index: 1;
      bottom: -15px;
      left: -35px;
      border-radius: 30px;
      width: 50px;
      height: 50px;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 2px solid rgba(255, 255, 255, 0.24);

      img {
        width: 100%;
        height: auto;
      }
    }

    &.message-personal {
      float: right;
      color: #fff;
      text-align: right;
      background: linear-gradient(120deg, #248a52, #257287);
      border-radius: 10px 10px 0 10px;

      &::before {
        left: auto;
        right: 0;
        border-right: none;
        border-left: 5px solid transparent;
        border-top: 4px solid #257287;
        bottom: -4px;
      }
    }

    &:last-child {
      margin-bottom: 30px;
    }

    @keyframes bounce {
      0% {
        transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      4.7% {
        transform: matrix3d(
          0.45,
          0,
          0,
          0,
          0,
          0.45,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      9.41% {
        transform: matrix3d(
          0.883,
          0,
          0,
          0,
          0,
          0.883,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      14.11% {
        transform: matrix3d(
          1.141,
          0,
          0,
          0,
          0,
          1.141,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      18.72% {
        transform: matrix3d(
          1.212,
          0,
          0,
          0,
          0,
          1.212,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      24.32% {
        transform: matrix3d(
          1.151,
          0,
          0,
          0,
          0,
          1.151,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      29.93% {
        transform: matrix3d(
          1.048,
          0,
          0,
          0,
          0,
          1.048,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      35.54% {
        transform: matrix3d(
          0.979,
          0,
          0,
          0,
          0,
          0.979,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      41.04% {
        transform: matrix3d(
          0.961,
          0,
          0,
          0,
          0,
          0.961,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      52.15% {
        transform: matrix3d(
          0.991,
          0,
          0,
          0,
          0,
          0.991,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      63.26% {
        transform: matrix3d(
          1.007,
          0,
          0,
          0,
          0,
          1.007,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      85.49% {
        transform: matrix3d(
          0.999,
          0,
          0,
          0,
          0,
          0.999,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        );
      }
      100% {
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
    }

    &.new {
      transform: scale(0);
      transform-origin: 0 0;
      animation: bounce 500ms linear both;
    }

    @keyframes ball {
      from {
        transform: translateY(0) scaleY(0.8);
      }
      to {
        transform: translateY(-10px);
      }
    }

    @mixin ball {
      @include center;
      content: '';
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      z-index: 2;
      margin-top: 4px;
      animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
    }

    &.loading {
      &::before {
        @include ball;
        border: none;
        animation-delay: 0.15s;
      }

      & span {
        display: block;
        font-size: 0;
        width: 20px;
        height: 10px;
        position: relative;

        &::before {
          @include ball;
          margin-left: -7px;
        }

        &::after {
          @include ball;
          margin-left: 7px;
          animation-delay: 0.3s;
        }
      }
    }
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
