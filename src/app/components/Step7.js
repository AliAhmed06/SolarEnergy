const Step7 = ({ formData, handleChangeInput, handleNextStep, handlePrevStep }) => {
  const Step7Handler = (val) => {
    if(val == "FAIR < 640"){
      handleChangeInput("credit_score", "FAIR < 640")      
      handleNextStep()
    }    
    else if(val == "GOOD 640 - 739"){
      handleChangeInput("credit_score", "GOOD 640 - 739")      
      handleNextStep()
    }
    else if(val == "VERY GOOD 740 - 799"){
      handleChangeInput("credit_score", "VERY GOOD 740 - 799")      
      handleNextStep()
    }
    else if(val == "EXCELLENT > 800"){
      handleChangeInput("credit_score", "EXCELLENT > 800")      
      handleNextStep()
    }
    else if(val == "UNSURE"){
      handleChangeInput("credit_score", "UNSURE")      
      handleNextStep()
    }
    
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='mt-10 font-bold text-black text-3xl'>
        Approximately What Is Your Credit Score?
      </h1>
      <p className="text-lg mt-5 md:w-[400px] text-center">Most homeowners finance their system, which generally requires a minimum credit score of 640 or higher</p>      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step7Handler("FAIR < 640") }
        >FAIR &lt; 640</button>
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step7Handler("GOOD 640 - 739") }
        >GOOD 640 - 739</button>
      
      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step7Handler("VERY GOOD 740 - 799") }
        >VERY GOOD 740 - 799</button>

      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step7Handler("EXCELLENT > 800") }
        >EXCELLENT &gt; 800</button>

      <button
        className="bg-white w-[300px] py-5 px-5 hover:bg-yellow-400 font-bold text-xl mt-3"
        onClick={ () => Step7Handler("UNSURE") }
        >UNSURE</button>
        
        <button
          className='px-4 py-2 rounded-xl mt-5 text-black underline font-semibold'
          onClick={handlePrevStep}
        >
          Go Back
        </button>
    </div>
  );
};

export default Step7;