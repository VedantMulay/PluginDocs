import React, { ReactNode } from 'react';
import styles from './CardGrid.module.css';

interface CardGridProps {
  children: ReactNode;
}

const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default CardGrid;
