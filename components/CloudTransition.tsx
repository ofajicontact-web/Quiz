import React from 'react';

const CloudTransition: React.FC = () => {
    return (
        <div className="cloud-transition-effect fixed inset-0 z-[999] pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="cloud" style={{ width: '40vw', height: '40vw', top: '5%', left: '-10%', animationDelay: '0s' }} />
            <div className="cloud" style={{ width: '30vw', height: '30vw', top: '25%', left: '10%', animationDelay: '0.2s' }} />
            <div className="cloud" style={{ width: '50vw', height: '50vw', top: '50%', left: '5%', animationDelay: '0.4s' }} />
            <div className="cloud" style={{ width: '35vw', height: '35vw', top: '15%', left: '40%', animationDelay: '0.1s' }} />
            <div className="cloud" style={{ width: '45vw', height: '45vw', top: '40%', left: '60%', animationDelay: '0.3s' }} />
        </div>
    );
};

export default CloudTransition;
