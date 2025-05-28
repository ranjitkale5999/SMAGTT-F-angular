import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrl: './add-trade.component.scss'
})
export class AddTradeComponent implements OnInit{
  tradeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tradeForm = this.fb.group({
      id: [0],
      shareName: ['', Validators.required],
      price: [0, Validators.required],
      priceBuy: [0, Validators.required],
      priceSell: [0, Validators.required],
      target: [0, Validators.required],
      gannLevel: [0, Validators.required],
      tradeDate: [new Date(), Validators.required]
    });
  }

  onSubmit(): void {
    if (this.tradeForm.valid) {
      console.log(this.tradeForm.value);
      // Submit logic here
    }
  }
}
