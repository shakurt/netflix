import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";

// COMPONENTS
import NotFound from "../not-found/NotFound";
import Header from "../movies/Header";
import Container from "../../UI/Container";

// IMAGES
import { ReactComponent as Netflix } from "../../../assets/images/n.svg";

const Movie = () => {
	const { id } = useParams();
	const [notFound, setNotFound] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	// MOVIE
	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3001/movies/${id}`)
			.then((response) => {
				if (!response.ok) {
					setNotFound(true);
					setIsLoading(false);
					return;
				} else {
					return response.json();
				}
			})
			.then((data) => {
				setMovie(data);
				setIsLoading(false);
			});
	}, [id]);

	if (notFound) {
		return (
			<>
				{isLoading ? <p>Loading</p> : undefined}
				<NotFound />
			</>
		);
	}
	return (
		<>
			<Header />
			<main>
				<Container>
					<section className={styles.banner}>
						<div className={styles["left-banner"]}>
							<h1>{movie.Title}</h1>
							<section className={styles.desc}>
								<h3>{movie.Title}</h3>
								<div className={styles.date}>
									<span>{movie.Year}</span>
									<span>{movie.Released.split(" ")[0]}</span>
									<span>{movie.Runtime}</span>
									<span>{movie.Genre}</span>
								</div>
								<p>{movie.Plot}</p>
								<div className={styles.actors}>
									<span>Actors:</span>
									<span>{movie.Actors}</span>
								</div>
							</section>
						</div>
						<div className={styles["right-banner"]}>
							<img src={movie.Images[1]} />
						</div>
						<section className={styles.watch}></section>
					</section>
				</Container>
			</main>
		</>
	);
};

export default Movie;
