import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MainPage() {
  return (
    <div>
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold title">CarCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
    <div class='container-fluid' >
           <div className="row title" style={{marginBottom: "20px"}} >
           <div class="col-sm-12 btn btn-info">
           Look at my cars!!!
           </div>
           </div>
       </div>
       <div class='container-fluid' >
        <OwlCarousel items={3}
          className="owl-theme"
          loop
          nav
          margin={8} >
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
           <div ><img  className="img" src= {'./car.jpeg'}/></div>
      </OwlCarousel>
      </div>
      </div>

  );
}

export default MainPage;
