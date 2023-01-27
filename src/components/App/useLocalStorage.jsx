import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue = []) => {

  const [loading, setloading] = useState(true);

  const [error, setError] = useState(false);

  const [errorInfo, setErrorInfo] = useState('')

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;
        
          if(!localStorageItem) {
            let item = JSON.stringify(initialValue);
            localStorage.setItem(itemName, item);
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          };    
          setItem(parsedItem)
          setloading(false);
        } catch(error) {
          setError(true);
          setErrorInfo(error)
        }
      }, 1500);
    }
  }, []);
  
  

  const saveItem = (newItem) => { 

    try {
      let item = JSON.stringify(newItem);
      localStorage.setItem(itemName, item);
      setItem(newItem);
    } catch (error) {
      setError(true);
      setErrorInfo(error)
    }
  };

  return {
    item, 
    saveItem,
    loading,
    error,
    errorInfo
  };
}

export {useLocalStorage};