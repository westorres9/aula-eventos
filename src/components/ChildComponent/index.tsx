import { useState } from "react";

type Props = {
    onNewValue?: Function;
}

export default function ChildComponent({onNewValue} : Props) {

    const [count, setCount] = useState(0);

    function handleClick() {
        const newCount = count + 1 
        setCount(newCount);
        if(onNewValue) {
        onNewValue(newCount)
        }
    }

    return (
        <div style={{border: "1px solid red", padding: "10px"}}>
            {count}
            <button onClick={handleClick}>Ok</button>
        </div>
    )
}