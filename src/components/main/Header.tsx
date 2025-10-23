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
            if (props.name === tab.tabName) {
                return tab;
            }
        }
    }

    const onClick = () => {
        setTabState(prev =>
        prev.map(t =>
            t.tabName === props.name
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
    const {tabState, setTabState} = useMainTabContext();

    return (
        <div className="header">
            <div className="header-title">
                <span>Hunter</span>
                <span>Treadway</span>
            </div>
            {
                tabState.map((tab: TabItem) => (
                    <Tab name={tab.tabName} key={tab.tabName} />
                ))
            }
        </div>
    );
}

export default Header;