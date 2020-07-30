import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamName: String[] = [
    'Chennai Super Kings',
    'Mumbai Indians',
    'Rajasthan Royals',
    'Delhi Capitals',
    'Royal Challengers Banglore',
    'Kolkata Knight Riders',
    'Kings XI Punjab',
    'Sunrises Hyderabad'
  ];
  website: String[] = [
    'https://www.chennaisuperkings.com/', 
    'https://www.mumbaiindians.com/', 
    'https://www.rajasthanrojals.com/',
    'https://www.dehlicapitals.in/', 
    'https://www.royalchallegers.com/', 
    'https://www.kkr.in/', 
    'https://www.kxip.in/',
    'https://www.Sunrises-Hyderabad.in/'
  ];
phoneNumbers: String[] = [
    '965-144-6018',
    '1-522-714-2638x44811',
    '038-030-9641x7086',
    '005-851-7095x72027',
    '1-471-836-5871x5841',
    '247-350-7427',
    '457.071.4608x101',
    '070-610-2661'
  ];

images: String[] = [
    '../../assets/csk.png',
    '../../assets/MI.png', 
    '../../assets/RR.png',
    '../../assets/Delhi.png',
    '../../assets/RCB.png',
    '../../assets/KKR.png', 
    '../../assets/KXI.png', 
    '../../assets/SRH.png',
    
  ];

}
