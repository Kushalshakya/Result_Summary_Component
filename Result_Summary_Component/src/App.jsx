import React from 'react'
import './style.css'

function App () {
    return (
        <div id="app-main">
            <div className="app-wrapper">
            <div className="container-app">
                <div className="result-app">
                    <h2>Your Result</h2>
                    <div className="count">
                        <h4>76</h4>
                        <h5>of 100</h5>
                    </div>
                    <h1>Great</h1>                    
                    <p>You scored higher than 65% of<br/>the people who have taken<br/>these tests</p>
                </div>
                <div className="summary-app">
                    <h2>Summary</h2>
                    <ul>
                        <li>
                            <div className="option1">
                                <img src="./src/assets/images/icon-reaction.svg" alt="summary-icon"/>
                                <span>Reaction</span>
                            </div>
                            <div className="option2">
                                <h3>80 &nbsp;/<span>&nbsp;100</span></h3>
                            </div>
                        </li>
                        <li>
                            <div className="option1">
                                <img src="./src/assets/images/icon-memory.svg" alt="summary-icon"/>
                                <span>Memory</span>
                            </div>
                            <div className="option2">
                                <h3>92 &nbsp;/<span>&nbsp;100</span></h3>
                            </div>
                        </li>
                        <li>
                            <div className="option1">
                                <img src="./src/assets/images/icon-verbal.svg" alt="summary-icon"/>
                                <span>Verbal</span>
                            </div>
                            <div className="option2">
                                <h3>61 &nbsp;/<span>&nbsp;100</span></h3>
                            </div>
                        </li>
                        <li>
                            <div className="option1">
                                <img src="./src/assets/images/icon-visual.svg" alt="summary-icon"/>
                                <span>Visual</span>
                            </div>
                            <div className="option2">
                                <h3>72 &nbsp;/<span>&nbsp;100</span></h3>
                            </div>
                        </li>
                        <button className="continue">Continue</button>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default App