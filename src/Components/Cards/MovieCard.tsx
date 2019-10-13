import React from 'react';


export interface Movie {
        media_type: 'movie',
        title: string,
        id: number,
        overview: string,
        poster_path: string,
        release_date: string,
}
export function MovieCard({ movie }: { movie: Movie }) {

    return (
        <div className="card">
        { movie.id}
        </div>
    );
}

