import React from 'react';
import {COLD_COFFEE} from "../constants/coldCoffee";
import classNames from "classnames";

const ColdCoffee = ({type, sizes, price, syrups, setCoffee}) => {
    const availableSize = ['small', 'large']
    const availableSyrups = ['no', 'caramel', 'vanilla', 'chocolate']

    const [activeSize, setActiveSize] = React.useState(sizes)
    const [activeSyrups, setActiveSyrups] = React.useState(syrups)

    const onSelectSize = index => {
        setActiveSize(index)
    }

    const onSelectSyrups = index => {
        setActiveSyrups(index)
    }

    const onAddCoffee = () => {
        const obj = {
            type,
            sizes: availableSize[activeSize],
            price,
            syrups: availableSyrups[activeSyrups]
        }
        setCoffee(obj)
    }

    return (
        <div className='coffee-item'>
            <h3>{COLD_COFFEE[type]}</h3>
            <div className='coffee-block'>
                <ul>
                    {availableSize.map((types, index) => (
                        <li
                            key={types}
                            className={classNames({
                                'active': activeSize === index,
                                'disabled': !sizes.includes(types)
                            })}
                            onClick={() => onSelectSize(index)}
                        >
                            {types}
                        </li>
                    ))}
                </ul>
                <ul>
                    {availableSyrups.map((types, index) => (
                        <li
                            key={types}
                            className={classNames({
                                'active': activeSyrups === index,
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
