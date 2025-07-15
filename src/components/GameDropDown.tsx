import React, { useEffect, useState } from "react";

type DropDownProps = {
    games: string[];
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

    return (
        <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {games.map(
                (game: string, index: number): React.JSX.Element => {
                    return (
                        <p
                            key={index}
                            onClick={(): void => {
                                onClickHandler(game);
                            }}
                        >
                            {game}
                        </p>
                    );
                }
            )}
        </div>
    );
}

export default GameDropDown;