import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {TabItem, TabName} from "../utils/types";
import PlaceholderScreen from "../components/tabScreens/PlaceholderScreen";
import HomeScreen from "../components/tabScreens/HomeScreen";


interface MainTabContextType {
    tabState: TabItem[];
    setTabState: Dispatch<SetStateAction<TabItem[]>>;
}

export const MainTabContext = createContext<MainTabContextType | undefined>(undefined);

interface MainTabProviderProps {
    children: ReactNode;
}

export const MainTabProvider = ({ children }: MainTabProviderProps) => {
    // default state will be the main tab?
    const [tabState, setTabState] = useState<TabItem[]>(
        [
            {tabName: "Myself", selected: true, screen: HomeScreen},
            {tabName: "Aspirations", selected: false, screen: PlaceholderScreen},
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