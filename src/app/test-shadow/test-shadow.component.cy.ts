import { mount } from "cypress/angular"
import { TestShadowComponent } from "./test-shadow.component"

describe('TestShadowComponent', () => {
  beforeEach(() => {
    mount(TestShadowComponent);
  })
  it('should display the title', () => {
    cy.get('button', {includeShadowDom: true}).should('have.text', 'My Button')
  })
  it('should display the title', () => {
    cy.get('button', {includeShadowDom: true}).should('have.text', 'My Button')
  })
})

// describe('TestShadowComponent', () => {
//   it('should display the title', () => {
//     mount(TestShadowComponent);
//     cy.get('button', {includeShadowDom: true}).should('have.text', 'My Button')
//   })
//   it('should display the title', () => {
//     mount(TestShadowComponent);
//     cy.get('button', {includeShadowDom: true}).should('have.text', 'My Button')
//   })
// })

// describe('TestShadowComponent', () => {
//   beforeEach(() => {
//     mount(TestShadowComponent, {autoSpyOutputs: true});
//   })
//   it('should display the title', () => {
//     cy.get('button', {includeShadowDom: true}).should('have.text', 'My Button')
//   })
//   it('should display the title', () => {
//     cy.get('button', {includeShadowDom: true}).should('have.text', 'My Button')
//   })

//   it('should click the button', () => {
//     cy.get('button', {includeShadowDom: true}).click()
//     // does click spy exists
//     cy.get('@clickSpy').should('have.been.called')
//   })
// })