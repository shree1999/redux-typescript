import { combineReducers } from 'redux';

import { repoReducer } from './repoReducers';

export const rootReducer = combineReducers({
  repo: repoReducer,
});

// this is useful when using useSelector hook to "Type" the global state
export type TRootState = ReturnType<typeof rootReducer>;
