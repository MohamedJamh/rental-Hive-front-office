import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/dashboard/users/users.component";
import {EquipmentFamilyComponent} from "./components/dashboard/equipment-family/equipment-family.component";
import {EquipmentsComponent} from "./components/dashboard/equipments/equipments.component";
import {ServicesComponent} from "./components/services/services.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'equipment-family', component: EquipmentFamilyComponent},
      {path: 'equipments', component: EquipmentsComponent},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
