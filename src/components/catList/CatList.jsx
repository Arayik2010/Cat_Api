import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { imagesAsyncThunk } from "../../Redux/actions/actions";
import { categoriesSelector } from "../../Redux/selector/selector";

const CatList = () => {
  const { cats } = useSelector(categoriesSelector);
  const dispatch = useDispatch();
  //   console.log(cats);
  const { id } = useParams();
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    dispatch(imagesAsyncThunk(id));
  }, [id]);

  return (
    <>
      {cats.map((cat) => (
        <div className="cards" key={cat.id}>
          <div className="cards__container">
            <div className="cards__image">
              <img className="cat__image" src={cat.url} alt={cat.id} />
            </div>
          </div>
        </div>
      ))}
      {location.pathname !== "/" ? (
        <button className="add__cats">Add more cats</button>
      ) : null}
    </>
  );
};

export default CatList;
