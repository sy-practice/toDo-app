import "./renderList.css";

const RenderList = ({
  dataArray,
  handleDelete,
  handleCheckboxChange,
  checkedIds,
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
            <select>
              <option value="0">Select car:</option>
              <option
                value="1"
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Green
              </option>
              <option value="2" style={{ color: "red", fontWeight: "bold" }}>
                Red
              </option>
              <option value="3" style={{ color: "blue", fontWeight: "bold" }}>
                Blue
              </option>
              <option value="4" style={{ color: "orange", fontWeight: "bold" }}>
                Orange
              </option>
              <option value="5" style={{ color: "purple", fontWeight: "bold" }}>
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
