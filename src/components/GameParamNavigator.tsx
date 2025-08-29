import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import type { Location } from 'history';
import { useGameParam } from '@site/src/contexts/GameParamContext';

export default function GameParamNavigator() {
    const history = useHistory();
    const { gameParam } = useGameParam();

    useEffect(() => {
        const unlisten = history.listen((locationUpdate: Location) => {
            if (!gameParam) return;

            const params = new URLSearchParams(locationUpdate.search);
            if (!params.has('game')) {
                params.set('game', gameParam);
                history.replace({
                    pathname: locationUpdate.pathname,
                    search: `?${params.toString()}`,
                    hash: locationUpdate.hash
                });
            }
        });

        return () => unlisten();
    }, [history, gameParam]);

    return null;
}