import { useState } from "react";
import data from "./data";

export default function Accordian() {
  // for single selection
  const [selected, setSelected] = useState(null);
  function onHandleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? setSelected(null) : getCurrentId);
  }

  // for multiple selection
  const [EnableMultiSelection, setEnableMultiSelection] = useState(false);
  const [Multi, setMulti] = useState([]);

  function onMultiSelection(getCurrentId) {
    let cpyMultiple = [...Multi];
    let IndexInArray = cpyMultiple.indexOf(getCurrentId);
    setMulti(cpyMultiple);
    if (IndexInArray == -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(IndexInArray, 1);
    }
  }

  return (
    <div className="wrapper">
      <button
        className="btn"
        onClick={() => setEnableMultiSelection(!EnableMultiSelection)}
      >
        Enable multi selection
      </button>
      {data && data.length > 0 ? (
        <div className="Accordian">
          {data.map((DataItem) => (
            <div key={DataItem.id}>
              <div
                onClick={
                  EnableMultiSelection
                    ? () => onMultiSelection(DataItem.id)
                    : () => onHandleClick(DataItem.id)
                }
              >
                <div className="question">
                  <h2> {DataItem.question} </h2>{" "}
                  <span className="showAnswer">+</span>
                </div>

                {selected === DataItem.id ||
                Multi.indexOf(DataItem.id) !== -1 ? (
                  <div className="answer">{DataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : (
        "Data not found"
      )}
    </div>
  );
}
