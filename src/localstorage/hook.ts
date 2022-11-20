import { useState } from "react";

export function localStorageHook(key: string, value: string = '') {
  const [state, setValueInternal] = useState(() => {
    try {
        return window.localStorage.getItem(key)
      } catch (error: unknown) {
        return value
      }
  })

  const setValue = (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value)
      setValueInternal(value)
    } catch (error: unknown) {
      console.log('could not store your credentials :(')
    }
  }

  return [state, setValue] as const
}