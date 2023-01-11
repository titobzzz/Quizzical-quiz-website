

export default function Result (props){
    return(// displays the score and refreshes the page
        <div className="resultContainer">
            <div className="results" >
                <h3 > Your Score is : {props.score}   </h3>      
                <button className="ReplayButton" onClick={()=>window.location.reload()}>Play again</button>   
            </div>
        </div>
    )
}
