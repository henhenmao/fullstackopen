
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Courses = ({courses}) => {
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            <div>
                {courses.map((course) => {
                    return (
                        <div key={course.id}>
                            <Header name={course.name}/>
                            <Content parts={course.parts}/>
                            <Total parts={(course.parts)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses