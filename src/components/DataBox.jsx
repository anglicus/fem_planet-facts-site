// DataBox.jsx

const DataBox = (props) => {
  return (
    <div className="data-box">
      <h4 className="data-box__label heading heading--data-label">
        {props.label}
      </h4>
      <h5 className="data-box__value heading heading--data-value">
        {props.value}
      </h5>
    </div>
  );
};

export default DataBox;
