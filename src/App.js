// import ButtonComponent from "./components/button.js";
import { Heading1 } from "./components/Table/Table";
import ButtonComponent1 from "./components/Table/buttonComponet/buttonComponent";

// import  Demo  from "./components/Table/data";

export const App=()=>{
  return (
        <Heading1></Heading1>
  );
};

export const Button=()=>{
  return (
    <ButtonComponent1></ButtonComponent1>
  )
}

export const Add=()=>{
  const isLogin = true;
  return  (

  <div>
    {isLogin ? <h2>Login</h2> : <h2>Not Logged</h2>}
  </div>
  );
};
 
export const Fruits=()=>{
  const list=["apple",'banana','mango']
  return (
    <div>
      {
        list.map((elements)=>{
          return (
            <p>{elements}</p>
          )
        })
      }
    </div>
  )
}

export const Teams=()=>{
     const iplteams=[{
      teamName:'csk',
      players:['Dhoni','conway'],
      won:5,
      imgae:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
     },
    { teamName:'rcb',
     players:['virat ','DK'],
     won:5,
     imgae:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    }
    ]
  }

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

