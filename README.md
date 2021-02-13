# Petful Server
_just a quick practice project_ 
  
[Live App](https://zenmnky-petful-client.vercel.app/adopt)  
[Front End](https://github.com/ZenMnky/petful-client)  

## Project Brief: 
You've been asked to create a site for an animal shelter which allows adoption of cats and dogs. These are the only 2 animals allowed in the shelter. The adoption process works strictly on a "First-In, First-Out" basis. The FIFO is based on the animals that came to the shelter first. People can adopt a cat, or a dog, or both, but they may only adopt the animal that came to the shelter first. In addition, people who want to adopt are also put in a Queue so they can adopt when it's their turn.

## Requirements
- Mobile first
- Use a Queue data structure that is implemented with either a singly linked list or doubly linked list.

## API
The functional endpoints are `/api/people` and `/api/pets`.
- `api/people` 
  - accepts GET request
    - example response body:
      ```
      [
          "Ruth",
          "Ye-Jun",
          "Peter",
          "Soo-ah",
          "Paul"
      ]
      ```
  - accepts POST request, with `{ name: a-name-here }` in the body.
- `api/pets` 
  - accepts GET request
    - example response body:
    ```
     {
        "dog": {
            "age": 3,
            "breed": "Boxer",
            "description": "boxer dog",
            "gender": "Male",
            "imageURL": "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Tim",
            "story": "Found in neighborhood"
        },
        "cat": {
            "age": 2,
            "breed": "Bengal",
            "description": "Orange bengal cat with black stripes lounging on concrete.",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Steve French",
            "story": "Thrown on the street"
        }
    }
    ```
- `api/pets/:pet` - where :pet === 'cat' || 'dog'
  - accepts DELETE request.

## Tech Stack
- React, Node, Express
