import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: min-content;

  img {
    object-fit: contain;
    width: auto;
  }
`;

const AnimatedReveal = ({
  children,
  width = 'fit-content',
  isOpen = false,
  disableAuto,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!disableAuto && isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  useEffect(() => {
    if (isOpen) {
      mainControls.start('visible');
    } else {
      // Optionally reset to hidden state when accordion closes
      mainControls.start('hidden');
    }
  }, [isOpen, mainControls]);
  /* eslint-enable react-hooks/exhaustive-deps */
  return (
    <Wrapper ref={ref} style={{ width }}>
      <motion.div
        variants={{
          hidden: { height: 0, scale: 1.6 },
          visible: { height: 'auto', scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: isOpen ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};

AnimatedReveal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  isOpen: PropTypes.bool,
  disableAuto: PropTypes.bool,
};

export default AnimatedReveal;
