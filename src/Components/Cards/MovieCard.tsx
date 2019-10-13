import React from 'react';


export interface Movie {
        title: string,
        id: number,
        overview: string,
        poster_path: string,
        media_type: string,
        release_date: string,
}
export function MovieCard({ movie }: { movie: Movie }) {

    return (
        <div className="card">
        
        </div>
    );
}

