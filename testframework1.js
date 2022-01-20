describe("my first test suite",function(){
    before(function(){
        cy.fixture("example").then(function(data){
            this.data=data
        })

    })
    it("verify test5",function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name)
        cy.get("#exampleCheck1").check()
        cy.get("select").select(this.data.gender)
        cy.get(':nth-child(1) > .form-control').should("have.attr","minlength",2)
        cy.get('#inlineRadio3').should("be.disabled")
        cy.get(':nth-child(4) > .ng-untouched').should("have.value",this.data.name)
    })
})