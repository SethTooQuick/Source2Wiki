import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useLocation } from "@docusaurus/router";

interface GameParamContextType {
    gameParam: string;
    setGameParam: (value: string) => void;
}

const GameParamContext = createContext<GameParamContextType>({
    gameParam: "any",
    setGameParam: () => { },
});


export function GameParamProvider({ children }: { children: ReactNode }) {
    const location = useLocation();
    const [gameParam, setGameParam] = useState<string>("any");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let game = params.get('game');
        if (game) setGameParam(game);
    }, [location.search]);

    return (
        <GameParamContext.Provider value={{ gameParam, setGameParam }}>
            {children}
        </GameParamContext.Provider>
    );
}

export function useGameParam(): GameParamContextType {
    return useContext(GameParamContext);
}