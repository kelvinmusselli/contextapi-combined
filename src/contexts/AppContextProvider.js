import { combineContexts } from './hooks/combineContexts';

import { UserContextProvider } from './hooks/userContext';
import { PhraseContextProvider } from './hooks/phraseContext';

const providers = [
  UserContextProvider,
  PhraseContextProvider
]

export const AppContextProvider = combineContexts(...providers);
