 import {render} from "@testing-library/react";
 import Plant from "../components/Plant";
 import {jest} from '@jest/globals';

let getByTestId;

 beforeEach(() =>{
     const component = render(<Plant />);
     getByTestId = component.getByTestId;

 });
// // test('Fetch plantObject,should render an individual object with properties ', ()=>{
// //     //Arrange
// //
// //     const description = "vraagt niet veel verzorging omdat ze niet zo veel water nodig hebben. Wacht tot de bovenste centimeters van de grond droog zijn en geef dan langzaam net zoveel water tot je het er door de";
// //     const difficulty = "MODERATE";
// //     const downloadUri = "http://localhost:8080/api/v1/plants/50/download";
// //     const fileName = "Aloe2.jpeg";
// //     const food = "MONTH";
// //     const id = 50;
// //     const latinName = "Aloe";
// //     const name = "Aloe";
// //     const uploadedbyUsername = "hendrikjan@mail.com";
// //     const uploadedDate = "2021-10-12T14:39:37.548+00:00";
// //     const Watering = "WEEK";
// //     //Act
// //     const plantObject = Plant(description, difficulty, downloadUri, fileName, food, id, latinName, name, uploadedDate, uploadedbyUsername, Watering);
// //
// //     //Assert
// //     expect(plantObject).toReturnWith();
// //
// // });


test("render div", ()=>{

    const headerEl = getByTestId("pageheader");

    // expect(headerEl.textContent).toBe("");


});