
 import Plant from "../components/Plant/Plant";
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";

 import PlantIndex from "../components/PlantIndex/PlantIndex";

 let container = null;
 beforeEach(() => {
     // setup a DOM element as a render target
     container = document.createElement("div");
     document.body.appendChild(container);
 });

 afterEach(() => {
     // cleanup on exiting
     unmountComponentAtNode(container);
     container.remove();
     container = null;
 });

 it("renders plant data", async () => {
     const fakePlant = {
         name: "Pauwenplant",
         latinName: "Calathea",
         downloadUri: "http://localhost:8080/api/v1/plants/123/download",
         description: "De Calathea heeft een grote diversiteit aan kleuren en vormen van de bladeren. Voornamelijk zijn deze bladeren groen en paars van kleur, ovaal en rond van vorm.",
         care: "Qua verzorging kan het een beetje een diva zijn, maar met de juiste aanpak kom je een heel eind.",
         difficulty: "HARD",
         light: "HALFSUNNY",
         food: "MONTH",
         watering: "THREEDAYS"

     };
     jest.spyOn(global, "fetch").mockImplementation(() =>
         Promise.resolve({
             json: () => Promise.resolve(fakePlant)
         })
     );

     // Use the asynchronous version of act to apply resolved promises
     await act(async () => {
         render(<Plant id="123" />, container);
     });

     expect(container.querySelector(['page-header']).textContent).toBe(fakePlant.name);
     expect(container.textContent).toBe(fakePlant.latinName);
     expect(container.querySelector(['full-item-picture']).srcset).toBe(fakePlant.downloadUri);
     expect(container.textContent).toContain(fakePlant.description);
     expect(container.textContent).toContain(fakePlant.care);
     expect(container.querySelector(['f-care']).textContent).toBe(fakePlant.difficulty);
     expect(container.querySelector(['f-light-care']).textContent).toBe(fakePlant.light);
     expect(container.querySelector(['f-food-care']).textContent).toBe(fakePlant.food);
     expect(container.querySelector(['f-water-care']).textContent).toBe(fakePlant.watering);

     // remove the mock to ensure tests are completely isolated
     global.fetch.mockRestore();
 });