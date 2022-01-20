describe("my first test suite",function(){
    it("verify test1",function(){
        cy.visit("//rahulshettyacademy.com/AutomationPractice/")
        cy.wait(2000)

        cy.get("#alertbtn").click()
        cy.get('[value="Confirm"]').click()
        cy.get("#opentab").invoke("removeAttr","target").click()
    })  
        //(tr td:nt-child(2)).each($e1,index,$list)=>{ const text=$e1.text, if(text.include("python")) 


       // }
        

    
})