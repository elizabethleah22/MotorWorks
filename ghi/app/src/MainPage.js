import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


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
    <div className="row">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img width="200" src="./car.jpeg" ></img>
            <img width="200" src="./car.jpeg" ></img>
            <img width="200" src="./car.jpeg" ></img>
            <img width="200" src="./car.jpeg" ></img>
            <img width="200" src="./car.jpeg" ></img>
          </div>
        </div>
    </div>
    </div>

  );
}

export default MainPage;
