


import {useState} from 'react'

let curr = 0

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
]

const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
)

const Anecdote = ({curr, votes}) => (
    <div>
        <div>{anecdotes[curr]}</div>
        <div>has {votes} votes</div>
    </div>
)

const Most = ({anecdotes, votes}) => {
    const max = Math.max(...votes)
    const maxindex = votes.indexOf(max)

    return (
        <div>
            <div>{anecdotes[maxindex]}</div>
            <div>has {votes[maxindex]} votes</div>
        </div>
    )
}

const App = () => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const randomAnecdote = () => {
        let old = curr;
        do {
            curr = Math.floor(Math.random()*anecdotes.length)
            // console.log(curr)
            setSelected(curr)
        } while (curr === old)

    }

    const vote = () => {
        copy[curr] += 1
        setVotes(copy)
    }

    const copy = [...votes]

    // console.log(Math.floor(Math.random()*10))

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote curr={curr} votes={copy[curr]}/>
            <Button text="next anecdote" onClick={randomAnecdote}/>
            <Button text="vote" onClick={vote}/>

            <h1>Anecdote with most votes</h1>
            <Most anecdotes={anecdotes} votes={votes}/>

        </div>
    )
}

export default App