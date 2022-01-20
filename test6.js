describe("my first test suite",function(){
    it("verify the table",function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

    const text=$e1.text()
    if(text.includes("Python"))
    {

        
         expect(text).to.equal('Master Selenium Automation in simple Python Language')
        
    }

})

        
        })
  

         
        })

        
        

    
