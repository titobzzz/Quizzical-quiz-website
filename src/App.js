import React from 'react';
import './App.css';
import Questions from "./Quiz"


import { UserContext } from './useContext.jsx';
import Result from './Result';
   

export default function App() {
  
const [quiz, setQuiz]=React.useState([]) //state to save the mapped array of questions and answers  array from data
let [Data,setData] = React.useState([])
const [score,setScore]= React.useState(0) //state to hold the score
const [toggle,setToggle]=React.useState(false) //state to determine if the submit button is clicked 
React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5") //fetching a JSON data of questions and answers from triva.com
      .then(res=>res.json())
      .then(data => setData(data.results))//setting the JSON data to the "DATA" array 
},[])

function handleClick(){
  setQuiz(Quiz)   // an eventhandler to set the "quiz" array from empty to the mapped Data array
}

const Quiz = Data.map((q,index)=>{ //"Quiz" returns a component called Questions for all the Items found in the "Data" array
                                
  return <Questions //component "Questions" with props from the "Data" array passed into it
        question = {q.question}
        incorrectAnswer={q.incorrect_answers}
        correct={q.correct_answer}
        key={index} 
        id={index}
      />
})


const allDIsplay = //A variable that contains the rendening of  the "quiz" array and a button to submit the quiz
<div>
        {quiz}
        <button onClick={()=>setToggle(true)} >submit</button>
     
</div>

  return (// a usecontext to pass Score to other components for alterations on clicks
    < UserContext.Provider value={{score,setScore}}> 
    <div className="App">
    {
      !toggle? //if toggle is true then display what is below
        (
          quiz.length > 0? // if the "quiz" array is not empty then dispaly the "allDisplay" variable 
         allDIsplay:// else display the JSX below
          <>
                <h2>Quizzical </h2>
              <p>To test my skills</p>   
            <button className='button' onClick={handleClick}> Start Quiz</button>
        </>
        )         // if toggle is flace dispplay the "Result" components 
        :<Result 
            score={score}
        />
    }
 s    </div> 
    </UserContext.Provider>
     
  );
}


