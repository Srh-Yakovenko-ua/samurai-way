import {store} from './state';
import React from 'react';
import {renderTree} from './renderTree';

store.subscribe(renderTree)
renderTree()


