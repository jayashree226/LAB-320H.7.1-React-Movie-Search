import {useState, useEffect} from "react";
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css'



function App() {
 
const apiKey = '2f48b5e5';
const [movie, setMovie] = useState(null);

//get movie
// const getMovie = async(searchTerm) => {

//    const response = await fetch(
//       `http://www.omdbapi.com/?apiKey=${apiKey}&t=${searchTerm}`
      
//     );
//     const data = await response.json();
//     console.log(data);
//     setMovie(data);
// };

const getMovie = async(searchTerm) => {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
		);
		const data = await response.json();
		setMovie(data);
	} catch(e) {
		console.error(e)
	}
}

//use effect

useEffect(() => {
  console.log('Running use effects');
  getMovie("transformers");
}, []);
  return (
    <>
      <h1>Form Component</h1>
      <Form moviesearch={getMovie}/>
      {/* {movie && <MovieDisplay  movie={movie} />} */}
      {movie ? <MovieDisplay  movie={movie} /> :<h1>No Movie to Display</h1> }
      
    </>
);

}
export default App
