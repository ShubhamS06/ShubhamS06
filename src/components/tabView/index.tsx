import { useRef, useState } from 'react';
import styles from "./tabView.module.css";
import { scrollToElement } from '../../utils/utils';

export default function TabView({ sections, children, id, renderAll, onSectionChange }: Props) {
  const [activeSection, setActiveSection] = useState(0);
  const contentRef = useRef<HTMLElement>(null)

  return (
    <section className={styles.container} id={id}>
      <nav className={styles.sidebar}>
        <div className={styles.navContainer}>
          {sections.map((section, index) => (
            <button
              key={index}
              className={`${styles.navItem} capitalize text-right ${activeSection === index ? styles.active : ''}`}
              onClick={() => {
                setActiveSection(index);
                renderAll && contentRef.current?.children?.[index] && scrollToElement(contentRef.current.children[index]);
                onSectionChange?.(index, activeSection);
              }}
            >
              {section}
              <img className={styles.indicator} src='/icons/tabview-indicator.svg' />
            </button>
          ))}
        </div>
      </nav>
      <section ref={contentRef} className={styles.content}>
        {!!renderAll ? children : (children?.[activeSection] ?? <div>No section</div>)}
      </section>
    </section>
  );
};

type Props = { children: JSX.Element[], id?: string, sections: string[], renderAll?: boolean, onSectionChange?: (index: number, previousIndex: number) => void }
