import { useState } from "react";
import "./app.css";
import RenderList from "./components/renderList";

function App() {
  const [input, setInput] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);

  const handleChange = (e) => {
    const uniqueIdentifier = `${Date.now()}_${Math.random()}`;
    console.log(uniqueIdentifier);
    console.log("input #", e.target.value);
    setInput({ id: uniqueIdentifier, value: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDataArray((prev) => [...prev, input]);
    setInput({});
  };

  const handleDelete = (data) => {
    console.log("Delete clicked #", data);
    const filteredDataArray = dataArray.filter((item) => item.id !== data.id);
    setDataArray(filteredDataArray);
  };

  const handleClearCompleted = () => {
    const remaningData = dataArray.filter(
      (item) => !checkedIds.includes(item.id)
    );

    setDataArray(remaningData);
  };

  const handleMarkAllCompleted = () => {
    console.log("Data Array ##", dataArray);
    const arr2 = dataArray.map((item) => item.id);
    console.log("arr2 ##", arr2);
    setCheckedIds(arr2);
  };

  const handleCheckboxChange = (event) => {
    const selectedId = event.target.id;

    setCheckedIds((prevIds) =>
      event.target.checked
        ? [...prevIds, selectedId]
        : prevIds.filter((id) => id !== selectedId)
    );
  };
  console.log("checkedIds #", checkedIds);

  return (
    <div className="appContainer">
      <header className="header">Redux Fundamentals Example</header>
      <div className="body">
        <p className="body-p">Todos</p>
        <div className="body-dashboard">
          <div className="upper-body">
            <input
              className="upper-body-input"
              placeholder="What needs to be done?"
              value={input.value || " "}
              onChange={handleChange}
            />
            <button className="addButton" onClick={handleClick}>
              submit
            </button>
            <RenderList
              dataArray={dataArray}
              handleDelete={handleDelete}
              handleCheckboxChange={handleCheckboxChange}
              checkedIds={checkedIds}
            />
          </div>
          <div className="footer">
            <div className="box">
              <span>Actions</span>
              <button
                className="actionsButton"
                onClick={handleMarkAllCompleted}
              >
                Mark All Completed
              </button>
              <button className="actionsButton" onClick={handleClearCompleted}>
                Clear completed
              </button>
            </div>
            <div className="box2">
              <span>Remaining Todos</span>
            </div>
            <div className="box3">
              <span>Filter by Status</span>
              <button className="statusButton">All</button>
              <button className="statusButton">Active</button>
              <button className="statusButton">Completed</button>
            </div>
            <div className="box4">
              <span>Filter by Color</span>
              <label>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <span style={{ color: "green" }}>Green</span>
              </label>
              <label>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <span style={{ color: "red" }}>Red</span>
              </label>
              <label>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <span style={{ color: "blue" }}>Bule</span>
              </label>
              <label>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <span style={{ color: "orange" }}>Orange</span>
              </label>
              <label>
                <input type="checkbox" style={{ marginRight: "10px" }} />
                <span style={{ color: "purple" }}>Purple</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
