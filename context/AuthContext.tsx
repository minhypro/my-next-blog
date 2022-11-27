import React, { createContext, Dispatch, useReducer, useEffect } from 'react';
import useLocalStorage from '../ultils/hooks/useLocalStorage';
import { AuthActionTypes } from './authContextConstants';

interface ProviderProps {
  children?: React.ReactNode;
}

interface Action {
  type: AuthActionTypes;
  data: any;
}

interface AuthStateType {
  userInfo: any;
  processing: boolean;
  authError: any;
}

const initialState: AuthStateType = {
  userInfo: undefined,
  processing: false,
  authError: false,
};

// setLsData((prev: any) => {
//   return {...prev, data: 'check'}
// })

export const GlobalState = createContext(initialState);
export const GlobalDispatch = createContext<Dispatch<Action>>(() => {});
export const GlobalStateProvider = ({ children }: ProviderProps) => {
  const [localStorageUserInfo, setLocalStorageUserInfo] = useLocalStorage('userInfo', '');

  const reducer = (state: AuthStateType, action: Action): AuthStateType => {
    switch (action.type) {
      case AuthActionTypes.LOGIN_REQUEST:
        return {
          ...state,
          processing: true,
        };
      case AuthActionTypes.LOGIN_SUCCESS:
        !!action.data && setLocalStorageUserInfo(action.data);
        return {
          ...state,
          userInfo: action.data,
          processing: false,
        };
      case AuthActionTypes.LOGIN_FAILED:
        return {
          ...state,
          authError: action.data,
          processing: false,
        };
    }
  };
  const [globalState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Update global state if the value is saved in localStorage
    dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, data: localStorageUserInfo });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalState.Provider value={globalState}>
      <GlobalDispatch.Provider value={dispatch}>{children}</GlobalDispatch.Provider>
    </GlobalState.Provider>
  );
};
