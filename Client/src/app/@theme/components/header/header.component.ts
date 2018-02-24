import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any = null;
  userMenu: any[];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router
  ) {}

  ngOnInit() {
    if(this.user == null)
      this.userMenu = [{title:'Sign up'},{title:'Login'}];
    else
      this.userMenu = [{title:'Logout'}];
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  onMenuClick(event) {
    if (event.title === 'Logout') {
      this.user = null;
      this.ngOnInit();
    }
    else if(event.title === 'Sign up'){
      this.router.navigate(['auth/register']);
    }
    else if(event.title === 'Login'){
      this.router.navigate(['auth/login']);
    }
  }
}
