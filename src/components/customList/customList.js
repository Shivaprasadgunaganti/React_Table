const CustomList=(prop)=>{
    const { list }=prop
    return (
     <ol>
        {list.map((each,demo)=>{
            return <li key={demo}>{each}</li>
        })}
     </ol>
    )
}
export default CustomList