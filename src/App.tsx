import Countries from "./Countries/Countries.tsx";
import Country from "./Country/Country.tsx";

const App = () => {

  return (
      <div className="container d-flex flex-row align-items-center">
          <div className="col-lg-6">
              <Countries/>
          </div>
          <div className="col-lg-6">
              <Country/>
          </div>
      </div>
  )
};

export default App
