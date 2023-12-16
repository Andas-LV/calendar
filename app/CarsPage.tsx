import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import carsData from "./data/cars.json";
import Card from "./components/CarsCard";

const Page = () => {
    const [data, setData] = useState(carsData);
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= selectionRange.startDate && itemDate <= selectionRange.endDate;
    });

    // @ts-ignore
    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    return (
        <div>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <div className="grid grid-cols-4">
                {filteredData.map((item) => (
                    <Card
                        key={item.id}
                        color={item.color}
                        brand={item.brand}
                        model={item.model}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
