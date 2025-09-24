import Buttonadd from "./Buttonadd";

function Headertxt({title,textsize,status}:{title: string, textsize: string, status?: boolean}) {
   //const [name, setName] = useState('CSMJU')
 //    const [count, setCount] = useState(0)
 //const status = true; // true = เขียว, false = แดง 

    return (
        <>
            <h1 style={{ fontSize: `${textsize}px` }} className={status ? "green-txt" : "red-txt"}>{title}</h1>
            <Buttonadd />
        </>
    );
}
export default Headertxt;