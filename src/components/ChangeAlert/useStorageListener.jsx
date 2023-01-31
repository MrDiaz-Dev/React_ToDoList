import { useEffect } from "react";

const useStorageAlert = (sincronize, storageChange, setStorageChange) => { 

  useEffect(() => {

    const onChange = (change) => { 
      if (change.key === 'TODOS_V1') {
        setStorageChange(true);
      }
    };
    
    return () => {
      window.addEventListener('storage', onChange);
    }
    
  }, [storageChange]);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  }
  
  return (
    { 
      show: storageChange,
      toggleShow
    }
  )
}

export { useStorageAlert };


// FORMA EN HIGH ORDER COMPONENT

// import { useEffect } from "react";

// const useStorageAlert = (WrappedComponent) => { 
//   return function WrappedComponentWithStorageAlert(props) {

//     useEffect(() => {

//       return () => {
//         const onChange = (change) => { 
//           if (change.key === 'TODOS_V1') {
//             props.setStorageChange(true);
//           }
//         };
//         window.addEventListener('storage', onChange)
//       }
//     }, [props.storageChange])

//     const toggleShow = () => {
//       props.sincronize();
//       props.setStorageChange(false);
//     }
    
//     return (
//       <WrappedComponent 
//         show={props.storageChange} 
//         toggleShow={toggleShow}
//       />
//     )
//   }
// }

// export { useStorageAlert };