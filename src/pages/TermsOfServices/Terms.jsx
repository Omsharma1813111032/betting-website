import BackHead from "../../components/PreLoader/BackHeader/BackHead"
import "./Terms.css"

const Terms = () => {
  return (
    <div className="termMainDiv">


      <BackHead title="Terms Of Service" wallet={false} head={true} logo={false} />

      <div className="termsDiv">

        <div className="termHead">
          Clause 1
        </div>
        <div className="termSubHead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.
        </div>

        <div className="termHead termhead2">
          Clause 2
        </div>
        <div className="termSubHead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem. <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.
        </div>

      </div>



    </div>
  )
}

export default Terms