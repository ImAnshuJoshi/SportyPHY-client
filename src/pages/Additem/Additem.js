import React,{useState} from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Additem.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Additem() {
  const userInfo = useSelector((state) => state.userInfo);
  const [image, setImage] = useState();
  const [itemname, setItemname] = useState("");
  const [itemdesc, setItemdesc] = useState("");
  const [cat, setCat] = useState("");
  const [itemprice, setItemprice] = useState("");
  const navigate = useNavigate();


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("itemname", itemname);
    form.append("description", itemdesc);
    form.append("userId", userInfo._id);
    form.append("category", cat);
    form.append("price", itemprice);
    form.append("image", image);
    form.append("username", userInfo.name);
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "items/additem",
        {
          method: "POST",
          body: form,
        }
      ).then((res) => res.json())
      .then((data) => {
        console.log(data)
        setImage("");
        setItemname("");
        setItemdesc("");
        setCat("");
        setItemprice("");      
        navigate("/buynsell");
      })
      .catch((err) => console.log(err));
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <NavBar />
      <div className="cardadditem">
        <div className="cardadditem-body">
          <h5 className="cardadditem-title">Add Item</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div>
              <label for="itemname" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                id="itemname"
                aria-describedby="emailHelp"
                onChange={(e) => setItemname(e.target.value)}
              />
              </div>
              <div>
              <label for="itemdesc" className="form-label">
                Item Description
              </label>
              <input
                type="text"
                className="form-control"
                id="itemdesc"
                aria-describedby="emailHelp"
                onChange={(e) => setItemdesc(e.target.value)}
              />
              </div>
              <div>
              <label for="cat" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="cat"
                aria-describedby="emailHelp"
                onChange={(e) => setCat(e.target.value)}
              />
              </div>
              <div>
              <label for="itemprice" className="form-label">
                Item Price
              </label>
              <input
                type="text"
                className="form-control"
                id="itemprice"
                aria-describedby="emailHelp"
                onChange={(e) => setItemprice(e.target.value)}
              />
              </div>
              <label for="itemimage" className="form-label">
                Item Image
              </label>
              <input
                type="file"
                className="form-control"
                id="itemimage"
                aria-describedby="emailHelp"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button type="submit" className="additembutton">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Additem;
