import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { repositoryActions } from '../global-state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(repositoryActions, dispatch);
};
