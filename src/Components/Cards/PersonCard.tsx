import React from 'react';


export interface Person {
         name: string,
        id: number,
        media_type: string,
        known_for_department:string,
        profile_path:string
        
}
export function PersonCard({ person }: { person: Person }) {

    return (
        <div className="card">
        
        </div>
    );
}

