function QuestionInput({ option, id, checked, onChange}){



    return(
        <div className="checkbox-item">
            <input 
                type="checkbox" 
                id={id} 
                value={option} 
                checked = {checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label> {option} </label><br/>
        </div>
    );

}


export  default QuestionInput;