// Anything exported from this file is importable by other in-browser modules.
import axios from "axios";
export async function getNilai() {
  const response =  await axios.get("https://aqueous-brushlands-89645.herokuapp.com/getNilai");
  // console.log('response', response.data.nilai);
  if (response)
    return response.data;
  else
    return 'error loh';
};

export async function setNilai(val) {
  const response =  await axios.put("https://aqueous-brushlands-89645.herokuapp.com/setNilai", {nilai: val});
  // console.log('response', response.data.nilai);
  if (response)
    return response.data;
  else
    return 'error loh';
};