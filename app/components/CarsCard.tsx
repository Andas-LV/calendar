import React from 'react';
interface CarsItem {
    color: string;
    brand: string;
    model: string;
    date: string;
}
const CarsCard: React.FC<CarsItem> = ({ brand, model,color,date}) => {
    return (
        <div className="text-white border-2 rounded-lg m-2 p-2 bg-[#189691]">
            <h2>{brand}</h2>
            <div>{model}</div>
            <div>{color}</div>
            <div>{date}</div>
        </div>
    );
};

export default CarsCard;