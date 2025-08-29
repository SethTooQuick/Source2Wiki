import React, { useEffect, useState } from "react";
import { SoftwareInfo } from '@site/src/constants/software';
import './style.css';

type DropDownProps = {
    games: Record<string, SoftwareInfo>;
    showDropDown: boolean;
    toggleDropDown: Function;
    gameSelection: Function;
};

const GameDropDown: React.FC<DropDownProps> = ({ games, gameSelection }: DropDownProps): React.JSX.Element => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (game: string): void => {
        gameSelection(game);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    const gameUrlNames = Object.keys(games);
    return (
        <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {gameUrlNames.map(
                (game: string, index: number): React.JSX.Element => {
                    return (
                        <p
                            key={index}
                            onClick={(): void => {
                                onClickHandler(game);
                            }}
                        >
                            {games[game].IconPath === undefined ? '' : <img src={games[game].IconPath} alt={game} className="game-selector-game-icon" />}
                            {games[game].PrettyName}
                        </p>
                    );
                }
            )}
        </div>
    );
}

export default GameDropDown;