import { useState } from "react";

function Coruse() {

    type Course = {
        subject: string;
        grade: string;
    };
    const [subject, setSubject] = useState<string>("");        // เก็บค่าที่พิมพ์ใน input

    const [grade, setGrade] = useState<string>("A");

    const [coruse, setCoruse] = useState<Course[]>([]);      // เก็บรายการงานทั้งหมด

    const deleteCourse = (index: number) => {  // เก็บรายการที่ index ไม่ตรงกับอันที่ต้องการลบ

        const newCoruse = coruse.filter((_, i) => i !== index);
        setCoruse(newCoruse);
    }

    const addCourse = () => {
        if (subject.trim() === "") return;            // กัน input ว่าง
        setCoruse([...coruse, { subject, grade }]);
        setSubject("");                               // เคลียร์ input หลังเพิ่ม

    }
    const calculateGPA = (coruse: Course[]): number => {
        const validcousre= coruse.filter(c => c.grade !== "W");
        if (validcousre.length === 0) return 0; 
        const gradePoints: { [key: string]: number } = {
            "A": 4.0,
            "B+": 3.5,
            "B": 3.0,
            "C+": 2.5,
            "C": 2.0,
            "D+": 1.5,
            "D": 1.0,
            "F": 0.0,
        };
        const totalPoints = validcousre.reduce((sum, course) => sum + (gradePoints[course.grade] || 0), 0);
        return parseFloat((totalPoints / validcousre.length).toFixed(2)); 
    }
        const [resultGPA, setResultGPA] = useState<number>(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h1>My To-do List</h1>

            <input

                type="text"

                value={subject}

                onChange={(e) => setSubject(e.target.value)}

                placeholder="รายวิชา..."

            />
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="F">F</option>
                <option value="W">W</option>
            </select>

            <button onClick={addCourse}>Add</button>

            <ul style={{ listStyle: "none", padding: 0 }}>

                {coruse.map((c, index) => (

                    <li key={index}
                        style={{
                            margin: "5px 0",
                            color: c.grade === "F" ? "red" : "white"
                        }}

                    >
                        {c.subject} : {c.grade}
                        <button

                            onClick={() => deleteCourse(index)}

                            style={{ marginLeft: 10, color: "red" }}

                        >

                            ลบ

                        </button>

                    </li>



                ))}



            </ul>
            
            <button onClick={() => setResultGPA(calculateGPA(coruse))}>
            คำนวณ GPA
            </button>

            <div>GPA = {resultGPA}</div>


        </div>



    );
}
export default Coruse;