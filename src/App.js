
import ProductListing from "./components/productListing/productListing";
import { Stack } from "./navigation/stack"

const App=()=>{
   return (
      <div>
         <Stack/>
         {/* <ProductListing/> */}
      </div>
   )
}
export default App;



// import ButtonComponent from "./components/button.js";
// import { Heading1 } from "./components/Table/Table";
// import ButtonComponent1 from "./components/Table/buttonComponet/buttonComponent";
// import  Accordion1  from "./components/Accordian/Accordian";
// import  Demo  from "./components/Table/data";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ImageComponet from "./components/ImageComponet/ImageComponent";
// import { data } from './components/data/data';

import ButtonComponent from "./components/Class_Components/Class_Components"
import Cards from "./components/cards/Cards"

// import Heading1 from "./components/Heading/Heading";
// import ImageComponet from "./components/ImageComponet/ImageComponent";
// import CustomList from "./components/customList/customList";
// import { Recipedata } from "./components/recipeData/recipeData";

// import CustomList from "./components/customList/customList"

// import ButtonComponent1 from "./components/buttonComponent/buttonComponent";
// import ImageComponet from './components/ImageComponet/ImageComponent';

// export const App=()=>{
//   return (
//         <Heading1></Heading1>
//   );
// };

// export const Button=()=>{
//   return (
//     <ButtonComponent1></ButtonComponent1>
//   )
// }

// export const Add=()=>{
//   const isLogin = true;
//   return  (

//   <div>
//     {isLogin ? <h2>Login</h2> : <h2>Not Logged</h2>}
//   </div>
//   );
// };

// const App=()=>{
// const list=["apple",'banana','mango']
// return (
// <div>
// {
/* <ButtonComponent1/> */
// }
// {
/* {
        list.map((elements)=>{
          return (
            <p>{elements}</p>
          )
        })
      } */
// }
// {
/* <Accordion1 /> */
// }
// {
/* <ImageComponet hello="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  width={100} height={100}/>
     <ImageComponet hello="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={100} height={100}/> */
// }
// {
/* {data.map((eachData)=>{
     return (
      <>
      <h2>{eachData.id}</h2>
      <h4>{eachData.title}</h4>
      <ImageComponet src={eachData.image}
      width={100} height={100}/>
      </>
     )
   })} */
// }
// </div>
// )
// }
// export default App
// export const Teams=()=>{
//      const iplteams=[{
//       teamName:'csk',
//       players:['Dhoni','conway'],
//       won:5,
//       imgae:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//      },
//     { teamName:'rcb',
//      players:['virat ','DK'],
//      won:5,
//      imgae:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
//     }
//     ]
//   }

//     function filterData(iplteams){
//       const data=iplteams.filter((eachTeam)=>eachTeam.won>=5)
//       return data
//     }
//     function count(iplteams){
//       const k=iplteams.reduce((add,teams)=>{return add+teams.won
//       },0);
//      return k;
//     }
// return (

//   <div>
//     <h3>total count {count(iplteams)}</h3>
//     {
//       filterData(iplteams).map((eachTeam)=>{
//         return (
//           <div>
//           <h3>{eachTeam.teamName}</h3>,
//           <h5>{eachTeam.players}</h5>,
//           <img src={eachTeam.imgae} height={200} width={200}/>
//     {eachTeam.players.map((eachPlayer)=>{

//     })}
//         </div>
//         )
//       })
//     }
//   </div>
// )
// }

// const App = () => {
//   return (
//     <div>

//       {/* <ButtonComponent1
//         text="i am button"
//         bgColor="red"
//         width={200}
//         onPress={() => {alert('hello')}}
//       />

//     <ButtonComponent1
//       text="click me"
//       bgColor="lightblue"
//       width={200}
//       onPress={() => {}} */}

//       {/* {data.map((eachProduct)=>{
//    return (
//     <>
//      <h2>{eachProduct.id}</h2>
//      <h3>{eachProduct.title}</h3>
//     <ImageComponet src={eachProduct.image}
//     width={100} height={100}/>
//     <ButtonComponent1
//     text={`$${eachProduct.price}`}
//     bgColor="red"
//     width={200}
//     onPress={() => {alert('hello')}}/>
//     </>
//    )
// })}
//   </div>
//   );
// };
// export default App; */}

