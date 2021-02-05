import React from "react";

export const FilterControl = React.memo((props) => {
  const { options } = props;
  return (
    <ul>
      {
        options.length && options.map((opt, index) => <li key={index}>{opt}</li>)
      }
    </ul>
  )
})