const Value = ({
  number,
  value1,
  bold,
  value2,
  title,
  p,
  classname,
  isActive,
  ind,
  setIsActive,
}) => {
  return (
    <li
      onClick={() =>
        setIsActive((prevActive) => {
          return prevActive === ind ? null : ind;
        })
      }
    >
      <button>
        <div className="border"></div>
        <div className={classname}>
          <div className="bg-number"></div>
          <div className="number">
            <span>{number}</span>
          </div>
          <h2>
            {value1}
            <span>{bold}</span>
            {value2}
          </h2>
        </div>
        <div
          className={
            isActive === ind ? "info-container flex" : "info-container"
          }
        >
          <div className="text-wrapper">
            <h3 className="title">{title}</h3>
            <p className="descrip">{p}</p>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Value;
