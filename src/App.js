import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form";
// //import ViewTransferTable from './viewtransfertable/ViewTransferTable';
//import Form from './components/forms/Form';
// //import ViewDataTransfer from './ViewDataTransfer';
// //import ViewTransferCopy from './studentform/viewformCopy/ViewTransferCopy';
// //import Form from './studentform/transferform/Form';
// //import SearchBar from './search/SearchBar';
// //import FileUploadPage from './studentform/Upload';
// //import BookData from "./Data.json";
import { TextField } from '@mui/material'


// function App() {
//   return (
//     <div>
//       {/*<Form />
//       <FileUploadPage />
//       <Home />
//       <SearchBar placeholder="Book Name..." 
//         data={BookData} />
//         <ViewTransferCopy />*/}
//         {/* <ViewTransferTable /> */}

//         <Form />
//     </div>
//   );
// }

// export default App;



function App() {

  //let data;

  // const [texting, setTexting] = useState('Room')

  const { control, handleSubmit } = useForm();
  //const methods = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
}

// const handleChange = (e) => {
//   setTexting(e.target.value)
// }

  return (
    //   <FormProvider {...methods}>
    //   <div className="container py-4">
    //     {/* <Form methods={methods} /> */}
    //     <Form methods={methods} />
    //   </div>
    // </FormProvider>

    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          name='location' 
          control={control} 
          defaultValue='' 
          render={({ field: { onChange, value }}) => (
              <TextField 
                  value={value}  
                  sx={{width: '22ch'}} 
                  onChange={onChange}>
              </TextField>
          )} />

      <button type='submit'>Submit</button>
    </form>
    </>
    
  );
}

export default App
