import { useState } from "react";
import "./App.css";
import { Category } from "./svg/category";

import { useState } from 'react';
import './App.css';

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [currentCategory, setCurrentCategory] = useState("testcategory");


  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <button
            type="button"
           
          >
            Chosen category is {currentCategory}
          </button>
          <Category
            currentCategory={currentCategory}
            onCurrentCategoryChange={(a)=>setCurrentCategory(a)}
          />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
