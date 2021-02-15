import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit{

  public imgUrl: string = '/assets/banner/banner2.png';
  public colorCircle: string= "#D96409";
  constructor() { }

  ngOnInit(): void {
  }

  changeImgSlider(imgUrlFlex):void{
      this.imgUrl = imgUrlFlex
  }
  
  changeColorCircle(color):void{
    this.colorCircle = color
  }
}
