import React from 'react';
import {AVAILABLE_SIZE, AVAILABLE_SYRUPS, COLD_COFFEE} from "../constants/coldCoffee";
import classNames from "classnames";

const ColdCoffee = ({type, sizes, price, syrups, setCoffee}) => {

    const [activeSizeIndex, setActiveSizeIndex] = React.useState(AVAILABLE_SIZE.findIndex(s => s === sizes[0]))
    const [activeSyrupsIndex, setActiveSyrupsIndex] = React.useState(AVAILABLE_SYRUPS.findIndex(s => s === syrups[0]))

    const onSelectSize = index => {
        setActiveSizeIndex(index)
    }

    const onSelectSyrups = index => {
        setActiveSyrupsIndex(index)
    }

    const onAddCoffee = () => {
        const obj = {
            type,
            sizes: AVAILABLE_SIZE[activeSizeIndex],
            price,
            syrups: AVAILABLE_SYRUPS[activeSyrupsIndex]
        }
        setCoffee(obj)
    }

    return (
        <div className='coffee-item'>
            <h3>{COLD_COFFEE[type]}</h3>
            <div className='coffee-block'>
                <ul>
                    {AVAILABLE_SIZE.map((types, index) => (
                        <li
                            key={types}
                            className={classNames({
                                'active': activeSizeIndex === index,
                                'disabled': !sizes.includes(types)
                            })}
                            onClick={() => onSelectSize(index)}
                        >
                            {types}
                        </li>
                    ))}
                </ul>
                <ul>
                    {AVAILABLE_SYRUPS.map((types, index) => (
                        <li
                            key={types}
                            className={classNames({
                                'active': activeSyrupsIndex === index,
                                'disabled': !syrups.includes(types)
                            })}
                            onClick={() => onSelectSyrups(index)}
                        >
                            {types}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='coffee-block__bottom'>
                <p className='coffee-block__price'>Price: {price}$</p>
                <button onClick={onAddCoffee}>Buy</button>
            </div>
        </div>
    );
};

export default ColdCoffee;
