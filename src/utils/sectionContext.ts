import { createContext } from 'react';
import { SectionNames } from '../constants';

export const SectionContext = createContext({
    activeSection: "" as SectionNames,
    setActiveSection: (() => { }) as (val: SectionNames) => void
});
