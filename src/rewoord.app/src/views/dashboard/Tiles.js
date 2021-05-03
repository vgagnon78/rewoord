import React from 'react';
import clsx from 'clsx';
import ScrollContainer from 'react-indiana-drag-scroll'

import {
    makeStyles
} from '@material-ui/core';

import { Tile } from './Tile';

const useStyles = makeStyles(() => ({
    root: {
        overflowY: 'none',
        overflowX: 'scroll',
        display: 'flex',
        paddingRight: 0
    }
}));

export const Tiles = props => {
    const classes = useStyles();

    return (
        <ScrollContainer className={clsx(classes.root, props.className)}>
            <Tile></Tile>
            <Tile></Tile>
            <Tile></Tile>
        </ScrollContainer>
    );
};