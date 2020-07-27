import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Super Dope Pics';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.netclipart.com/pp/m/56-560795_arrow-arrows-archery-navigation-comments-adventure-arrows-clip.png';
  image3 = 'https://us.123rf.com/450wm/hchjjl/hchjjl1503/hchjjl150302470/37605078-stock-vector-doodle-archery.jpg?ver=6';

  constructor() { }

  ngOnInit() {
  }

}