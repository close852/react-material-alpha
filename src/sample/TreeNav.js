import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeData from './TreeData'
const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function TreeNav({items}) {
    const classes = useStyles();
    /*
    const items = [
        {
            id: '10', label: '문서함', depth: 1, sort: 1, ref: '10',
            children: [
                {
                    id: '11', label: 'Applications1', depth: 1, sort: 1, ref: '10',
                    children: [
                        {
                            id: '13', label: 'Applications2', depth: 2, sort: 1, ref: '11',
                            children: [
                                { id: '15', label: 'Applications3', depth: 2, sort: 2, ref: '13' }
                            ]
                        },
                        { id: '14', label: 'Applications3', depth: 2, sort: 2, ref: '11' }
                    ]
                },
                { id: '12', label: 'Calendar1', depth: 1, sort: 2, ref: '10' }
            ]
        }
    ];*/

    const treeData = items.map((data) => (<TreeData key={data.id} data={data}>{data.children}</TreeData>));
    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {treeData}
        </TreeView>
    );
}
