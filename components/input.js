


function Input({type, name, value, h4}) {
   return(
        <div>
                    <div className="moveUserEmail">
                    
                        <h4>{h4}</h4>
                    
                    </div>
                    <input type={type} name={name} value={value}/>
            </div>
    )
}

export default Input;