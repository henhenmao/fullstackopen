

const Total = ({parts}) => {
    // console.log(parts)
    const total = parts.reduce((acc, part) => acc + part.exercises, 0)
    // console.log(total)
    return <strong>Total exercises: {total}</strong>

}

export default Total