import React from 'react';
import Enzyme from 'enzyme';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import App from "./App.js"
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('Enzyme Shallow', () => { 
  it('App should have one <h4/> components', () => { 
   const app = shallow(<App />) 
   expect(app.find('h4').length).to.equal(1); 
  });
});