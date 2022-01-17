import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


   
  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState({
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,
    seven:0  
  })
 
  const handleRandom = ()=>{

    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const handleVote = () =>{
    if(anecdotes.indexOf(anecdotes[selected])==0){
      let newVote = {
        ...vote,
        one:vote.one+1
      }
      setVote(newVote)

    }else if(anecdotes.indexOf(anecdotes[selected])==1){
      let newVote ={
        ...vote,
        two:vote.two+1
      }
      setVote(newVote)

    }else if(anecdotes.indexOf(anecdotes[selected])==2){
      let newVote ={
        ...vote,
        three:vote.three+1
      }
      setVote(newVote)

    }else if(anecdotes.indexOf(anecdotes[selected])==3){
      let newVote ={
        ...vote,
        four:vote.four+1
      }
      setVote(newVote)

    }else if(anecdotes.indexOf(anecdotes[selected])==4){
      let newVote ={
        ...vote,
        five:vote.five+1
      }
      setVote(newVote)

    }else if(anecdotes.indexOf(anecdotes[selected])==5){
      let newVote ={
        ...vote,
        six:vote.six+1
      }
      setVote(newVote)

    }else if(anecdotes.indexOf(anecdotes[selected])==6){
      let newVote ={
        ...vote,
        seven:vote.seven+1
      }
      setVote(newVote)
    }

  }
  const result = Object.keys(vote).map((key) => [(key), vote[key]]);
  let count =anecdotes.indexOf(anecdotes[selected]);
  const voted =result[count][1];
  
  function getMax(a){
    return Math.max(...a.map(e => Array.isArray(e[1]) ? getMax(e[1]) : e[1]));
  }
  const maxCount =getMax(result)
console.log(...result.indexOf(maxCount))
   


  return (
    <>
    <div>
     <div> {anecdotes[selected] }</div><br/>
     <div>Number of votes: {voted}</div>


     

      <br/>
      <button onClick={handleRandom}>Next</button>
      <button onClick={handleVote}>Vote</button>
      <br/><br/>
      <h3>Anecdote with the most votes</h3>
      is with {maxCount} votes
    </div>
    </>
  )
}

export default App