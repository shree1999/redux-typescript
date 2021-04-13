import { TAction } from '../actions/action.interfaces';
import { ActionTypes } from '../constants';

interface IRepositoryState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const repoReducer = (
  state: IRepositoryState = initialState,
  action: TAction
): IRepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORY:
      return { isLoading: true, data: [], error: null };

    case ActionTypes.SEARCH_REPOSITORY_SUCCESS:
      return { isLoading: false, data: action.payload, error: null };

    case ActionTypes.SEARCH_REPOSITORY_FAIL:
      return { isLoading: false, data: [], error: action.payload };

    default:
      return state;
  }
};
