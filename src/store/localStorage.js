import initialState from "./initialState";

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('pstate');
      

      if (serializedState === null) {
        saveState(initialState);
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('pstate', serializedState);
    } catch {
      // ignore write errors
    }
  };