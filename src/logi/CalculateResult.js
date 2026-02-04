
function CalculateResult(values, setResult) {
    if(values.comfort === 0 && values.growth === 0 && values.relations === 0 && values.reflect === 0){
            console.log(values);    //FOR TESTING 
        setResult("What do you want me to do? Guess?  Just select something!");
        }else{
        setResult("calculating response...");
        setTimeout(() => {
        if(values.comfort >= values.growth && values.comfort >= values.relations && values.comfort >= values.reflect){
            setResult("YES relaxing is exactly what you need, right! I mean who cares about improving? Self-improvement is a myth anyway...");
        }else if(values.growth >= values.comfort && values.growth >= values.relations && values.growth >= values.reflect){
            setResult("YES LET'S WORK MORE! I mean you haven't heard your mum in a while but she ain't going to help you achieve your dreams...");
        }else if(values.relations >= values.comfort && values.relations >= values.growth && values.relations >= values.reflect){
            setResult("I think you should take time to connect with others! I mean it's not like you are ignoring your internal monolouge and looking for comfort in the presence of other...");
        }else{
            setResult("Take some more time for yourself. I mean you haven't spoken to a human being in a while but they are all weird anyway, right?");
        }
        }, 1400);

    }
}
export default CalculateResult;