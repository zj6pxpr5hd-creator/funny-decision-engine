function Result({ result }){

    return(
        <section>
            <h1>Result</h1>
            {result && <p>{result}</p>}
        </section>
    );

}


export default Result;