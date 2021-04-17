import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag, TagsResponse } from 'src/app/interfaces/tags-response.interface';
import { StackExchangeService } from 'src/app/services/stack-exchange/stack-exchange.service';

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.css']
})
export class TagViewComponent implements OnInit {

  isLoading = false;
  isError = false;
  userId: number = +this.active.snapshot.params.id;
  tagsResponse!: TagsResponse;
  tags!: Tag[];

  constructor(
    private readonly active: ActivatedRoute,
    private readonly stackExchangeService: StackExchangeService
  ) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.isLoading = true;
    this.isError = false;
    this.stackExchangeService.getTags(this.userId).subscribe(res => {
      this.tagsResponse = res;
      if (this.tagsResponse && this.tagsResponse.items && this.tagsResponse.items.length) {
        this.tags = this.tagsResponse.items;
      }
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
      this.isError = true;
    });
  }

}
