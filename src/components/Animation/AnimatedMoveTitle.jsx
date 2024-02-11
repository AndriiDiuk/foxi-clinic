import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const AnimatedMoveTitle = ({
  children,
  defaultTitle,
  width = 'fit-content',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isInView]);

  return (
    <Wrapper ref={ref} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -145 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.75 }}
        style={{ zIndex: 3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -185 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: ' 33px',
          background: `linear-gradient(90deg, ${defaultTitle ? 'rgba(219, 237, 255, 0.4)' : '#DBEDFF'} 0.05%, rgba(255, 255, 255, 0.00) 99.93%)`,
          zIndex: -1,
        }}
      ></motion.div>
    </Wrapper>
  );
};

AnimatedMoveTitle.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  defaultTitle: PropTypes.bool,
};

export default AnimatedMoveTitle;
