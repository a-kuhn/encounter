import React, {useState} from 'react';

const PersonCardRefactor = ({firstName, lastName, age, hairColor}) => {
    const [ageState, setAgeState] = useState(age);

    const handleBdayClick = (e) => {
        setAgeState(ageState+1);
    };

    return (
        <div className="container">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {ageState}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={handleBdayClick}>
          {firstName}'s Birthday Button
        </button>
      </div>
    );

};

export default PersonCardRefactor;