import { useState } from "react";
import "./SearchField.css";

// type Information = {
//     id: number;
//     url: String;
//     file_type: string;
//   }


const SearchField = () => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  const [url, setUrl] = useState("");
  const [information, setInformation] = useState();

  function check() {
    return !!pattern.test(url);
  };

  const handleTyped = (e) => {
    setUrl(e.target.value);
    if(!check()){
        console.log(" invalid url ");
    }else{
        console.log(" valid url ");
        console.log(fetchData(url));
    }
  };

  const fetchData = async () =>{
         const res = await axios.get(`https://mockend.com/org/repo/users?url=${url}`,);
         return res;
  };

  return (
    <div>
      <h3 className="heading"> validate a url </h3>
      <input
        type="text"
        placeholder="Search.."
        className="search_field"
        onChange={handleTyped}
      ></input>
    </div>
  );
};
export default SearchField;
