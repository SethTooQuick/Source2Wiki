import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useLocation } from "@docusaurus/router";

interface GameParamContextType {
    gameParam: string;
}

const GameParamContext = createContext<GameParamContextType>({ gameParam: "any" });


export function GameParamProvider({ children }: { children: ReactNode }) {
    const location = useLocation();
    const [gameParam, setGameParam] = useState<string>("any");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let game = params.get('game');
        setGameParam(game);
    }, [location.search]);

    return (
        <GameParamContext.Provider value={{ gameParam }}>
            {children}
        </GameParamContext.Provider>
    );
}

export function useGameParam(): GameParamContextType {
    return useContext(GameParamContext);
}