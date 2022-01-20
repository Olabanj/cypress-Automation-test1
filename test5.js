describe("my first test suite",function(){
    it("verify test5",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(2000)
        cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})
cy.url().should('include','top')
  

         
        })

    })
        

    
