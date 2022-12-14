import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index.component';
import {RouterModule} from '@angular/router';
import {INDEX_ROUTER_CONFIG} from './index-routing.module';
import {SharedModuleModule} from '../../../shared-module/shared-module.module';
import {IndexApiService} from './service/indexApiService';
import {ChatGPTComponent} from './chat-gpt/chat-gpt.component';

@NgModule({
  declarations: [IndexComponent, ChatGPTComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(INDEX_ROUTER_CONFIG),
    SharedModuleModule
  ],
  providers: [IndexApiService]
})
export class IndexModule {
}
