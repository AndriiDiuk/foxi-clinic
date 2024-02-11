import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  min-width: clamp(1.375rem, 1.709vw + 1.054rem, 1.875rem);
  div {
    display: flex;
    align-items: center;
  }
`;

const AnimatedRotate = ({ children, selected, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {' '}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={selected ? 'minus' : 'plus'}
          initial={{
            rotate: selected ? -90 : 90,
          }}
          animate={{
            zIndex: 1,
            rotate: 0,
            transition: {
              type: 'tween',
              duration: 0.15,
              ease: 'circOut',
            },
          }}
          exit={{
            zIndex: 0,
            rotate: selected ? -90 : 90,
            transition: {
              type: 'tween',
              duration: 0.15,
              ease: 'circIn',
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
};

AnimatedRotate.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default AnimatedRotate;
