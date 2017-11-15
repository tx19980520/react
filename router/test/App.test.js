import React from 'react';
import Enzyme from 'enzyme';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import App from "../src/App.js"
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('Enzyme Shallow', () => { 
  it('App should have one <h4/> components', () => { 
   const app = shallow(<App />) 
   expect(app.find('h4').length).to.equal(1); 
  });
});
describe('like click', function () {
  it(' like button has click', function () {
    let app = render(<App/>);
    let todoItem = app.find('button');
    expect(todoItem.text()).to.equal("likeGo!");
  });
});