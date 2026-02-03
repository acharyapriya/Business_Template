
import data from "../component/json/JsonStructure.json";

const CardContent = () => {
  return (
    <section className="features-section container my-5">
      <div className="row">
        {data.content.map((item, index) => (
          <div className="col-12 col-md-4 " key={index}>
            <div className="card feature-card p-4 h-100">
              <div className="card-body">
                <h5 className="feature-title">{item.featuredTitle}</h5>
                <p className="feature-description">{item.description}</p>
                <span className="feature-cta">
                  {item.callToAction} <span>→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardContent;
