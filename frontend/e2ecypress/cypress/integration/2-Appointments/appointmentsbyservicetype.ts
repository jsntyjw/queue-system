describe("Appointments Testing", () => {
  
    it("Visit Appointment Page", () => {
        cy.visit('http://localhost:3000/Appointments');
    })

    it("Click View Appointments by Service Type", () => {
        cy.get('#hpbView > .sc-hUplSX > :nth-child(3) > [data-testid="radio-button"] > [data-testid="radio-input"]').click();
    })

    it("Click View Appointments by Service Type", () => {
        cy.get('#divLocation > .sc-cLpAjG > .sc-gslxeA > [data-testid="selector"]').click();
    })

    it("Click View Appointments by Service Type", () => {
        cy.get('#divLocation > .sc-cLpAjG > .sc-gslxeA > [data-testid="dropdown-container"] > [data-testid="dropdown-list"] > :nth-child(1) > [data-testid="list-item"]').click();
    })

    it("Click View Appointments by Service Type", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-fFeiMQ > [data-testid="accordion-item-expand-collapse-button"]').click({multiple:true});
    })

    it("Assert it is Nancy Goh", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-fFeiMQ > [data-testid="accordion-item-title"]').should('have.text', 'Nancy Goh');
    })

    it("Assert it is the correct 'Citizen Name :  Nancy Goh' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(1)').should('have.text', 'Citizen Name :  Nancy Goh');
    })
    
    it("Assert it is the correct 'Citizen Number:  91238888' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(2)').should('have.text', 'Citizen Number:  91238888');
    })

    it("Assert it is the correct 'Citizen Email: nancy@gmail.com' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(3)').should('have.text', 'Citizen Email:  nancy@gmail.com');
    })

    it("Assert it is the correct 'Service start date: 2022-03-30' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(4)').should('have.text', 'Service start date:  2022-03-30');
    })

    it("Assert it is the correct 'Service start time' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(5)').should('have.text', 'Service start time:  10:00 AM');
    })

    it("Assert it is the correct 'Service Name: ' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(6)').should('have.text', 'Service Name:  Consultation');
    })

    it("Assert it is the correct 'Service Provider Location: ' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(7)').should('have.text', 'Service Provider Location:  Tampines');
    })

    it("Assert it is the correct 'Service Status: ' ", () => {
        cy.get('.rcorner2 > .sc-ezbkAF > .sc-leSONj > .sc-egiyK > [data-testid="accordion-item"] > .sc-dlVxhl > #content-container > .sc-pVTFL > ul > :nth-child(8)').should('have.text', 'Service Status:  communityHealth');
    })
   
})