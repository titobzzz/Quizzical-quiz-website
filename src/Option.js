

export default function Option(props){
        
    const style={//style variable to check if the options are clicked or not
            backgroundColor:props.click ? "#293264":"", 
            color:props.click ? "white":"#293264"
        }
    
    //returnung a JSX for the options and the toggle props to control the styling of each clicked option
    return<h6 style={style}
     onClick={()=>props.toggle(props.id)}>{props.value}</h6>
} 