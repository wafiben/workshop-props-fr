import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./componets/listOfUsers";

function App() {
  const users = [
    { id: 1, name: "wafi",email:"wafibenjeddou@gmail.com",score: 9 },
    { id: 2, name: "Mohammed", email:"mohammed@gmail.com",score: 7 },
    { id: 3, name: "assia", email:"asssia@gmail.com",score: 7 },
    { id: 4, name: "rania", email:"rana@gmail.com",score: 7 },
  ];

  const showScore=(score)=>{
    alert(score)
  }

  return (
    <div className="App">
      <ListOfUsers users={users} showScore={showScore} />
    </div>
  );
}

export default App;
