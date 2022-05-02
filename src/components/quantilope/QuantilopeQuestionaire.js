import React, { useState, useEffect } from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { IconButton, AddButton } from "../common/IconButton";
import { Row } from "../common/Row";
import DataService from "../../service";

function QuantilopeQuestionaire() {
  const [NewRow, setNewRow] = useState([1, 2, 3]);
  const [NewColumn, setNewColumn] = useState([1, 2, 3]);

  const addNewRow = () => {
    const newRowIndex = NewRow.length + 1;
    setNewRow([...NewRow, newRowIndex]);
  };

  const addNewColumn = () => {
    const newColumnIndex = NewColumn.length + 1;
    setNewColumn([...NewColumn, newColumnIndex]);
    const res = DataService.create({
      id: 1,
      imgURL: "image",
      colName: "test",
    });
    return Promise.resolve(res.data);
  };

  useEffect(async () => {
    const res = await DataService.getAll();
    return Promise.resolve(res).then((res) =>
      console.log("res___________________", res)
    );
  }, []);

  return (
    <div>
      <h2>Question Edition View</h2>
      <p>
        This app uses React, React Router, Nodejs, MOngodb and many other
        helpful libraries.
      </p>

      <div>
        <EditText
          showEditButton
          defaultValue={"Title of the question"}
          //value={"I am the second"}
          //onSave
          //onChange
          //onEditMode
          //style
        />
      </div>
      <div style={{ margin: 16 }}>
        <table>
          <thead>
            <tr>
              <td></td>
              <td></td>
              {/*  <td>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  height="40"
                  width="40"
                ></img>
              </td> */}
              {NewColumn.map((index, id) => {
                return (
                  <td key={id} style={{ padding: 16 }}>
                    <IconButton
                      theme={"primary"}
                      // action={() => }
                    />
                  </td>
                );
              })}
              <td style={{ padding: 8 }}>
                <AddButton theme={"primary"} action={() => addNewColumn()} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              {NewColumn.map((index, id) => {
                return (
                  <td
                    key={id}
                    style={{
                      padding: 16,
                    }}
                  >
                    <EditText
                      // showEditButton
                      defaultValue={`col ${index}`}
                      //value={"I am the second"}
                      //onSave
                      //onChange
                      //onEditMode
                      //style
                    />
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {NewRow.map((index, id) => {
              return (
                <Row
                  key={id}
                  rowIndex={index}
                  columnsNumber={NewColumn.length}
                />
              );
            })}
          </tbody>
          <tr>
            <td style={{ padding: 8 }}>
              <AddButton theme={"primary"} action={() => addNewRow()} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default QuantilopeQuestionaire;
