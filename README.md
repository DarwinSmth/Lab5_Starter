# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Participants: Darwin Smith
Links to [expose](https://darwinsmth.github.io/Lab5_Starter/expose.html) and [explore](https://darwinsmth.github.io/Lab5_Starter/explore.html)

Pt 3. Unit Testing with Jest Questions
1) No I would not use a unit test for the message feature, since the message feature would involve multiple components working together, such as text handling, network comms, server side handling, and delivery to recipient.
2) Yes I would use a unit test for testing max message length because it involved isolated logic. I could easily write small tests to verify that messages 80 characters and under are accepted, and over are rejected or cut short. It doesn't need to involve anything network or serverside.
