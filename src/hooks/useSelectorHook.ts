import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';

import { TRootState } from '../global-state';

export const useSelector: TypedUseSelectorHook<TRootState> = _useSelector;
