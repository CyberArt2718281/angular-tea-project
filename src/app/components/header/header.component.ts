import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isProductsPage = false;
  searchText: string = '';
  constructor(private router: Router, private searchService:SearchService) {}
 
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const nav = event as NavigationEnd;
        this.isProductsPage = nav.urlAfterRedirects ==='/catalog';
      });
  }
  find(){
    this.searchService.setSearchText(this.searchText);
  }
}
