export default function About(){
    return (
      <>
        <div className="container">
          <h1 className="mt-5">About</h1>
          <p>Home {'>>'} About</p>

          <div className="row shadow rounded-4">
            <div className="col-6 p-5">
              <img
                src="https://minehrservices.com/images/about-us.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-6 p-5">
              <h1>About</h1>
              <p>
                As one of the esteemed PCD Pharma companies in India, we pride
                ourselves on our team of highly qualified and skilled
                professionals dedicated to providing top-quality PCD pharma
                products, including the latest DCGI-approved molecules.
              </p>
              <p>
                Our products are formulated using premium materials sourced from
                trusted and reliable manufacturers with WHO, ISO, and
                GMP-certified units. We ensure the use of hygienic ingredients
                from authentic vendors with extensive expertise in the industry.
              </p>
              <p>
                Additionally, we offer Exclusive Monopoly Rights, expanding our
                business into untapped areas by appointing new franchises,
                distributors, sole distributors, and PCD franchise partners.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}