import React, { useEffect, useState, createContext } from 'react';

export const TrainContext = createContext();
const ContextProvider = props => {
   const [currentText, setCurrentText] = useState(`ror`);
   const [currentValidText, setCurrentValidText] = useState('');
   const [currentSign, setCurrentSign] = useState();
   const [currentBCCurrentSign, setCurrentBCCurrentSign] = useState(true);
   const [currentSignBCVisible, setCurrentSignBCVisible] = useState(false);
   const [currentAccuracy, setCurrentAccuracy] = useState(100.00);
   const [currentSpeed, setCurrentSpeed] = useState(0);
   const [startTime, setstartTime] = useState();
   const [quantityInvalidSigns, setQuantityInvalidSigns] = useState(0);
   const [signsSum, setSignsSum] = useState(0);
   const [start, setStart] = useState(false);
   const [finish, setFinish] = useState(false);
   const [pushStart, setPushStart] = useState(false);
   const [restart, setRestart] = useState(false);

   useEffect(() => {
      fetch(`https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`)
         .then(res => res.json())
         .then(data => setCurrentText(data.toString()))
   }, [restart])

   return (
      <TrainContext.Provider
         value={{
            finish, setFinish,
            pushStart, setPushStart,
            start, setStart,
            signsSum, setSignsSum,
            currentSpeed, setCurrentSpeed,
            currentSignBCVisible, setCurrentSignBCVisible,
            currentBCCurrentSign, setCurrentBCCurrentSign,
            currentAccuracy, setCurrentAccuracy,
            currentValidText, setCurrentValidText,
            currentText, setCurrentText,
            currentSign, setCurrentSign,
            startTime, setstartTime,
            quantityInvalidSigns, setQuantityInvalidSigns,
            restart, setRestart
         }}>
         { props.children}
      </TrainContext.Provider>
   )
}
export default ContextProvider;