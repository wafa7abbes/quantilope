import React, { useState, useEffect } from "react";
import { IconButton } from "../common/IconButton";
import { EditText, EditTextarea } from "react-edit-text";
import { RadioButton } from "../common/radioButton";

export const Row = (props) => {
  const { id, rowIndex, columnsNumber } = props;
  const [NewColumns, setNewColumns] = useState([]);
  let array = [];
  useEffect(() => {
    for (let i = 0; i < columnsNumber; i++) {
      array.push(i);
    }
    setNewColumns([...array]);
  }, [columnsNumber]);
  return (
    <tr key={id}>
      <td style={{ padding: 8 }}>
        <IconButton
          theme={"primary"}
          // action={() => }
        />
      </td>

      <td style={{ padding: 8 }}>
        <EditText
          // showEditButton
          defaultValue={`row ${rowIndex}`}
          //value={"I am the second"}
          //onSave
          //onChange
          //onEditMode
          //style
        />
      </td>
      {NewColumns.map((index, id) => {
        return <RadioButton key={id} />;
      })}
    </tr>
  );
};
