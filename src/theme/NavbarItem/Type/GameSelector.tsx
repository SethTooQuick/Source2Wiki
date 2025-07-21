import GameDropDown from '@site/src/components/GameDropDown';
import { Games } from '@site/src/components/GameDropDown';
import { useState } from 'react';
import { useGameParam } from '@site/src/contexts/GameParamContext';
import { useHistory, useLocation } from '@docusaurus/router';

interface Props {
    readonly mobile?: boolean;
    readonly position?: 'left' | 'right';
}

export default function GameSelectorNavbarItem(props: Props): React.JSX.Element {

    const { gameParam, setGameParam } = useGameParam();
    const history = useHistory();
    const location = useLocation();

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    const setGame = (game: string): void => {
        const params = new URLSearchParams(location.search);

        params.set('game', game);
        history.push({
            pathname: location.pathname,
            search: params.toString(),
        });
        setGameParam(game);
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
                <div>{gameParam != "any" && gameParam in Games ? `Game: ${Games[gameParam].PrettyName}` : `Select Game...`}</div>
                {showDropDown && (
                    <GameDropDown
                        games={Games}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                        gameSelection={setGame}
                    />
                )}
            </button>
        </>
    );
}