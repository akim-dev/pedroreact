import React from 'react';

function RespondingEvent() {

    const handleClick = ()=>{
        console.log(`saya sudah di klik `);
    }
    return (
        <div>
            <button onClick={handleClick}>Klik saya</button>
        </div>
    );
}

export default RespondingEvent;