import '../../styles/Main.css'
import Header from "./Header"
import TabScreen from "../tabScreens/TabScreen";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <TabScreen />
        </div>
    );
}
export default Main;