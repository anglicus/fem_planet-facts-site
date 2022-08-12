// DataBox.jsx

const DataBox = (props) => {
  return (
    <div className="data-box">
      <h3 className="data-box__label heading heading--data-label">
        {props.label}
      </h3>
      <h4 className="data-box__value heading heading--data-value">
        {props.value}
      </h4>
    </div>
  );
};

export default DataBox;
