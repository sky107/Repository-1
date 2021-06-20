import React,{useState,useEffect} from 'react';


const useCounter=(forwards=true)=>{
	 const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
	
	if(forwards){
      setCounter((prevCounter) => prevCounter + 1);}
	else{
setCounter((prevCounter) => prevCounter - 1);
	}
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
return counter;//you can return anything 12, [], {};
};
export default useCounter;
//we need to provide use because to guarantee react to use all protocols of standard hooks
