function Result({ result }){

    return(
        <section>
            <h1 className="result">Result:</h1>
            {result && <p>{result}</p>}
        </section>
    );

}


export default Result;