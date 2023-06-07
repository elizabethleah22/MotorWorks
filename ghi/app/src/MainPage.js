import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MainPage({ models }) {
  console.log("models", models);
  return (
    <div>
    <div className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
        <h2 className="lead mb-4">
          Check out our premium selection of vehicles!
        </h2>
      </div>
    </div>
    <div className='container-fluid flex' >
           <div className="row title" style={{marginBottom: "-60px"}} >
           </div>
       </div>
       <div className='container-fluid flex' >
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
              <div key={model.id} className="card flex-fill" style={{width: "18rem:"}}>
                <img src={model.picture_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text">{model.manufacturer.name} {model.name} </p>
                </div>
              </div>
             )
            })}
      </OwlCarousel>
      </div>
      </div>

  );
}

export default MainPage;
