import React from "react";


import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() 
{
    return(
    <div> 
        <Header></Header>
        <Note title = "This is a title" content= "This is it's content"></Note>
        <Footer></Footer>
    </div>);    
}
export default App;