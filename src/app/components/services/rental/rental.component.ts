import {Component, OnInit } from '@angular/core';
import {inject} from "@angular/core/testing";
import {Router} from "@angular/router";
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  requiredSteps: any[] = [
      {
        title: 'Dates checker',
        description: 'Select the dates you want to rent the equipment at',
        completed: false,
        nextLink: 'equipment-selection',
        previousLink: null
      },
      {
        title: 'Equipment selection',
        description: 'Select the equipment you want to rent',
        completed: false,
        nextLink: 'rent-validation',
        previousLink: ''
      },
      {
        title: 'Rent Validation',
        description: 'Validate your order and proceed to payment',
        completed: false,
        nextLink: null,
        previousLink: 'rent-validation'
      }
  ]

  currentStepIndex: number = 0;

  constructor(private router : Router) {}

  ngOnInit(): void {
  }


  previousStep() {
    this.router.navigate(['/services/rental/' + this.requiredSteps[this.currentStepIndex].previousLink]);
    this.currentStepIndex--;
  }
  nextStep(): void {
    this.router.navigate(['/services/rental/' + this.requiredSteps[this.currentStepIndex].nextLink]);
    this.currentStepIndex++;
    console.log(this.currentStepIndex)
  }

  rentEquipments() {

  }
}
