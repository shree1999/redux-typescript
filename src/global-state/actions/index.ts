import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from '../constants';
import { TAction } from './action.interfaces';

export const searchRepositories = (term: string) => async (
  dispatch: Dispatch<TAction>
) => {
  try {
    dispatch({ type: ActionTypes.SEARCH_REPOSITORY });

    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: { text: term },
    });

    const names = data.objects.map((p: any) => {
      return p.package.name;
    });

    dispatch({ type: ActionTypes.SEARCH_REPOSITORY_SUCCESS, payload: names });
  } catch (err) {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORY_FAIL,
      payload: err.message,
    });
  }
};
