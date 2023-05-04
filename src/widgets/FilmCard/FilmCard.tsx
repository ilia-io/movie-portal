import { Film } from "@/types/film";
import React from "react";
import styles from "./FilmCard.module.scss";

interface IFilmCardProps {
    film: Film;
}

export const FilmCard: React.FC<IFilmCardProps> = ( {film} ) => {

    return (
        <div className={styles.filmContainer}>
            <a href={'/films/film?name=' + film.id}><img className={styles.poster} src={film.poster.previewUrl} alt="film image" /></a>
            <h3>{film.name}</h3>
            <p>Бесплатно</p>
        </div>
    )
}