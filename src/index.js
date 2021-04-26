//const element = document.createElement('h1')
//element.innerText = 'Hello React'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root')

//ReactDOM.render(___QUE___,____DONDE____)

ReactDOM.render(<App />, container)

/*<div>
                    <Welcome
                      username="Mauricio"
                    />
                    <Card
                    title="Technique Guides"
                    description="Learn amazing street workout and calisthenics"
                    img={exerciseImg}
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                    />
                </div>*/
