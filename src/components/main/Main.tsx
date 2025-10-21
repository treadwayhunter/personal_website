import '../../styles/Main.css'
import Header from "./Header"
import TabScreen from "../tabScreens/TabScreen";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <TabScreen />
            <Footer />
        </div>
    );
}
export default Main;