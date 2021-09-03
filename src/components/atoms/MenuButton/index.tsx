import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SvgVerticalDots from '@icons/buttons/VerticalDots';

export type OptionsType = {
  label: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  className?: string;
};

export type MenuButtonProps = {
  options: OptionsType[];
};

const MenuButton = ({ options }: MenuButtonProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <ButtonGroup
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        variants={GroupMotionVariants}
      >
        {options.map((option, index) => (
          <SubButton
            key={option.label}
            variants={getSubButtonMotionVariants(index, options.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={option.onClick}
          >
            <option.svg />
            <Tooltip className="tooltip">
              <span>{option.label}</span>
            </Tooltip>
          </SubButton>
        ))}
      </ButtonGroup>
      <MainButton
        name="Options"
        whileHover={{ rotate: 90, scale: 1.1 }}
        whileTap={{ rotate: 360, scale: 0.9 }}
        onClick={handleClick}
      >
        <SvgVerticalDots />
      </MainButton>
    </Wrapper>
  );
};

export default MenuButton;

const GroupMotionVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const getSubButtonMotionVariants = (
  buttonIndex: number,
  totalButtons: number
) => {
  const buttonOrder = totalButtons - buttonIndex;
  const buttonGap = buttonOrder * 12;
  const buttonHeight = buttonOrder * 50;
  const animateTo = buttonHeight + buttonGap;

  return {
    hidden: { y: 0, opacity: 0 },
    visible: { y: animateTo, opacity: 1 },
  };
};

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

// TODO: Move Tooltips behind the button
const Tooltip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: -1;

  span {
    text-align: right;
    font-family: advocate_c43_mid;
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  position: relative;
`;

const Button = styled(motion.button)`
  position: relative;
  outline: none;
  background: var(--color-primary);

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 100px;
  border: var(--color-text) solid thin;
  box-shadow: inset 0 0 0 1px rgba(#000, 0.2),
    0 2px 0 rgba(var(--color-primary), 0.2);

  color: var(--color-text);
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }

  :hover {
    .tooltip {
      left: -110%;
      opacity: 1;
    }
  }
`;

const MainButton = styled(Button)`
  position: relative;
  align-self: center;
`;

const SubButton = styled(Button)`
  position: absolute;
  top: 50%;
`;
