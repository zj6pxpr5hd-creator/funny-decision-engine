import QuestionInput from "./QuestionInput";
import { useState } from "react";

function QuestionForm(){
    const options  =  [
        "comfort",
        "growth", 
        "relations", 
        "reflect", 
        "stay at home",
        "go out",
        "study",
        "work",
        "go for a walk",
        "journal",
        "play videogames",
        "watch tv",
        "read a book",
        "talk with friends",
        "call grandma"
    ];  //array of each choice text
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
        <section className="form">
            <h2>What are your priorities?</h2>
            <div className="checkbox-container">
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
        </section>
    );

}

export default QuestionForm;