import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {TabItem, TabName} from "../utils/types";
import PlaceholderScreen from "../components/tabScreens/PlaceholderScreen";


interface MainTabContextType {
    tabState: TabItem[];
    setTabState: Dispatch<SetStateAction<TabItem[]>>;
}

export const MainTabContext = createContext<MainTabContextType | undefined>(undefined);

interface MainTabProviderProps {
    children: ReactNode;
}

export const setSelectedTab = (name: TabName, currentState: TabItem[]): TabItem[] => {
    console.log("SET SELECTED TAB");
    const newState: TabItem[] = currentState;
    for(let i = 0; i < currentState.length; i++) {
        newState[i].selected = newState[i].name === name;
    }
    console.log(newState);
    return newState;
}

export const MainTabProvider = ({ children }: MainTabProviderProps) => {
    // default state will be the main tab?
    const [tabState, setTabState] = useState<TabItem[]>(
        [
            {name: "Home", selected: true, screen: PlaceholderScreen},
            {name: "Aspirations", selected: false, screen: PlaceholderScreen},
            {name: "Myself", selected: false, screen: PlaceholderScreen},
        ]
    );

    return (
        <MainTabContext.Provider value={{
            tabState,
            setTabState,
        }}>
            {children}
        </MainTabContext.Provider>
    )
}

export const useMainTabContext = () => {
    const context = useContext(MainTabContext);

    if(!context) {
        throw new Error('MainTabContext must be used within a MainTabProvider');
    }

    return context;
}