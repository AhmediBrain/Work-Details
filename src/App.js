import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { LoginContext } from './contexts/LoginContext';
import ProjectLogin from './ProjectLogin';
import Profile from './Profile';


function App() {
  const [showProfile, setShowProfile] = useState(false)
  const [userName, setUserName] = useState('')

  return (
    <div>
      <LoginContext.Provider value={{userName, setUserName, setShowProfile}}>
        {showProfile ? <Profile /> : <ProjectLogin />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;



// function App() {
//   const { control, handleSubmit } = useForm();

//   const onSubmit = (data, e) => {
//     e.preventDefault();
//     console.log(data);
// }

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Controller 
//           name='location' 
//           control={control} 
//           defaultValue='' 
//           render={({ field: { onChange, value }}) => (
//               <TextField 
//                   value={value}  
//                   sx={{width: '22ch'}} 
//                   onChange={onChange}>
//               </TextField>
//           )} />

//         <button type='submit'>Submit</button>
//       </form>
//     </>
    
//   );
// }

// export default App
