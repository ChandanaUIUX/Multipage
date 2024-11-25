import Acneskin from './Component/Acneskin/Acneskin';
import Banner from './Component/Banner/Banner';
import Bestsellers from './Component/Bestsellers/Bestseller';
import Collection from './Component/Collection/Collection';
import CarousalBanner from './Component/CarousalBanner/CarousalBanner';
function Home() {

    return (

        <>
            <CarousalBanner />
            <Bestsellers />
            <Collection />
            <Acneskin />
            <Banner />

        </>
    )
}

export default Home;