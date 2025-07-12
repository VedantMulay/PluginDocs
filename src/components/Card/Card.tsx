import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
  href?: string; // Optional link
}

const Card: React.FC<CardProps> = ({ title, description, icon, children, href }) => {
  const content = (
    <div className={styles.cardContent}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );

  return href ? (
    <Link className={styles.card} to={href}>
      {content}
    </Link>
  ) : (
    <div className={styles.card}>{content}</div>
  );
};

export default Card;