// const App=()=>{
//   return (
//     <div>
//     <CustomList list={['apple','banana','coconut']}/>
//     <CustomList list={['csk','srh','rcb']}/>
//     </div>
//   )
// }
// export default App

// const App=()=>{
//   return (
//     <div>
//       <Heading1 title='ingredients'/>
//       <CustomList list={[
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste"
//       ]}/>
//       <Heading1 title='instructions'/>
//       <CustomList  list={[
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot."
//       ]}/>
//     </div>
//   )
// }
// export default App;

// const App = () => {
//   return (
//     <>
//       {Recipedata.map((each) => {
//         const { image, ingredients, instructions } = each;
//         return (
//           <>
//             <Heading1 title={`${each.id} ${each.name}`} />
//             {/* <Heading1 title={each.name}/> */}
//             <ImageComponet src={image} />
//             <Heading1 title="ingredients" />
//             <CustomList list={ingredients} />
//             <Heading1 title="instructions" />
//             <CustomList list={instructions} />
//           </>
//         );
//       })}
//     </>
//   );
// };
// export default App;

// const App=()=>{
//   return (
//     <div>
//     <Cards/>
//     </div>
//   )
// }
// export default App;

// const App=()=>{
//   return (
//     <ButtonComponent/>
//   )
// }


// import ButtonComponent from "./components/button.js";
// import { Heading1 } from "./components/Table/Table";
// import ButtonComponent1 from "./components/Table/buttonComponet/buttonComponent";
// import  Accordion1  from "./components/Accordian/Accordian";
// import  Demo  from "./components/Table/data";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ImageComponet from "./components/ImageComponet/ImageComponent";
// import { data } from './components/data/data';

// import ButtonComponent from "./components/Class_Components/Class_Components"
// import Cards from "./components/cards/Cards"
import Employe from "./components/task20/task";

// import Heading1 from "./components/Heading/Heading";
// import ImageComponet from "./components/ImageComponet/ImageComponent";
// import CustomList from "./components/customList/customList";
// import { Recipedata } from "./components/recipeData/recipeData";

// import CustomList from "./components/customList/customList"

// import ButtonComponent1 from "./components/buttonComponent/buttonComponent";
// import ImageComponet from './components/ImageComponet/ImageComponent';

// export const App=()=>{
//   return (
//         <Heading1></Heading1>
//   );
// };

// export const Button=()=>{
//   return (
//     <ButtonComponent1></ButtonComponent1>
//   )
// }

// export const Add=()=>{
//   const isLogin = true;
//   return  (

//   <div>
//     {isLogin ? <h2>Login</h2> : <h2>Not Logged</h2>}
//   </div>
//   );
// };

// const App=()=>{
// const list=["apple",'banana','mango']
// return (
// <div>
// {
/* <ButtonComponent1/> */
// }
// {
/* {
        list.map((elements)=>{
          return (
            <p>{elements}</p>
          )
        })
      } */
// }
// {
/* <Accordion1 /> */
// }
// {
/* <ImageComponet hello="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  width={100} height={100}/>
     <ImageComponet hello="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={100} height={100}/> */
// }
// {
/* {data.map((eachData)=>{
     return (
      <>
      <h2>{eachData.id}</h2>
      <h4>{eachData.title}</h4>
      <ImageComponet src={eachData.image}
      width={100} height={100}/>
      </>
     )
   })} */
// }
// </div>
// )
// }
// export default App
// export const Teams=()=>{
//      const iplteams=[{
//       teamName:'csk',
//       players:['Dhoni','conway'],
//       won:5,
//       imgae:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//      },
//     { teamName:'rcb',
//      players:['virat ','DK'],
//      won:5,
//      imgae:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
//     }
//     ]
//   }

