import React, { useEffect, useState } from "react";

// CSS
import styles from "./Movies.module.css";

// COMPONENTS
import Container from "../../UI/Container";
import Header from "./Header";

// ROUTER
import { Link } from "react-router-dom";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [isloading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3001/movies")
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);

	return (
		<>
			<Header />
			<main className={styles.main}>
				<Container className={styles["main-container"]}>
					<section className={styles["title-section"]}>
						<h2>Movies</h2>
						<p>
							Movies move us like nothing else can, whether they’re scary,
							funny, dramatic, romantic or anywhere in-between. So many titles,
							so much to experience.
						</p>
					</section>
					<section className={styles["movie-section"]}>
						<ul className={styles.movies}>
							{movies.map((movie) => {
								return (
									<li className={styles.movie} key={movie.id}>
										<Link to={`movie/${movie.id}`}>
											<img
												className={styles.poster}
												src={movie.Poster}
												alt="poster or cover of movie"
											/>
										</Link>
										<h2 className={styles.title}>
											<Link to={`movie/${movie.id}`}>{movie.Title}</Link>
										</h2>
										{movie.ComingSoon ? (
											<p className={styles.comming}>Comming Soon</p>
										) : undefined}
									</li>
								);
							})}
						</ul>
					</section>
				</Container>
			</main>
		</>
	);
};

export default Movies;
