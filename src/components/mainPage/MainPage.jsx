import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import { categoriesSelector } from "../../Redux/selector/selector";
import { imagesAsyncThunk } from "../../Redux/actions/actions";

import "./MainPage.scss";

const MainPage = () => {
  const { cats } = useSelector(categoriesSelector);
  console.log(cats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imagesAsyncThunk());
  }, []);
  return (
    <div className="page">
      <div className="page__sidebar">
        <Sidebar />
      </div>
      <div className="page__content">
        {cats.map((cat) => (
          <div className='cards'>
            <div className='cards__container'>
              <div className='cards__image'>
                  <img classNmae='cat__image' src={cat.url} alt={cat.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;




// [
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "r",
//         "url": "https://26.media.tumblr.com/tumblr_krvvyt91aU1qa9hjso1_1280.png",
//         "width": 509,
//         "height": 344
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "v",
//         "url": "https://29.media.tumblr.com/tumblr_krvvj0ZbSA1qa9hjso1_1280.jpg",
//         "width": 500,
//         "height": 500
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "382",
//         "url": "https://cdn2.thecatapi.com/images/382.jpg",
//         "width": 580,
//         "height": 812
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "391",
//         "url": "https://cdn2.thecatapi.com/images/391.jpg",
//         "width": 1024,
//         "height": 946
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "39r",
//         "url": "https://cdn2.thecatapi.com/images/39r.jpg",
//         "width": 1024,
//         "height": 680
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "7g2",
//         "url": "https://cdn2.thecatapi.com/images/7g2.jpg",
//         "width": 500,
//         "height": 501
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "7ht",
//         "url": "https://cdn2.thecatapi.com/images/7ht.jpg",
//         "width": 4752,
//         "height": 3168
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "7ij",
//         "url": "https://cdn2.thecatapi.com/images/7ij.jpg",
//         "width": 500,
//         "height": 500
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "7j2",
//         "url": "https://cdn2.thecatapi.com/images/7j2.jpg",
//         "width": 580,
//         "height": 388
//     },
//     {
//         "breeds": [],
//         "categories": [
//             {
//                 "id": 1,
//                 "name": "hats"
//             }
//         ],
//         "id": "7jk",
//         "url": "https://cdn2.thecatapi.com/images/7jk.png",
//         "width": 638,
//         "height": 478
//     }
// ]