//     function filterData(iplteams){
//       const data=iplteams.filter((eachTeam)=>eachTeam.won>=5)
//       return data
//     }
//     function count(iplteams){
//       const k=iplteams.reduce((add,teams)=>{return add+teams.won
//       },0);
//      return k;
//     }
// return (

//   <div>
//     <h3>total count {count(iplteams)}</h3>
//     {
//       filterData(iplteams).map((eachTeam)=>{
//         return (
//           <div>
//           <h3>{eachTeam.teamName}</h3>,
//           <h5>{eachTeam.players}</h5>,
//           <img src={eachTeam.imgae} height={200} width={200}/>
//     {eachTeam.players.map((eachPlayer)=>{

//     })}
//         </div>
//         )
//       })
//     }
//   </div>
// )
// }

// const App = () => {
//   return (
//     <div>

//       {/* <ButtonComponent1
//         text="i am button"
//         bgColor="red"
//         width={200}
//         onPress={() => {alert('hello')}}
//       />

//     <ButtonComponent1
//       text="click me"
//       bgColor="lightblue"
//       width={200}
//       onPress={() => {}} */}

//       {/* {data.map((eachProduct)=>{
//    return (
//     <>
//      <h2>{eachProduct.id}</h2>
//      <h3>{eachProduct.title}</h3>
//     <ImageComponet src={eachProduct.image}
//     width={100} height={100}/>
//     <ButtonComponent1
//     text={`$${eachProduct.price}`}
//     bgColor="red"
//     width={200}
//     onPress={() => {alert('hello')}}/>
//     </>
//    )
// })}
//   </div>
//   );
// };
// export default App; */}

// const App=()=>{
//   return (
//     <div>
//     <CustomList list={['apple','banana','coconut']}/>
//     <CustomList list={['csk','srh','rcb']}/>
//     </div>
//   )
// }
// export default App

// const App=()=>{
//   return (
//     <div>
//       <Heading1 title='ingredients'/>
//       <CustomList list={[
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste"
//       ]}/>
//       <Heading1 title='instructions'/>
//       <CustomList  list={[
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot."
//       ]}/>
//     </div>
//   )
// }
// export default App;

// const App = () => {
//   return (
//     <>
//       {Recipedata.map((each) => {
//         const { image, ingredients, instructions } = each;
//         return (
//           <>
//             <Heading1 title={`${each.id} ${each.name}`} />
//             {/* <Heading1 title={each.name}/> */}
//             <ImageComponet src={image} />
//             <Heading1 title="ingredients" />
//             <CustomList list={ingredients} />
//             <Heading1 title="instructions" />
//             <CustomList list={instructions} />
//           </>
//         );
//       })}
//     </>
//   );
// };
// export default App;

// const App=()=>{
//   return (
//     <div>
//     <Cards/>
//     </div>
//   )
// }
// export default App;

const App=()=>{
  return (
    // <ButtonComponent/>
    <Employe/>
  )
}

export default App;


// import ButtonComponent from "./components/button.js";
// import { Heading1 } from "./components/Table/Table";
// import ButtonComponent1 from "./components/Table/buttonComponet/buttonComponent";
// import  Accordion1  from "./components/Accordian/Accordian";
// import  Demo  from "./components/Table/data";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ImageComponet from "./components/ImageComponet/ImageComponent";
// import { data } from './components/data/data';

import ButtonComponent from "./components/Class_Components/Class_Components"
import Cards from "./components/cards/Cards"

// import Heading1 from "./components/Heading/Heading";
// import ImageComponet from "./components/ImageComponet/ImageComponent";
// import CustomList from "./components/customList/customList";
// import { Recipedata } from "./components/recipeData/recipeData";

// import CustomList from "./components/customList/customList"

// import ButtonComponent1 from "./components/buttonComponent/buttonComponent";
// import ImageComponet from './components/ImageComponet/ImageComponent';

// export const App=()=>{
//   return (
//         <Heading1></Heading1>
//   );
// };

// export const Button=()=>{
//   return (
//     <ButtonComponent1></ButtonComponent1>
//   )
// }

// export const Add=()=>{
//   const isLogin = true;
//   return  (

