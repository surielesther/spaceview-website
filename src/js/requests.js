export class Api {

  static #ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=Fcb1gcnOUTXnlMo5dYO2M6B3ERw39P5Hyhpgefr3";

  static async pictureOfTheDay() {
    const response = await fetch(`${this.#ENDPOINT}`, {
      method: "GET",
    });

    return response.json();
  }


  static async gallery() {
    const response = await fetch(`${this.#ENDPOINT}&hd=true&count=100`, {
      method: "GET",
    });

    return response.json();
  }


  // static async pictureOfTheDay() {
  //   const response = await fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  //   const data = await response.json();

  //   return data;
  // }

  // static async gallery() {
  //   const response = await fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=100");
  //   const data = await response.json();

  //   return data;
  // }
}
