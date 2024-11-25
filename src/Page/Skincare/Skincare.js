import Facewashpage from "./Component/Bycatogery/Facewash/Facewashpage";
import Toner from "./Component/Bycatogery/Toners/Toner";
import Advanceimgpage from "./Component/Advanceimgpage/Advanceimgpage";
import Ayurvedicrangepage from "./Component/Ayurvedicrangepage/Ayurvedicrangepage";
import Oilfacepage from "./Component/Bycatogery/Oilfacepage/Oilfscepage";

function Skincare() {
    return (
        <>
            <Facewashpage />
            <Toner />
            <Advanceimgpage />
            <Ayurvedicrangepage/>
            <Oilfacepage/>
        </>

    );

}
export default Skincare;