import  { useState,useEffect,useContext} from "react"
import  Option from "./Option"
import { UserContext } from "./useContext"


export default function Questions(props){

    //import an option props and Quoestion props
    //map over previosu array returning a list with a unique KEY for each option in the array 
 
    // const [click, setClick]=React.useState(true)
    const [options, setOptions]= useState([]) //a state for the "options" array 
   const {score,setScore}= useContext(UserContext) // importing "score" for alteration
   
    

 useEffect(()=>{//using useEffect to aviod multiple renders while pushing into the options array 
const answers = props.incorrectAnswer
answers.push(props.correct)
const answer = answers.map((str, index) => ({ value: str, id: index  }));//mapping over the options array to give a options with "Ids"
answer.sort()//this shuffles the the postion of the options
setOptions(answer)
    },[])
    
    function mapToJSX(options){
        // function that maps the options to return a component "Option" for individial options in the array
return options?.map((ops,index)=>{
        return <Option
        click={ops.click}
        key={index}
        id={index}//Using the index or position of the item ins the array as an idey 
        value= {ops.value}//pass in the the array elment as a value
        toggle={handleClick}
        />
    })
    }

    function handler(prevOption,Id){
        const newarray=[] //on click of any option create a new array
        for(let CurrentOption of prevOption){
                CurrentOption.click = false   // to make sure the initial value of all options are set to false 
                       // looping through the options array if any of the options has it id aas the id of the clicked option
            if(CurrentOption.id === Id){// create a new option with the old props but change e=the click boolean 
                setScore(prevScore=>prevScore) 
                 const newOption ={
                    ...CurrentOption,
                    click: !CurrentOption.click
                 }
                if(CurrentOption.value === props.correct){ //and if the value of the clicked option is or is not the same as the correct answer then change the score accoringly 
                    setScore(prevScore=> prevScore + 1)
                }else{
                    setScore(prevScore=>prevScore)
                }

                 newarray.push(newOption) //push the "newOption" into the "newArray"  
 
            }else{
                newarray.push(CurrentOption)// if it does not have the same id aas the clicked option then push it into the new array like that
            }
        }
        return newarray //return the new array
    }

    function handleClick(Id){
      //set the options array to the "newarrray" returned by the "handler()" function
    setOptions(prevOption=> handler(prevOption,Id))

}

//retuns the JSX to render the questions
    return(
    <div className="Quiz"> 
    <h4 >{props.question}</h4>
    <div className="option">
               {mapToJSX(options)}              
    </div>   
</div>
)}
  