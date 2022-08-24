/**
 * Dependencies
 */
import { createContext, useState } from 'react';

/**
 * Others
 */
import { Album } from '../models/graphql';

interface AppProvider {
  children: React.ReactNode;
}

export interface Store {
  inputSearch: string
  loading: boolean,
  error?: string
}

export interface StoreContext {
  store: Store,
  setStore: (param: any) => void
}

const initStore: Store = {
  loading: false,
  inputSearch: ''
}
/**
 * Context
 */
export const AppContext = createContext<StoreContext>({ store: initStore, setStore: (_: any) => { } });

/**
 * Provider Wrapper
 */
export function AppProvider({ children }: AppProvider): JSX.Element {
  const [store, setStore] = useState<Store>(initStore);

  return (
    <AppContext.Provider
      value={{ store, setStore }}
    >
      {children}
    </AppContext.Provider>
  )
}