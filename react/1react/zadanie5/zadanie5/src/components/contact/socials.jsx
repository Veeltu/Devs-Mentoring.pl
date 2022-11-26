import Data from "../data"

const Socials=()=>{
    return (
      <div>
        <div className="socials">
          <div className="fb">
            <a href={Data.socials.fb}>facebook</a>
          </div>
          <div className="instagram">
            <a href={Data.socials.instagram}>instagram</a>
          </div>
          <div className="twitter">
            <a href={Data.socials.twitter}>twitter</a>
          </div>
        </div>
      </div>
    );
}

export default Socials;