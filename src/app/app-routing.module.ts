import { PendingTransactionsComponent } from './components/pending-transactions/pending-transactions.component';
import { CreateTransactionsComponent } from './components/create-transactions/create-transactions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BlockchainViewerComponent } from './components/blockchain-viewer/blockchain-viewer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BlockchainViewerComponent},
  { path:'settings', component: SettingsComponent},
  { path:'new/transaction',component:CreateTransactionsComponent},
  { path:'new/transaction/pending',component:PendingTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
