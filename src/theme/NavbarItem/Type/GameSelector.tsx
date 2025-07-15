import GameDropDown from '@site/src/components/GameDropDown';
import { useState } from 'react';

interface Props {
    readonly mobile?: boolean;
    readonly position?: 'left' | 'right';
}

export default function GameSelectorNavbarItem(props: Props): React.JSX.Element {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectGame, setSelectGame] = useState<string>("any");
    const games = () => {
        return ["any", "cs2", "hla", "dota", "steamvr"];
    };

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    const gameSelection = (game: string): void => {
        setSelectGame(game);
    };

    return (
        <>
            <button
                className={showDropDown ? "game-selector active" : "game-selector"}
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                    dismissHandler(e)
                }
            >
                <div>{selectGame != "any" ? `Game: ${selectGame}` : `Select Game...`}</div>
                {showDropDown && (
                    <GameDropDown
                        games={games()}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                        gameSelection={gameSelection}
                    />
                )}
            </button>
        </>
    );
}