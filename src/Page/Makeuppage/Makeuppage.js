import React from "react";
/* Eyepage */
import Kajalpage from "./Component/Eyepage/Kajalpage/Kajalpage";
import Mascarapage from "./Component/Eyepage/Mascarapage/Mascarapage";
/*End Eyepage */
 /* Facepage */
import Facepage from "./Component/Facepage/Bbcream";
/*End Facepage */
/* Combopage */
import Combopage from "./Component/Combospage/Combopage";
/* End Combopage */
/* Lippage */
import Lipstickpage from "./Component/Lippage/Lipstickpage/Lipstickpage";
import Lipglossespage from "./Component/Lippage/Lipglossespage/Lipglossepage";
/*End Lippage */
function Makeuppage() {

    <>
        <Kajalpage />
        <Facepage/>
        <Mascarapage/>
        <Combopage/>
        <Lipstickpage/>
        <Lipglossespage/>
    </>

}
export default Makeuppage;