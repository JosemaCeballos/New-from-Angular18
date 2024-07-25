import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  searcher = input.required<FormControl<string | null>>()

  ngOnInit(): void {
    if (this.searcher()) {
      this.searcher().events.subscribe((event) => console.log(event))
    }
  }
}
