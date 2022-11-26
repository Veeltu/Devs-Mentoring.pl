import "./links.css"
import Data from "../data";

const Links=()=>{
    return (
      <div>
<h2>links</h2>  
        <div className="links">
          <a href={Data.links.help} className="help">
            help
          </a>
          <a href={Data.links.pay} className="pay">
            pay
          </a>
          <a href={Data.links.agreement} className="agreement">
            agreement
          </a>
          <a href={Data.links.dashboard} className="dashboard">
            dashboard
          </a>
          <a href={Data.links.reading} className="reading">
            reading
          </a>
          <a href={Data.links.reports} className="reports">
            reports
          </a>
        </div>
      </div>
    );
}

export default Links;