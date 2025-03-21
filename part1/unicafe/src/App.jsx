

import {useState} from "react"


const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)


const StatisticLine = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = (props) => {
    const all = props.stats[0] + props.stats[1] + props.stats[2]

    if (all === 0) {
        return <div>No feedback given</div>
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text="good" value={props.stats[0]}/>
                    <StatisticLine text="neutral" value={props.stats[1]}/>
                    <StatisticLine text="bad" value={props.stats[2]}/>
                    <StatisticLine text="all" value={all}/>
                    <StatisticLine text="average" value={(props.stats[0]-props.stats[2])/all}/>
                    <StatisticLine text="positive" value={props.stats[0]/all*100 + "%"}/>
                </tbody>
            </table>
        </div>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodClick = () => setGood(good+1)
    const neutralClick = () => setNeutral(neutral+1)
    const badClick = () => setBad(bad+1)

    
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={goodClick} text="good"/>
            <Button onClick={neutralClick} text="neutral"/>
            <Button onClick={badClick} text="bad"/>
            <h1>statistics</h1>
            <Statistics stats={[good, neutral, bad]}/>
            
        </div>
    )


}

export default App