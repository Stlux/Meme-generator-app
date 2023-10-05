import { useEffect, useState } from "react";

export default function Effect(){

    const [count, countUpdate] = useState(0);

    let clicked = () => {
        countUpdate(count + 1);
    }

    useEffect(() => {
        console.log("updated");
    }, [count]);

    return(
        <>
            <div className="counter">
                {count}
            </div>
            <div onClick={clicked}>dd</div>
        </>
    )

}