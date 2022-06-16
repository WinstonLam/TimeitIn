import "../styles/App.css";
import Accordion from "./Accordion";

const items = [
  {
    title: "test title",
    content: "this is test content",
  },
  {
    title: "test title",
    content: "this is test content",
  },
  {
    title: "test title",
    content: "this is test content",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
