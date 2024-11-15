import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Player/Player"
function App() {
  
  return (
   <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player firstName={'Player 1'} symbol={'X'}/>
        <Player firstName={'Player 2'} symbol={'O'}/>
      </ol>
      <GameBoard/>
    </div>
    log
   </>
  )
}

export default App
