// DataBox.jsx

const DataBox = (props) => {
  return (
    <div className="data-box">
      <p className="data-box__label">{props.label}</p>
      <p className="data-box__value">{props.value}</p>
    </div>
  );
};

export default DataBox;
