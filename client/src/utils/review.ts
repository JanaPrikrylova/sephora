import { makeObservable, observable } from 'mobx';

class Review {
  username: string;
  review: string;

  constructor({ username, review }: { username: string; review: string }) {
    this.username = username;
    this.review = review;

    makeObservable(this, {
      username: observable,
      review: observable,
    });
  }
}

export { Review };
