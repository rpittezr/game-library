import NewGameForm from "./components/NewGameForm";
import Game from "./components/Game";
import useGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div className="app">
      <h1>Game Library</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2 style={{ marginBlockStart: "24px" }}>
            Nothing to show :( <br />
            Add some games!
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
