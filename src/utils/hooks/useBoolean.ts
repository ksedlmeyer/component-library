import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface ReturnType {
  isToggled: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export const useBoolean = (defaultValue?: boolean): ReturnType => {
  const [isToggled, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { isToggled, setValue, setTrue, setFalse, toggle };
};
