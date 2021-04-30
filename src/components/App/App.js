import React,{useEffect, useState} from "react";
import './App.scss';
import { useDispatch } from "react-redux";
import { setAllNews } from '../../redux/actions';



function App() {

  const dispatch = useDispatch();

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {

    const headers = {'X-Api-Key': '15ea98e4716e4fe3814a25cfb352d1c7'};

    (async function(){
      fetch("https://newsapi.org/v2/top-headlines?country=us",{headers})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.articles);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    })();

  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item,index) => (
          <li key={index} index={index}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
