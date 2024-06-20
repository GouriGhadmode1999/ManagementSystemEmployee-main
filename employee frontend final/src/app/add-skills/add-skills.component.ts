
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  skill: any = {}; // Initialize an empty object to hold the skill data

  onSubmit() {
    // This method will be called when the form is submitted
    console.log('Form submitted:', this.skill);
    // You can add further logic here, such as sending the skill data to a backend server
    // After submitting, you may want to reset the form
    this.resetForm();
  }

  resetForm() {
    // This method resets the form after submission
    this.skill = {}; // Resetting the skill object to clear the form fields
  }
}
