// Anything exported from this file is importable by other in-browser modules.
import axios from "axios";
export async function getNilai() {
  const response =  await axios.get("http://localhost:3000/getNilai");
  // console.log('response', response.data.nilai);
  if (response)
    return response.data;
  else
    return 'error loh';
};

export async function setNilai(val) {
  const response =  await axios.put("http://localhost:3000/setNilai", {nilai: val});
  // console.log('response', response.data.nilai);
  if (response)
    return response.data;
  else
    return 'error loh';
};