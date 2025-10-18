import '../styles/Header.css';
import {useState} from "react";

interface TabProps {
    text: string;
    isSelected: boolean;
}

// TODO this will likely need a context
const Tab = (props: TabProps) => {
    const [selected, setSelected] = useState<boolean>(props.isSelected);

    const handleClick = () => {
        setSelected(!selected);
    }

    return (
      <div className={`header-tab ${selected ? 'selected' : ''}`} onClick={handleClick}>
          <span>{props.text}</span>
      </div>
    );
}

const Header = () => {
    return (
        <div className="header">
            <Tab text={"Home"} isSelected={true}/>
            <Tab text={"Aspirations"} isSelected={false}/>
        </div>
    );
}

export default Header;