import React from 'react';


export interface TV {
        name: string,
        id: number,
        media_type: string,
        overview:string,
        first_air_date: string,
        poster_path: string,
        title: string,
        release_date: string,

}
export function TvCard({ tv }: { tv: TV }) {

    return (
        <div className="card">
        
        </div>
    );
}

