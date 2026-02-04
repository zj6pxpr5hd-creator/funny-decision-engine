import QuestionInput from "./QuestionInput";
import { useState } from "react";

function QuestionForm({ saveValues }){

    //all the possible checkboxes, each one has a label (Name) and a category which is use to calculate the result of the operation
    const options = [
        { label: "Growth", category: "growth" },
        { label: "Improvement", category: "growth" },
        { label: "Learning", category: "growth" },
        { label: "Reading", category: "reflect" },
        { label: "Isolation", category: "comfort" },
        { label: "Rest", category: "comfort" },
        { label: "Relationships", category: "relations" },
        { label: "Socializing", category: "relations" },
        { label: "Reflection", category: "reflect" },
        { label: "Planning", category: "reflect" },
        { label: "Exercise", category: "comfort" },
        { label: "Work", category: "growth" },
        { label: "Play", category: "comfort" },
        { label: "Meditation", category: "reflect" },
        { label: "Connecting", category: "relations" }
    ];

    const [selected, setSelected] =  useState(     //saves the state of each checkbox
        ()  => options.map(() => false)            //one value for each checkbox to initialize them
    );                                         

    const handleChange = (index, checked) => {  //when the state of the boxes changes
        setSelected( prev => {
            const newValues = [...prev];    //copies the state array
            newValues[index] = checked;     //updates it with the new value
            return newValues;               //updated the actual values array 
        });
    };

    const Save = () => {
        const results = {    //used to save results
        comfort: 0,
        growth: 0,
        relations: 0,
        reflect: 0
    };

        selected.forEach((isChecked, index) => {  //for each element in the selected array
            if (isChecked) {                      //check if its true
                const category = options[index].category;   //finds the category of the element in the array
                results[category] += 1;             //increases category's result
            }
        });
        saveValues(results);     //"sends" results to App component
        setSelected(options.map(() => false));   //resets the checkboxes);
    };

    return(
        <section className="form">
            <h2>What are your priorities?</h2>
            <div className="checkbox-container">
            {
                options.map((option, index) => {    //for each obj in the oprion component creates a checkbox connected to the selected array
                    return(
                        <QuestionInput 
                            key = {index}
                            id={index} 
                            option={option.label.charAt(0).toUpperCase() + option.label.slice(1)}
                            checked={selected[index]}
                            onChange={(checked)  => handleChange(index, checked)}  
                        />
                    );
                })
            }
            </div>
            <button className="enter-button"  onClick={Save}>Enter</button>
        </section>
    );

}

export default QuestionForm;