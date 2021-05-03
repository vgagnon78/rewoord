import React from 'react';
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#f4f6f8',
        height: 200,
        width: 200
    }
}));

export const Tile = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        </div >
    );
};