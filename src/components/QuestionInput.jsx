function QuestionInput({ option, id, checked, onChange}){



    return(
        <div className="checkbox-item">
            <input 
                type="checkbox" 
                id={id} 
                value={option} 
                checked = {checked}
                onChange={(e) => onChange(e.target.checked)} //onChange can be found in QuestionForm.jsx
            />
            <label> {option} </label><br/>
        </div>
    );

}


export  default QuestionInput;