import type { ReactNode } from "react";
import { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import CardGrid from "../components/Card/CardGrid";
import Card from "../components/Card/Card";
import {
  FaDatabase,
  FaEnvelope,
  FaFile,
  FaFileAlt,
  FaGlobe,
  FaHouseUser,
  FaTruck,
  FaUserNinja,
} from "react-icons/fa";

const PRODUCTS = [
  {
    title: "Player Logger",
    description: "Player activity tracking and analytics",
    icon: <FaDatabase />,
    href: "/player-logger/overview",
    category: "Minecraft Plugins",
  },
  {
    title: "Email Linker",
    description: "Account and email linking system",
    icon: <FaEnvelope />,
    href: "/email-linker/overview",
    category: "Minecraft Plugins",
  },
  {
    title: "Ultimate Bounty",
    description: "Bounty, missions, and reward management",
    icon: <FaUserNinja />,
    href: "/ultimate-bounty/overview",
    category: "Minecraft Plugins",
  },
  {
    title: "Delivery Master",
    description: "Delivery jobs and logistics control",
    icon: <FaTruck />,
    href: "/delivery/overview",
    category: "Minecraft Plugins",
  },
  {
    title: "AFK Area",
    description: "Idle gameplay zones (Coming soon)",
    icon: <FaHouseUser />,
    category: "Minecraft Plugins",
  },
  {
    title: "Neptune Core",
    description: "Shared core utilities (Coming soon)",
    icon: <FaGlobe />,
    category: "Minecraft Plugins",
  },
  {
    title: "Litebans Message",
    description: "Litebans plugin messages config",
    icon: <FaFileAlt />,
    href: "",
    category: "Plugin Configurations",
  },
  {
    title: "Hosting Landing Page",
    description: "Litebans plugin message config",
    icon: <FaGlobe />,
    href: "",
    category: "Web-based software",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [query, setQuery] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, typeof PRODUCTS>>((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <Layout
      title={siteConfig.title}
      description="Select a product to view its documentation"
    >
      <main className={styles.page}>
        <header className={styles.header}>
          <Heading as="h1">Lumina Games Docs</Heading>
          <p className={styles.subheading}>
            Search or browse documentation by category
          </p>
        </header>

        <div className={styles.layout}>
          {/* Sidebar (Desktop) / Top Bar (Mobile) */}
          <aside className={styles.sidebar}>
            <input
              className={styles.search}
              placeholder="Search products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* Sidebar Content */}
            <div className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>Categories</h4>
              <ul className={styles.sidebarList}>
                <li>Web-Based Systems</li>
                <li>Minecraft Plugins</li>
                <li>Core & Configuration</li>
              </ul>
            </div>

            <div className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>Quick Help</h4>
              <p className={styles.sidebarHint}>
                Not sure where to start? Use the search above or browse by
                category.
              </p>
            </div>
          </aside>

          {/* Content */}
          <section className={styles.content}>
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category} className={styles.categoryBlock}>
                <Heading as="h2" className={styles.categoryTitle}>
                  {category}
                </Heading>
                <CardGrid>
                  {items.map((product) => (
                    <Card key={product.title} {...product} />
                  ))}
                </CardGrid>
              </div>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
