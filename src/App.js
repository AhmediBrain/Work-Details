import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTransferTable from './viewtransfertable/ViewTransferTable';
//import ViewDataTransfer from './ViewDataTransfer';
//import ViewTransferCopy from './studentform/viewformCopy/ViewTransferCopy';
//import Form from './studentform/transferform/Form';
//import SearchBar from './search/SearchBar';
//import FileUploadPage from './studentform/Upload';
//import BookData from "./Data.json";

function App() {
  return (
    <div>
      {/*<Form />
      <FileUploadPage />
      <Home />
      <SearchBar placeholder="Book Name..." 
        data={BookData} />
        <ViewTransferCopy />*/}
        <ViewTransferTable />
    </div>
  );
}

export default App;
