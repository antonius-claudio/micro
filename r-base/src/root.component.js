import React from "react";
import { getNilai, setNilai } from "@micro/api";

export default function Root(props) {
  const [nilaiLokal, setNilaiLokal] = React.useState(0);

  React.useEffect(() => {
    getNilaiLokal();
  }, []);

  const getNilaiLokal = async () => {
    const nilai = await getNilai();
    console.log('nilai', nilai)
    setNilaiLokal(nilai);
  };

  const handleOnclick = async () => {
    const newVal = nilaiLokal + 1;
    const newNilai = await setNilai(newVal);
    setNilaiLokal(newNilai);
  };

  return <section>
    <div>{props.name} is mounted!</div>
    <button onClick={handleOnclick}>increment</button>
    <div>Nilai: {nilaiLokal}</div>
  </section>;
}
