const Greetings = (prop) => {
  const { children, name } = prop;

  return (
    <div>
      <h1>weclome {name} </h1>
      
      {children}
    </div>
  );
};
export default Greetings;
