const LogicalAnd = () => {
    const val = prompt('Anything but a 0');

    return (
        <div>
            <h3>Please don't type in a zero</h3>
            {console.log(val)}
            { (val !== 0) && <h4>Yay, no 0 was typed in!</h4>}
        </div>
    )
}

export default LogicalAnd;