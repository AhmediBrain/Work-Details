import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useForm, Controller } from "react-hook-form";
import DateRangeFilter from './components/date-filter/DateRangeFilter';
import MainRoutes from './routes/MainRoutes';
// //import ViewTransferTable from './viewtransfertable/ViewTransferTable';
//import Form from './components/forms/Form';
// //import ViewDataTransfer from './ViewDataTransfer';
// //import ViewTransferCopy from './studentform/viewformCopy/ViewTransferCopy';
//import Form from './studentform/transferform/Form';
// //import SearchBar from './search/SearchBar';
// //import FileUploadPage from './studentform/Upload';
// //import BookData from "./Data.json";
//import { TextField } from '@mui/material'


function App() {
  return (
    <div>
      {/*<Form />
      <FileUploadPage />
      <SearchBar placeholder="Book Name..." 
        data={BookData} />
        <ViewTransferCopy />*/}
        {/* <ViewTransferTable />
        <Form />
        <MainRoutes />
        <h3>Hello</h3> 
        <DateRangeFilter /> */}

        <DateRangeFilter />
      
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
