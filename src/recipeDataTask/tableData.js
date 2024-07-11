import Table from "react-bootstrap/Table";

function TableData(prop) {
  const { data } = prop;
  console.log(data);
  return (
    <Table>
      <thead>
        <tr>
          <th>s.no</th>
          <th>Name</th>
          <th>Image</th>
          <th>Ingredients</th>
          <th>Instructions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachRecipe) => {
          const { id, name, ingredients, instructions, image } = eachRecipe;
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <img src={image} height={100} width={100} alt="" />
              </td>
              <td>{ingredients}</td>
              <td>{instructions}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableData;
