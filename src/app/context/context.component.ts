import { Component, OnInit } from '@angular/core';
import {CountryService} from '../services/country.service';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  countryNames: any = [];
  population: any = [];
  // segment the data
  slicedCountryNames: any;
  slicedPopulation: any;
  doughnutCountryNames: any;
  doughnutPopulation: any;
  data: any;
  doughtnutData: any;

  //dependency injection
  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(response => {
      console.log(response);
      response.forEach(obj => {
        console.log(obj.name, '=>', obj.population);
        this.countryNames.push(obj.name);
        this.population.push(obj.population);
      });
      this.slicedCountryNames = this.countryNames.slice(1, 200);
      this.slicedPopulation = this.population.slice(1, 200);
      this.doughnutCountryNames = this.countryNames.slice(1, 15);
      this.doughnutPopulation = this.population.slice(1, 15);
      this.data = {
        labels: this.slicedCountryNames,
        datasets: [
          {
            label: 'World Population',
            backgroundColor: '#6a0dad',
            borderColor: 'blue',
            data: this.slicedPopulation
          }
        ]
      };

      this.doughtnutData = {
        labels: this.doughnutCountryNames,
        datasets: [
          {
            data: this.doughnutPopulation,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#ECFE70',
              '#CCFE70',
              '#CFFE23',
              '#EFFE54',
              '#ECFE70',

            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }]
      };

    });

  }
}
