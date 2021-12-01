import React from 'react';
import {COLD_COFFEE} from "../constants/coldCoffee";
import classNames from "classnames";

const ColdCoffee = ({type, sizes, price}) => {
    const availableSize = ['small', 'large']

    const [activeSize, setActiveSize] = React.useState(sizes[0])

    const onSelectSize = index => {
        setActiveSize(index)
    }

    return (
        <div className='coffee_block'>
            <div className='coffee-item'>
                <h3>{COLD_COFFEE[type]}</h3>
                <div className='coffee-block__size'>
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
                </div>
                <div className='coffee-block__bottom'>
                    <p className='coffee-block__price'>Price: {price}$</p>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ColdCoffee;
