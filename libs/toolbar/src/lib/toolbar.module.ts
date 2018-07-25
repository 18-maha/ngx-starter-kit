import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from "@ngx-starter-kit/shared";
import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';
import { NotificationsModule } from '@ngx-starter-kit/notifications';

import { ToolbarComponent } from './toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';
import { SidenavToggleComponent } from './components/sidenav-toggle/sidenav-toggle.component';
import { QuickpanelToggleComponent } from './components/quickpanel-toggle/quickpanel-toggle.component';


@NgModule({
  imports: [
    SharedModule,
    ThemePickerModule,
    RouterModule,
    NotificationsModule,
  ],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    SearchComponent,
    SearchBarComponent,
    UserMenuComponent,
    FullscreenToggleComponent,
    SidenavToggleComponent,
    QuickpanelToggleComponent
  ],
})
export class ToolbarModule {}
