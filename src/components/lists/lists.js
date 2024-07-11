
export const ListItems1 =()=>{
    return (
        <ol>
            <ListData/>
        </ol>
    )
}

export const ListItems2=()=>{
    return (
        <ul>
            <ListData/>
        </ul>
    )
}

const ListData= ()=>{
    return (
        <div>
            <li>hello</li>
            <li>world</li>
            <li>welcome</li>
            <li>to hyd</li>
        </div>
    ) 
}
export default ListData

