import Value from "./Value";
import values from "../data/data";
import { useState } from "react";

const Container = () => {
  const [isActive, setIsActive] = useState(null);

  return (
    <section>
      <h1 className="heading">
        Our Company Core Values are at the Heart of Everything We Do
      </h1>
      <ul className="wrapper">
        {values.map((elem, i) => {
          const { id, number, value1, bold, value2, title, p } = elem;
          if (i % 2 === 0) {
            return (
              <Value
                classname="container-up"
                key={id}
                number={number}
                value1={value1}
                bold={bold}
                value2={value2}
                title={title}
                p={p}
                isActive={isActive}
                ind={i}
                setIsActive={setIsActive}
              />
            );
          }
          return (
            <Value
              classname="container-down"
              key={id}
              number={number}
              value1={value1}
              bold={bold}
              value2={value2}
              title={title}
              p={p}
              isActive={isActive}
              ind={i}
              setIsActive={setIsActive}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Container;
