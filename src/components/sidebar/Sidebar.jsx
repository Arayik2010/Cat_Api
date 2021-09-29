import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryAsyncThunk } from "../../Redux/actions/actions";
import { categoriesSelector } from "../../Redux/selector/selector";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Sidebar = () => {
  const { categories } = useSelector(categoriesSelector);
  console.log(categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryAsyncThunk());
  }, []);

  const category = categories.map((category) => (
    <li key={category.id}>
      <Link to={`/cats/${category.name}/${category.id}`}>{category.name}</Link>
    </li>
  ));
  console.log(category);

  return (
    <Router>
      <div>
        <nav>
          <ul>{category}</ul>
        </nav>
      </div>
    </Router>
  );
};

export default Sidebar;
