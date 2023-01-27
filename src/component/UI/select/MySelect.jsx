import React from 'react';
//передаем массив опций для сотритовки с помошью пропса defaultValue
//после чего с помощью map итерируемся и для каждой опции
// отрисовываем тег опшионз



const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};

export default MySelect;