import {store} from './Redux/redux-store';
import React from 'react';
import {renderTree} from './renderTree';

store.subscribe(() => {
    renderTree()
})
renderTree()



