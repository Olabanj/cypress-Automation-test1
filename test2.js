describe("my first test suite",function(){
    it("verify test1",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get("input[type='search']").type("Ca")
    
        cy.get(".product:visible").should ("have.length",4)
        cy.wait(2000)
        cy.get(".products").find(".product").should("have.length",4)
        cy.get(".products").find(".product").eq(2).contains('ADD TO CART').click()
       
            
           
            cy.get(".cart-icon").click()
             cy.contains("PROCEED TO CHECKOUT").click()
             cy.contains("Place Order").click()
             cy.contains("Proceed").click()


        })
  

         
        })

        
        

    
