import React from 'react';

const Notification = ({ message }) => {
    return (
        <div style={{ position: 'fixed', top: '120px', right: '10px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px', borderRadius: '5px' }}>
            {message}
        </div>
    );
};

export default Notification;