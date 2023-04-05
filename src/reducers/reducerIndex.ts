import { SearchResult } from '@interfaces/coins';

export enum IndexActionKind {
  NUM_PER_PAGE = 'NUM_PER_PAGE',
  PAGE = 'PAGE',
  SEARCH_BY_VALUE = 'SEARCH_BY_VALUE',
  RESULTS = 'RESULTS',
}

export interface IndextAction {
  type: IndexActionKind;
  payload: number | string | SearchResult;
}

export interface IndexState {
  numPerPage: number;
  page: number;
  searchByValue: string;
  results: SearchResult;
}

export function reducer(state: IndexState, action: IndextAction): IndexState {
  switch (action.type) {
    case IndexActionKind.NUM_PER_PAGE:
      if (typeof action.payload !== 'number') return state;
      return { ...state, numPerPage: action.payload };
    case IndexActionKind.PAGE:
      if (typeof action.payload !== 'number') return state;
      return { ...state, page: action.payload };
    case IndexActionKind.SEARCH_BY_VALUE:
      if (typeof action.payload !== 'string') return state;
      return { ...state, searchByValue: action.payload };
    case IndexActionKind.RESULTS:
      if (typeof action.payload !== 'object') return state;
      return { ...state, results: action.payload };
    default:
      return state;
  }
}
