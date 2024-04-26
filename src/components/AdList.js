import React from 'react';
import { useSelector } from 'react-redux';
import Ad from './Ad.js';
import '../style/AdList.css';

const AdList = () => {
    const ads = useSelector(state => state.ads);

    return (
        <div className="ad-list-container">
            <h2 className="ad-list-title">List of advertisements</h2>
            <div className="ad-list">
                {ads.map(ad => (
                    <Ad key={ad.id} {...ad} />
                ))}
            </div>
        </div>
    );
};

export default AdList;
