import {store} from './Redux/state';
import React from 'react';
import {renderTree} from './renderTree';

store.subscribe(renderTree)
renderTree()


