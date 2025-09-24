import { useState } from 'react'
function Buttonadd() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count} +
            </button>
            <button onClick={() => setCount((count) => count - 1)}>count is {count} -</button>
        </>
    );
}
export default Buttonadd;