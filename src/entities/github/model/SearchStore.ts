import { makeAutoObservable } from 'mobx';

export interface SearchState {
  search: string;
  setSearch: (search: string) => void;
}

export class SearchStore implements SearchState {
  search: string = localStorage.getItem('searchQuery') || 'KozhemyakinaElizaveta';

  constructor() {
    makeAutoObservable(this);
  }

  setSearch(search: string) {
    this.search = search;
    localStorage.setItem('searchQuery', search);
  }
}

export const searchStore = new SearchStore();