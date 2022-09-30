import "./App.css";
// import React, { useReducer } from "react";
// import HookCounter from "./components/HookCounter";

// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// import HookCounterobj from "./components/HookCounterObj";
// import HookArry from "./components/HookArry";
// import HookCounterone from "./components/useEffect";
// import HookTwo from "./components/HookTwo";
// import MouseContain from "./components/MouseContain";
// import HookIterval from "./components/IntervelHook";
// import FetchData from "./components/FetchData";
// import ContextC from "./components/ContextC";
// import UseRedCount from "./components/UseRedCount";
import ToggleCart from "./Toggle/ToggleCart";
// import HideNShow from './Toggle/HideNShow'





// export const UserContext = React.createContext();
// export const LastNameContext = React.createContext();




function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterobj/> */}
      {/* <HookCounter/>
     <HookCounterone/> */}
      {/* <HookTwo/> */}
      {/* <MouseContain/> */}
      {/* <HookIterval/> */}
      {/* <FetchData/> */}
      <ToggleCart/>
      {/* <HideNShow/>  */}


 
      
    </div>
  );
}
// const initialState = 0;
// export const CountContext = React.createContext();


// const reducer = (state, action) => {
//   switch (action) {
//     case "increament":
//       return state + 1;
//     case "decreament":
//       return state - 1;
//     case "reset ":
//       return initialState;

//     default:
//       return state;
//   }
// };
// console.log("clicked", initialState);
// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="App">
//         Count - {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

export default App;
