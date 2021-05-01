import { createAction } from '../../utils/action-helpers';

export const SET_ALL_NEWS = "SET_ALL_NEWS";
export const setAllNews = createAction(SET_ALL_NEWS);

export const FILTER_NEWS = "FILTER_NEWS";
export const filterNews = createAction(FILTER_NEWS);
