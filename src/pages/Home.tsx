import ButtonCompo from "../component/Button";

const Home = () => {
  return (
  <section className="py-5 homeContent d-flex align-items-center w-100">
  <div id="home" className="container text-center w-50 text-white">
    <h1 className="display-4 fw-bold mb-3">
      Present your business in a whole new way
    </h1>

    <p className="lead mb-4 mx-auto text-white-50">
      Quickly design and customize responsive mobile-first sites with Bootstrap,
      the world's most popular front-end open source toolkit!
    </p>

    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
      <ButtonCompo className="btn btn-primary btn-lg px-5 py-2" text={" Get Started"}>
       
      </ButtonCompo>
      <ButtonCompo className="btn btn-outline-light btn-lg px-5 py-2" text={"Learn More"}>
        
      </ButtonCompo>
    </div>
  </div>
</section>


  );
};



export default Home;
