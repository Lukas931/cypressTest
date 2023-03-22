Feature: Email login

Background: User is going to log in
Given User navigate to the Website
And User type in input with id "login-username" value "cypress.test@seznam.cz"
And User click on "button" with text "Pokračovat" on "login"
Then User type in input with id "login-password" value "cypresTest@22"
And User click on "button" with text "Přihlásit se" on "login"
Then User is redirected to "dashboard"

Scenario:User Log in and send email
And User click on "a" with text "Napsat e-mail" on "dashboard"
And User type at dashboard in "input" with placeholder "Komu…" value "hudak.lu@gmail.com"
And User type at dashboard in "input" with placeholder "Předmět…" value "test cypressu"
And User click on ".recipient-list button" with text "+ Kopie" on "dashboard"
And User type at dashboard in "input" with placeholder "Kopie…" value: 
|  text1@gmail.com     |
|  text2@gmail.com     |
|  text3@gmail.com     |

And User type at dashboard in "div" with placeholder "Text e-mailu…" value "Ahoj testujem cypress a posielam Ti email"
And User click on ".foot.nomobile button" with text "Odeslat" on "dashboard"
And User click on "button" with text "cypress.test@seznam.cz" on "dashboard"
And User click on ".popup.users.select a" with text "Odhlásit se" on "dashboard"
Then User is redirected to "login"
And User click on "button.new-user" with text "Pokračujte s iným účtom" on "login"










    
    
    
   


     


    
   
    
    
    


