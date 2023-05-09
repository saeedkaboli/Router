// import { useParams } from "react-router-dom";
import { useParams } from 'react-router-dom';
import data from "../../Data/data.js";
const Show = () => {
  const {Id}=useParams();
  console.log(typeof(Id));
  const getData=(Id)=>{
    let Item=data.find((items)=>items.id===Id);
    return Item.title
  }
  console.log(useParams());
  return (
    <div className="Show">
      <h1>
     {getData(Number(Id))}
      </h1>
    </div>
  );
};
export default Show;
