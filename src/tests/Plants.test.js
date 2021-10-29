
 import {getAllByTestId, render} from "@testing-library/react";
 import Plant from "../components/Plant/Plant";
 import {jest} from '@jest/globals';

 jest.useFakeTimers();
 let getByTestId;


 beforeEach(() =>{
     const component = render(<Plant />);
     getByTestId = component.getByTestId;

 });

 test("render div", ()=>{

     const headerEl = getByTestId("pageheader");

      expect(headerEl.textContent).toBe("Alle planten");


 });
// // test('Fetch data,should render an array of plantObjects ', ()=>{
// //     //Arrange
// //     const plants = [
// //         {
// //             "id": 10,
// //             "fileName": "Calathea.jpeg",
// //             "name": "Pauwenplantjeej",
// //             "latinName": "Calathea",
// //             "description": "Qua verzorging kan het een beetje een diva zijn, maar met de juiste aanpak kom je een heel eind. Dit alles lees je hier. Ook vertellen we graag meer over de afkomst, groeiwijze, luchtzuiverende eigenschappen en de verschillende soorten",
// //             "mediaType": null,
// //             "location": "uploads\\Calathea.jpeg",
// //             "downloadUri": null,
// //             "difficulty": "HARD",
// //             "light": "SUNNY",
// //             "food": "MONTH",
// //             "watering": "WEEK",
// //             "uploadedDate": null,
// //             "uploadedByUsername": null
// //         },
// //         {
// //             "id": 4,
// //             "fileName": "PannenkoekPlant (2).jpeg",
// //             "name": "Pannenkoekplantje",
// //             "latinName": "Pilea Peperomioides",
// //             "description": "De grond mag net niet uitdrogen, maar zeker ook niet te nat zijn, want daar kan hij slecht tegen. Vanaf het najaar minderen met water geven, tot zo’n 1 keer per week. In de lente en zomer heeft de plant voeding nodig.",
// //             "mediaType": null,
// //             "location": "uploads\\PannenkoekPlant (2).jpeg",
// //             "downloadUri": null,
// //             "difficulty": "EASY",
// //             "light": "HALFSUNNY",
// //             "food": "MONTH",
// //             "watering": "WEEK",
// //             "uploadedDate": "2021-10-01T09:31:44.084+00:00",
// //             "uploadedByUsername": "user"
// //         },
// //         {
// //             "id": 11,
// //             "fileName": "Hertshoornvaren.jpeg",
// //             "name": "Hertshoornvarentj0",
// //             "latinName": "Ceropegia woodii",
// //             "description": "kfboefbonfoefnoefnoewfnoewfnwoefnwefncoewinfcoewincpn;wncpkwnkncwnipcwniwninincjnwocwdkdmcknowncnejnwejencwoenowncowfcnowencowncorin",
// //             "mediaType": null,
// //             "location": "uploads\\Hertshoornvaren.jpeg",
// //             "downloadUri": null,
// //             "difficulty": "MODERATE",
// //             "light": "SHADOW",
// //             "food": "NEVER_SPECIAL",
// //             "watering": "WEEK",
// //             "uploadedDate": "2021-10-12T10:58:27.781+00:00",
// //             "uploadedByUsername": null
// //         }
// //     ];
// //
    //Act


    //Assert

