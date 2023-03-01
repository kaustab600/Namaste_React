import {useEffect, useState} from 'react';

const Shimmer = () => {
  const [exhaustedTimeLimit, setExhaustedTimeLimit] = useState(false);

  useEffect(() => {
    function updateShrimmer() {
      setExhaustedTimeLimit(true);
    }

    const startTimer = setTimeout(updateShrimmer, 2000);
    // return (
    //   clearTimeout(startTimer)
    // )
    return () => {
    /**
     * It will run 2 times here bcuz ,
     * 1) after initial render 2) unmount OR component called again
     */
      console.log("run useEffect");
      clearTimeout(startTimer);
    }
  },[])

  return  (!exhaustedTimeLimit)? <div className="shrimmer">...Loading</div> : <h1>OOPS!<br/>Please Try Again After Some Time and Check Your Connectivity</h1>;
};

export default Shimmer;
