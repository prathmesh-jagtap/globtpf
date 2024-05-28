import { Routes } from '@angular/router';
import { SupportFromIndividualsComponent } from './component/GetInvolve/support-from-individuals/support-from-individuals.component';
import { PayrollGivingComponent } from './component/GetInvolve/payroll-giving/payroll-giving.component';
import { SponsersComponent } from './component/GetInvolve/sponsers/sponsers.component';
import { VolunteerNInternshipComponent } from './component/GetInvolve/volunteer-n-internship/volunteer-n-internship.component';
import { CareerComponent } from './component/GetInvolve/career/career.component';

export const routes: Routes =
    [        
        { path: "support", component: SupportFromIndividualsComponent},
        { path: "payroll", component: PayrollGivingComponent},
        { path: "sponser", component: SponsersComponent},
        { path: "interns", component: VolunteerNInternshipComponent},
        { path: "career", component: CareerComponent},
        { path: "pog", component: PayrollGivingComponent}
    ];
