import QuestionInput from "./QuestionInput";
import { useState } from "react";

function QuestionForm(){
    const options  =  ["comfort","growth", "relations", "reflect"];  //array of each choice text
    const [values, setValues] =  useState(     //saves the state of each checkbox
        ()  => options.map(() => false)
    );                                         //one value for each checkbox to initialize them

    const handleChange = (index, checked) => {
        setValues( prev => {
            const newValues = [...prev];    //copies the state array
            newValues[index] = checked;     //updates it with the new value
            return newValues;               //updated the actual values array 
        });
    };

    return(
        <div>
            <h1>Question Form</h1>
            {
                options.map((option, index) => {
                    return(
                        <QuestionInput 
                            key = {index}
                            id={index} 
                            option={option.charAt(0).toUpperCase() + option.slice(1)}
                            checked={values[option]}
                            onChange={(checked)  => handleChange(index, checked)}
                        />
                    );
                })
            }
            
        </div>
    );

}

export default QuestionForm;