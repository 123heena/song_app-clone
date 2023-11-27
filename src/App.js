import React from "react";
import HeaderBar from "./HeaderBar";
import Footer from "./Footer";
const myStyle={
  backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FFirst-Traditional-Coaster-Painting-Decoration%2Fdp%2FB0BYJ2ZVC3&psig=AOvVaw1adZdtRntjrIouNVgLfa3g&ust=1701155230038000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJj_zqLP44IDFQAAAAAdAAAAABAI')",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function App()
{
  return(
    <div style={myStyle}>
      <HeaderBar/>
      <Footer/>
      </div>
  )
}
export default App;