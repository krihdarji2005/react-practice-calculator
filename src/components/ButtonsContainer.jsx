import styles from "./ButtonsContainer.module.css";
function ButtonsContainer({ displayVal, displaySetValue }) {
  const buttonNames = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];
  
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((item) => (
        <button
          className={styles.button}
          onClick={(event) => {
            if (item === "c") {
              displaySetValue("");
            } else if (item === "=") {
              try {
                displaySetValue(eval(displayVal));
              } catch {
                displaySetValue("ERROR!@#");
              }
              
            } else {
              displaySetValue(displayVal + item);
            }
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default ButtonsContainer;
