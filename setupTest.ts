import 'jest-enzyme';
import { matchers } from '@emotion/jest';
import Adapter from 'enzyme-adapter-react-16';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
expect.extend(matchers);
