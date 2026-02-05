
function CalculateResult(values, setResult) {
    const rand =  Math.floor(Math.random() * 4) + 1;
    if(values.comfort === 0 && values.growth === 0 && values.relations === 0 && values.reflect === 0){
            console.log(values);    //FOR TESTING 
        setResult("What do you want me to do? Guess?  Just select something!");
        }else{
        setResult("calculating response...");
        setTimeout(() => {
        if(values.comfort === values.growth && values.comfort === values.relations && values.comfort === values.reflect){
            switch (rand) {
                case 1:
                    setResult("I don't know, flip a coin?");
                    break;
                case 2:
                    setResult("I think you should just stay in bed and rethink your life choices.");
                    break;
                case 3:
                    setResult("What about trying something new, like juggling flaming swords?");
                    break;
                default:
                    setResult("This decision screams indecision. Classic.");
        } 
        }else  if(values.comfort >= values.growth && values.comfort >= values.relations && values.comfort >= values.reflect){
            switch (rand) {
                case 1:
                    setResult("Why not take a nap? You definitely deserve it...");
                    break;
                case 2:
                    setResult("What about wasting another day doomscrolling? That seems to work everytime.");
                    break;
                case 3:
                    setResult("I think you should lay in bed and watch Netflix all day. Who needs self-improvement anyway?");
                    break;
                default:
                    setResult("YES relaxing is exactly what you need, right! I mean who cares about improving? Self-improvement is a myth anyway...");
            } 
        }else if(values.growth >= values.comfort && values.growth >= values.relations && values.growth >= values.reflect){
            switch (rand) {
                case 1:
                    setResult("You should totally read a self-help book! I mean it's not like you have real problems or anything...");
                    break;
                case 2:
                    setResult("Let's watch another self-improvement podcast! Who cares about expiriences when you know about the effects of sunlight on the pineal gland.");
                    break;
                case 3:
                    setResult("I think you should go work out. I mean it's not like you can barely walk through doors anyway...");
                    break;
                default:
                    setResult("YES LET'S WORK MORE! I mean you haven't heard your mum in a while but she ain't going to help you achieve your dreams...");
            }
        }else if(values.relations >= values.comfort && values.relations >= values.growth && values.relations >= values.reflect){
            
            switch (rand) {
                case 1:
                    setResult("I would tell you to go talk to a friend, but i think they are busy... You know with jobs and families, those wierd thing for adults. Maybe get a dog?");
                    break;
                case 2:
                    setResult("Another day another party! Why not invite some friends over and ignore your problems together?");
                    break;
                case 3:
                    setResult("Let's go out and get wasted, i think that is the best way to deal with your childhood trauma.");
                    break;
                default:
                    setResult("I think you should take time to connect with others! I mean it's not like you are ignoring your internal monolouge and looking for comfort in the presence of others...");
            }
            
            
        }else{
            
            switch (rand) {
                case 1:
                    setResult("I think you should take a long walk alone in nature. Let's ignore your deeply rooted social anxiety as much as possible.");
                    break;
                case 2:
                    setResult("I think you that you should meditate on your life choices. Maybe you will understand why you are like this.");
                    break;
                case 3:
                    setResult("Staying at home will be good for you. Just think about all the things you can avoid by not going outside.");
                    break;
                default:
                    setResult("Take some more time for yourself. I mean you haven't spoken to a human being in a while but they are all weird anyway, right?");
            }
            
            //
        }
        }, 1400);

    }
}
export default CalculateResult;