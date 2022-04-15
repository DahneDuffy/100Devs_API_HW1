# 100Devs_API_HW1
Lord of the Rings API (basic)

This app allows users to search for a character from Tolkien's Legendarium.  It will return the full name of that character, their gender and race, and their dates of birth and death.

Currently it doesn not have the functionality to support letters or characters with accents.  Hence it will not return searches for characters like Feanor, which has an accent umlaut over the e.  

This app makes use of this API: (https://the-one-api.dev/documentation). 

If you plan on forking this repository, you will need go to the link above and generate your own Bearer Token, and insert that on line 13 of main.js where it says ${apiKey}.  You may need to delete/comment out the import statement at the top of main.js in order for this to work correctly.  