import React from 'react';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
  return (
    <div className={`${styles.inverted} ${styles.wrapper} `}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