//   <div>
//     {isLogin ? <h2>Login</h2> : <h2>Not Logged</h2>}
//   </div>
//   );
// };

// const App=()=>{
// const list=["apple",'banana','mango']
// return (
// <div>
// {
/* <ButtonComponent1/> */
// }
// {
/* {
        list.map((elements)=>{
          return (
            <p>{elements}</p>
          )
        })
      } */
// }
// {
/* <Accordion1 /> */
// }
// {
/* <ImageComponet hello="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  width={100} height={100}/>
     <ImageComponet hello="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={100} height={100}/> */
// }
// {
/* {data.map((eachData)=>{
     return (
      <>
      <h2>{eachData.id}</h2>
      <h4>{eachData.title}</h4>
      <ImageComponet src={eachData.image}
      width={100} height={100}/>
      </>
     )
   })} */
// }
// </div>
// )
// }
// export default App
// export const Teams=()=>{
//      const iplteams=[{
//       teamName:'csk',
//       players:['Dhoni','conway'],
//       won:5,
//       imgae:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//      },
//     { teamName:'rcb',
//      players:['virat ','DK'],
//      won:5,
//      imgae:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
//     }
//     ]
//   }

//     function filterData(iplteams){
//       const data=iplteams.filter((eachTeam)=>eachTeam.won>=5)
//       return data
//     }
//     function count(iplteams){
//       const k=iplteams.reduce((add,teams)=>{return add+teams.won
//       },0);
//      return k;
//     }
// return (

//   <div>
//     <h3>total count {count(iplteams)}</h3>
//     {
//       filterData(iplteams).map((eachTeam)=>{
//         return (
//           <div>
//           <h3>{eachTeam.teamName}</h3>,
//           <h5>{eachTeam.players}</h5>,
//           <img src={eachTeam.imgae} height={200} width={200}/>
//     {eachTeam.players.map((eachPlayer)=>{

//     })}
//         </div>
//         )
//       })
//     }
//   </div>
// )
// }

// const App = () => {
//   return (
//     <div>

//       {/* <ButtonComponent1
//         text="i am button"
//         bgColor="red"
//         width={200}
//         onPress={() => {alert('hello')}}
//       />

//     <ButtonComponent1
//       text="click me"
//       bgColor="lightblue"
//       width={200}
//       onPress={() => {}} */}

//       {/* {data.map((eachProduct)=>{
//    return (
//     <>
//      <h2>{eachProduct.id}</h2>
//      <h3>{eachProduct.title}</h3>
//     <ImageComponet src={eachProduct.image}
//     width={100} height={100}/>
//     <ButtonComponent1
//     text={`$${eachProduct.price}`}
//     bgColor="red"
//     width={200}
//     onPress={() => {alert('hello')}}/>
//     </>
//    )
// })}
//   </div>
//   );
// };
// export default App; */}

// const App=()=>{
//   return (
//     <div>
//     <CustomList list={['apple','banana','coconut']}/>
//     <CustomList list={['csk','srh','rcb']}/>
//     </div>
//   )
// }
// export default App

// const App=()=>{
//   return (
//     <div>
//       <Heading1 title='ingredients'/>
//       <CustomList list={[
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste"
//       ]}/>
//       <Heading1 title='instructions'/>
//       <CustomList  list={[
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot."
//       ]}/>
//     </div>
//   )
// }
// export default App;

// const App = () => {
//   return (
//     <>
//       {Recipedata.map((each) => {
//         const { image, ingredients, instructions } = each;
//         return (
//           <>
//             <Heading1 title={`${each.id} ${each.name}`} />
//             {/* <Heading1 title={each.name}/> */}
//             <ImageComponet src={image} />
//             <Heading1 title="ingredients" />
//             <CustomList list={ingredients} />
//             <Heading1 title="instructions" />
//             <CustomList list={instructions} />
//           </>
//         );
//       })}
//     </>
//   );
// };
// export default App;

// const App=()=>{
//   return (
//     <div>
//     <Cards/>
//     </div>
//   )
// }
// export default App;

const App=()=>{
  return (
    <ButtonComponent/>
  )
}
export default App;

