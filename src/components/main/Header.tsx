import '../../styles/Header.css';
import {useMainTabContext} from "../../contexts/MainTabContext";
import {TabItem, TabName} from "../../utils/types";



interface TabProps {
    name: TabName;
}

const Tab = (props: TabProps) => {
    const {tabState, setTabState} = useMainTabContext();

    // I want to make sure I'm pulling the right state here?
    const myTabState = (): TabItem | undefined => {
        for (let tab of tabState) {
            if (props.name === tab.name) {
                return tab;
            }
        }
    }

    const onClick = () => {
        setTabState(prev =>
        prev.map(t =>
            t.name === props.name
                ? { ...t, selected: true}
                : { ...t, selected: false }
        ));
    }

    return (
      <div className={`header-tab ${myTabState()?.selected ? 'selected' : ''}`} onClick={onClick}>
          {props.name}
      </div>
    );
}

const Header = () => {

    return (
        <div className="header">
            <Tab name={"Home"}/>
            <Tab name={"Aspirations"}/>
        </div>
    );
}

export default Header;