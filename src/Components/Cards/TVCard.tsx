import React from 'react';


export interface TV {
    media_type: 'tv',

        name: string,
        id: number,
        overview:string,
        first_air_date: string,
        poster_path: string,
        release_date: string,

}
export function TvCard({ tv }: { tv: TV }) {

    return (
        <div className="card">
        {tv.name}
        </div>
    );
}

