import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const STORAGE_KEY = 'favouriteNews';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {


  constructor(private storage: Storage) { }


  getAllFavouriteNews() {
    return this.storage.get(STORAGE_KEY);
  }


  isFavourite() {
    return this.getAllFavouriteNews().then(result => {
      return result && result.indexOf() !== -1;
    });
  }


  favoriteNews() {
    return this.getAllFavouriteNews().then(result => {
      if (result) {
        result.push();
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, []);
      }
    });
  }


  unfavouriteNews() {
    return this.getAllFavouriteNews().then(result => {
      if (result) {
        var index = result.indexOf();
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }


}
