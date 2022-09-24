import { subscribe} from './state';
import React from 'react';
import {renderTree} from './renderTree';

subscribe(renderTree)
renderTree()


