import { ActionTypes } from '../constants';

interface IActionInitialRepository {
  type: ActionTypes.SEARCH_REPOSITORY;
}

interface IActionSuccessRepository {
  type: ActionTypes.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}

interface IActionFailRepository {
  type: ActionTypes.SEARCH_REPOSITORY_FAIL;
  payload: string;
}

export type TAction =
  | IActionFailRepository
  | IActionSuccessRepository
  | IActionInitialRepository;
