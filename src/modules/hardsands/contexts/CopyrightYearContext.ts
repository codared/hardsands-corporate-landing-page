import { createContext } from 'react';

const CopyrightYearContext = createContext(0);

export const CopyrightYearProvider = CopyrightYearContext.Provider;

export default CopyrightYearContext;
