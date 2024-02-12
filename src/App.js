// ROUTER
import { Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/not-found/NotFound";
import Movies from "./components/pages/movies/Movies";
import Movie from "./components/pages/movie/Movie";
import CreateMovie from "./components/pages/create-movie/CreateMovie";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/Signup/Signup";
function App() {
	return (
		<>
			<Switch>
				<Route path={"/"} exact>
					<Redirect to={"/fa-en/"} />
				</Route>
				<Route path={"/fa/"} exact>
					<Home />
				</Route>
				<Route path={"/fa-en/"} exact>
					<Home />
				</Route>
				<Route path={"/movies/"} exact>
					<Movies />
				</Route>
				<Route path="/login/" exact>
					<Login />
				</Route>
				<Route path="/signup/" exact>
					<Signup />
				</Route>
				<Route path={"/movie/:id"} exact>
					<Movie />
				</Route>
				<Route path={"/create-movie"} exact>
					<CreateMovie />
				</Route>
				<Route path={"*"}>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
