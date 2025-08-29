import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/Admonition/Type/Tip';
import AdmonitionLayout from '@theme/Admonition/Layout';
import ObsoleteIcon from '@site/static/img/annotations/todo.svg';

const infimaClassName = 'alert alert--todo';

const defaultProps = {
    icon: <ObsoleteIcon style={{ color: 'inherit', fill: 'currentColor' }}/>,
    title: "TODO",
};

export default function AdmonitionTypeLegacy(props: Props) {
    return (
        <AdmonitionLayout
            {...defaultProps}
            {...props}
            className={clsx(infimaClassName, props.className)}>
            {props.children}
        </AdmonitionLayout>
    );
}