import {SystemState} from './reducers';
import {Reducer, Action, Store} from 'redux';
import {Epic} from 'redux-observable';
import {BehaviorSubject} from 'rxjs';
export type RootStoreState = {
  systems: SystemState;
};
export type RootEpicDependency = {};

export type RootEpic = Epic<Action, Action, RootStoreState, RootEpicDependency>;

export type ReducerManger = {
  reduce: Reducer<RootStoreState, Action>;
  add(key: string, reducer: Reducer): void;
  remove(key: string): void;
};

export type StoreContainer = {
  store: Store;
  reducerManager: ReducerManger;
  epic$: BehaviorSubject<Epic>;
  action$: BehaviorSubject<Action>;
  addEpic: (epic: Epic) => void;
  persistor: any;
};

export * from './reducers';
