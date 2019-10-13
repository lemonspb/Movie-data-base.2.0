import React from 'react';


export interface Person {
    media_type: 'person',

         name: string,
        id: number,
        known_for_department:string,
        profile_path:string
        
}
export function PersonCard({ person }: { person: Person }) {

    return (
        <div className="card">
        
        </div>
    );
}

