import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SupportFromIndividualsComponent } from './component/GetInvolve/support-from-individuals/support-from-individuals.component';
import { PayrollGivingComponent } from './component/GetInvolve/payroll-giving/payroll-giving.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, SupportFromIndividualsComponent, PayrollGivingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'globtpf';
}
