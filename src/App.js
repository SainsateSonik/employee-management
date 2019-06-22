import React, { useState } from "react";

import Header from "./component/header/Header";
import Main from "./component/main/Main";
import { userTypes } from "./ref/userTypes";
import Footer from "./component/footer/Footer";

function App() {
  const [userType] = useState(userTypes.EMPLOYEE);
  return (
    <div className="App">
      <Header userType={userType} />
      <Main userType={userType} />
      <Footer />
    </div>
  );
}

export default App;
