

describe("my first test suite",function(){
    it("verify test1",function(){
        cy.visit("//rahulshettyacademy.com/AutomationPractice/")
        cy.wait(2000)
        cy.get("#checkBoxOption1").check().should("be.checked")
        cy.get("#checkBoxOption1").check().should("have.value","option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")


         
        })
        it("verify the static select option1",function(){
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.wait(2000)
            cy.get("#dropdown-class-example").select("option1").should("have.value","option1")

        })
        it("verify the dynamic dropdown",function(){
            cy.get("#autocomplete").type("India").click()

        })
        it("verify the visible",function(){
            cy.get("#hide-textbox").click()
            cy.get("#displayed-text").should("not.be.visible")
            cy.get("#show-textbox").click()
            cy.get("#displayed-text").should("be.visible")
        })
        
        

    
})