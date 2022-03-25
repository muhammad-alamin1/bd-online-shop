import React from 'react';
import './notFound.css';

// styles 
const styles = {
    textAlign: 'center',
    color: 'red',
    fontStyle: 'italic',
}

const NotFound = () => {
    return (
        <div style={styles}>
            <h1>AWWW...DON'T CRY</h1>
            <h4 style={{ color: 'red' }}>It's just 404 Error!</h4>
            <p>What you are looking for may have been misplaced in long term memory.!</p>
        </div>
    );
};

export default NotFound;