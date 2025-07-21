
import React from 'react';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';

import { GameParamProvider } from '@site/src/contexts/GameParamContext';
import GameParamNavigator from '@site/src/components/GameParamNavigator';

export default function LayoutWrapper(props: Props): React.JSX.Element {
    return (
        <GameParamProvider>
            <GameParamNavigator />
            <Layout {...props} />
        </GameParamProvider>
    );
}