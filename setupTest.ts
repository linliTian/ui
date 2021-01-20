import 'jest-enzyme';
import { matchers } from '@emotion/jest';
import * as Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
expect.extend(matchers);
