import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, tap, timer } from 'rxjs';
import { CustomValidators } from '../../common/validators';
import { FormData } from '../../interfaces/types';
import { CreateOrderService } from './../../services/create-order.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  isShowForm: boolean = true;
  subs: Subscription | null = null;
  subsTimer: Subscription | null = null;

  isError: boolean = false;
  isSuccess: boolean = false;

  teaForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(`^[A-ZА-ЯЁ][a-zа-яё\s']+$`)],
    ],
    last_name: [
      '',
      [Validators.required, Validators.pattern(`^[A-ZА-ЯЁ][a-zа-яё\s']+$`)],
    ],
    phone: ['', [Validators.required, CustomValidators.phoneValidator]],
    address: ['', [Validators.required, CustomValidators.addressValidator]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, CustomValidators.zipValidator]],
    product: ['', Validators.required],
    comment: [''],
  });
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private createOrderService: CreateOrderService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const title = params['title'];
      if (title) {
        this.teaForm.patchValue({ product: title });
        this.teaForm.get('product')?.disable();
      }
    });
  }
  createOrder() {
    this.teaForm.markAllAsTouched();

    if (this.teaForm.invalid) {
      return;
    }

    const raw = this.teaForm.getRawValue();

    const formData: FormData = {
      name: raw.name ?? '',
      last_name: raw.last_name ?? '',
      phone: raw.phone ?? '',
      country: raw.country ?? '',
      zip: raw.zip ?? '',
      product: raw.product ?? '',
      address: raw.address ?? '',
      comment: raw.comment ?? '',
    };

    this.subs = this.createOrderService
      .createOrder(formData)
      .pipe(tap(() => {}))
      .subscribe({
        next: (response: any) => {
          this.isShowForm = false;
          if (response && response.success === 1) {
            this.isSuccess = true;
          } else {
            this.isError = true;
          }
          this.subsTimer = timer(5000).subscribe(() => {
            this.router.navigate(['/main']);
          });
        },
        error: (err) => {
          this.isShowForm = false;
          this.isError = true;
        },
      });
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.subsTimer?.unsubscribe();
  }
}
