import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/Admonition/Type/Tip';
import AdmonitionLayout from '@theme/Admonition/Layout';


const infimaClassName = 'alert alert--legacy';

const defaultProps = {
    icon: '[LEGACY]',
    title: "",
};

export default function AdmonitionTypeLegacy(props: Props) {
    return (
        <AdmonitionLayout
            {...defaultProps}
            {...props}
            className={clsx(infimaClassName, props.className)}>
            <Translate id="admonitions.legacy.description" description="Legacy Admonition warning text.">
                This Page contains Legacy information that is only here for parity.
            </Translate>
            {props.children}
        </AdmonitionLayout>
    );
}