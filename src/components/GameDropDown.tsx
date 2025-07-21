import React, { useEffect, useState } from "react";

interface GameInfo
{
    PrettyName: string,
    IconPath?: string 
}

export const Games: Record<string, GameInfo> = {
  "cs2": {PrettyName: "Counter-Strike 2", IconPath: "img/cs2_icon.png"},
  "hla": {PrettyName: "Half-Life: Alyx", IconPath: "img/hla_icon.png"},
  "dota2": {PrettyName: "Dota 2", IconPath: "img/dota2_icon.png"},
  "steamvr": {PrettyName: "Steam VR", IconPath: "img/steamvr_icon.png"},
  "any": {PrettyName: "Any game"}
};

type DropDownProps = {
    games: Record<string, GameInfo>;
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
                            {games[game].IconPath === undefined ? '' : <img src={games[game].IconPath} alt={games[game].PrettyName} className="game-selector-game-icon" />}
                            {games[game].PrettyName}
                        </p>
                    );
                }
            )}
        </div>
    );
}

export default GameDropDown;