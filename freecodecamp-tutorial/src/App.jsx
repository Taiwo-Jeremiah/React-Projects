import "./App.css";
import { MoodBoardItem } from "./moodboard";

export function App() {
  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <MoodBoardItem
        color="#000"
        image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
        description="Pathway"
      />
      <MoodBoardItem
        color="#333"
        image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
        description="Shore"
      />
      <MoodBoardItem
        color="#666"
        image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
        description="Grass"
      />
    </div>
  );
}

export default App;
