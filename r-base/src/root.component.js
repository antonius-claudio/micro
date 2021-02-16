import React from "react";
import { getNilai, setNilai } from "@micro/api";

export default function Root(props) {
  const [nilaiLokal, setNilaiLokal] = React.useState(0);

  React.useEffect(() => {
    getNilaiLokal();
    window.addEventListener("addFromSBase", detectEvtFromSBase)
  }, []);

  const detectEvtFromSBase = () => {
    getNilaiLokal();
  };

  const getNilaiLokal = async () => {
    const nilai = await getNilai();
    setNilaiLokal(nilai);
  };

  const handleOnclick = async () => {
    const newVal = nilaiLokal + 1;
    const newNilai = await setNilai(newVal);
    setNilaiLokal(newNilai);
    const event = new CustomEvent('addFromRBase');
    window.dispatchEvent(event);
  };

  return <section>
    <div>{props.name} is mounted!</div>
    <button onClick={handleOnclick}>increment</button>
    <div>Nilai: {nilaiLokal}</div>
  </section>;
}
