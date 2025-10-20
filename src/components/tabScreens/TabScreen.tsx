import '../../styles/TabScreen.css'
import {useMainTabContext} from "../../contexts/MainTabContext";


const TabScreen = () => {
    const {tabState} = useMainTabContext();
    const Active = tabState.find(t => t.selected)!.screen;
    return <Active />
}

export default TabScreen;