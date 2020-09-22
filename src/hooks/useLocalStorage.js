import  { useEffect, useState } from 'react'

/*  this will prefix the 'key' value so that way, 
when you deal with localhost 3000, it will be
easier to see w/c is corresponding with
your application */
const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key

    // getting the value from localStorage
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    
    // return the value from local storage if we have one
    if (jsonValue != null) return JSON.parse(jsonValue)

    // otherwise if we don't have, we use our initial value
    if (typeof initialValue === 'function') {
      return initialValue() // if the initial value is a function
    } else {
      return initialValue // if the initial value is a 'value'
    }
  })

  useEffect(() => {
    // saving our value to our localStorage
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
