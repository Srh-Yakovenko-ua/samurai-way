import {store} from './Redux/store';
import React from 'react';
import {renderTree} from './renderTree';

store.subscribe(renderTree)
renderTree()


