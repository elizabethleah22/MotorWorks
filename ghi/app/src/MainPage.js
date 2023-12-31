import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';

function MainPage({ models }) {
  console.log("models", models);
  return (
    <div>
    <div className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
        <h1 className="lead mb-4 mainText">
          Welcome to MotorWorks.
        </h1>
        <p className="slogan">
          The all-in-one solution for car dealers through sales and service.
        </p>
      </div>
    </div>
    <div className='container-fluid flex' >
           <div className="row title" style={{marginBottom: "30px"}} >
           </div>
       </div>
       <div className='container-fluid flex' style={{ textAlign:"center"}} >
        <OwlCarousel items={3}
          className="owl-theme"
          loop
          nav
          margin={8}
          autoplay ={true}
          autoplayTimeout={2000}
          autoplayHoverPause={true} >
            {models.map(model => {
                return (
              <div key={model.id} className="card flex-fill" style={{width: "1rem:",  border:"none"}}>
                <img src={model.picture_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">{model.manufacturer.name} {model.name} </p>
                </div>
              </div>
             )
            })}
      </OwlCarousel>
        <button type="button" className="btn btn-lg inventoryButton" style={{
            fontWeight:"normal", color:"white", marginTop:"1rem", marginLeft:"0.3rem" }}
            ><NavLink className="TitleLink" style={{ color:"white", textDecoration:"none"}} to="/automobiles">
            View Current Inventory
          </NavLink></button>
      </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>


  );
}

export default MainPage;
