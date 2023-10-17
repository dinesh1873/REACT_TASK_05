import { useState } from 'react';

export function Age() {
    const [input, setInput] = useState('');
    const [age, setAge] = useState(0);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const ageCalculate = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        var date = new Date();
        var iyear = new Date(input);
        var yeardiff = date.getFullYear() - iyear.getFullYear();

        var imonth = new Date(input);
        var monthdiff = date.getMonth() - imonth.getMonth();

        var idate = new Date(input);

        if (monthdiff < 0 || (monthdiff === 0 && date.getDate() < idate.getDate())) {
            yeardiff--;
        }
        setAge(yeardiff);
    }

    return (
        <div style={{ textAlign: "center", margin: "100px" }}>
            <h2>Age Calculator</h2>
            <form>
                <label>Enter your date of birth</label><br></br>
                <input type="date" style={{ width: "250px", marginTop: "5px" }} onChange={handleInput}></input><br></br>
                <button className="btn btn-primary my-2" onClick={(e) => ageCalculate(e)}>Calculate Age</button>
            </form>
            <h2>You are {age} years old</h2>
        </div>
    )
}
