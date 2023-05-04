import { Film } from "@/types/film";
import React from "react"
import { FilmCard } from "../FilmCard/FilmCard";
import styles from "./FilmCards.module.scss";

interface IFilmCardsProps {
    films: Film[];
}

export const FilmCards: React.FC<IFilmCardsProps> = ({ films }) => {
    return (
        <div className={styles.filmsContainer}>
            {films.map((item) => (
                <FilmCard film={item} />
            ))}
        </div>
    )
}