import "./renderList.css";

const RenderList = ({
  dataArray,
  handleDelete,
  handleCheckboxChange,
  checkedIds,
  selectedColor,
  // setSelectedColor,
  selectedColorChange,
}) => {
  return (
    <div>
      {dataArray.map((item) => (
        <div className="render-list-container" key={item.id}>
          <input
            id={item.id}
            className="input-checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={checkedIds.includes(item.id)}
          />
          <div className="item-task">{item.value}</div>
          <div>
            <select
              value={selectedColor}
              onChange={(event) => selectedColorChange(event, item)}
            >
              <option value="0">Select car:</option>
              <option
                value="green"
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Green
              </option>
              <option value="red" style={{ color: "red", fontWeight: "bold" }}>
                Red
              </option>
              <option
                value="blue"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                Blue
              </option>
              <option
                value="orange"
                style={{ color: "orange", fontWeight: "bold" }}
              >
                Orange
              </option>
              <option
                value="purple"
                style={{ color: "purple", fontWeight: "bold" }}
              >
                Purple
              </option>
            </select>
          </div>
          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RenderList;
