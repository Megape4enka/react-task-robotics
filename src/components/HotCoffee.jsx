import React from 'react';
import classNames from 'classnames';

const HotCoffee = ({type, sizes, price, syrups, setCoffee}) => {
    const availableSize = ['small', 'large']
    const availableSyrups = ['no', 'caramel', 'vanilla', 'chocolate']

    const [activeSizeIndex, setActiveSizeIndex] = React.useState(availableSize.findIndex(s => s === sizes[0]))
    const [activeSyrupsIndex, setActiveSyrupsIndex] = React.useState(availableSyrups.findIndex(s => s === syrups[0]))

    const onSelectSize = index => {
        setActiveSizeIndex(index)
    }

    const onSelectSyrups = index => {
        setActiveSyrupsIndex(index)
    }

    const onAddCoffee = () => {
        const obj = {
            type,
            sizes: availableSize[activeSizeIndex],
            price,
            syrups: availableSyrups[activeSyrupsIndex]
        }
        setCoffee(obj)
    }

    return (
        <div className='coffee-item'>
            <h3>{type}</h3>
            <div className='coffee-block'>
                <ul>
                    {availableSize.map((types, index) => (
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
                    {availableSyrups.map((types, index) => (
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

export default HotCoffee;
