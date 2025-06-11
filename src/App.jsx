import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {

  let [displayVal,displaySetValue]=useState("");

  return (
    <div className={styles.calculator}>
      <Display displayVal={displayVal}></Display>
      <ButtonsContainer displaySetValue={displaySetValue} displayVal={displayVal}></ButtonsContainer>
      <p className={styles.credit}>Krish Darji</p>
    </div>
  );
}

export default App;
