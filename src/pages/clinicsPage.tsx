import React from "react";
import photo from "../assets/vetkim1.jpg";
import Clinic from "../components/clinic";
import Footer from "../components/footer";
function clinicsPage() {
  return (
    <div>
      <div>
        <img src={photo} alt="" />
      </div>
      <div>
        <input type="text" placeholder="Search veterinary clinic" />
      </div>
      <div>
        <Clinic />
      </div>
      <Footer />
    </div>
  );
}

export default clinicsPage;
