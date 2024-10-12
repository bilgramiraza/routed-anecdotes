import { createContext, useContext, useReducer } from "react";

const initialState = {
  message: '',
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'notify':
      return {
        message: action.payload.message,
      };
    case 'clear':
      return initialState;
    default: return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = props => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotificationValue = () => {
  const notifAndDispatch = useContext(NotificationContext);
  return notifAndDispatch[0];
}

export const useNotificationDispatch = () => {
  const notifAndDispatch = useContext(NotificationContext);
  return notifAndDispatch[1];
}

export const notifyWithTimeout = (dispatch, message, timeout = 5000) => {
  dispatch({
    type: 'notify',
    payload: {
      message,
    },
  });
  setTimeout(() => dispatch({ type: 'clear' }), timeout);
};

export default NotificationContext;
