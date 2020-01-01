import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { timer, Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenTimer implements OnDestroy {

  private timeSub: Subscription = new Subscription();
  private now: Observable<number>;

  public startCount(time: number): void {
    this.now = timer(0, 1000);
    this.timeSub.add(this.now.subscribe(count =>
      {
        if(count > time){
          this.timeSub.unsubscribe();
        }
      }));

  }

  ngOnDestroy() {
    this.timeSub.unsubscribe();
  }
}
