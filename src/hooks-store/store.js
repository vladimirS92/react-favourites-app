import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (isListen = true) => {
  const setState = useState(globalState)[1];
  //analog to useDispatch:
  const dispatch = (i, payload) => {
    const newState = actions[i](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  //analog to useSelector:
  useEffect(() => {
    //add setState f to a listeners using useStore
    //when it mounts
    if (isListen) {
      listeners.push(setState);
    }

    //remove setState when it unmounts
    return () => {
      if (isListen) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, isListen]);
  //./analog to useSelector:

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
