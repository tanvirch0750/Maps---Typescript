import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerPopupContent(): string {
    return `
      <div>
        <h1>User Name: ${this.companyName}</h1>
        <h2>CatchPhrase: ${this.catchPhrase}</h2>
      </div>
    `;
  }
}
