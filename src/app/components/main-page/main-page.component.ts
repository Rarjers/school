import { Component, ElementRef, QueryList, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  benefitsItem = [
    {name: 'Holistic Learning Approach', descriptino: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.', img: 'assets/main/benefins_icon_one.svg'},
    {name: 'Experienced Educators', descriptino: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.', img: 'assets/main/benefins_icon_two.svg'},
    {name: 'Nurturing Environment', descriptino: 'We prioritize safety and provide a warm and caring atmosphere for every child.', img: 'assets/main/benefins_icon_three.svg'},
    {name: 'Play-Based Learning', descriptino: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.', img: 'assets/main/benefins_icon_four.svg'},
    {name: 'Individualized Attention', descriptino: 'Our small class sizes enable personalized attention, catering to each child"s unique needs.', img: 'assets/main/benefins_icon_five.svg'},
    {name: 'Parent Involvement', descriptino: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.', img: 'assets/main/benefins_icon_six.svg'},
  ];

  sliderItem = [
    {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
  ];


  count:number = 0;
  
  nextSlideClick = () => {
    this.count = (this.count + 1) % 3;
  if (this.count === 0) {
    this.sliderItem = [
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    ];
  } else if (this.count === 1) {
    this.sliderItem = [
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B2', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B2', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B2', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    ];
  }
   else if (this.count === 2) {
    this.sliderItem = [
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B3', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B3', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B3', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    ];
  }
  };
  
  prevSlideClick = () => {
    this.count = (this.count - 1) % 3;
  if (this.count === 0) {
    this.sliderItem = [
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    ];
  } else if (this.count === -1) {
    this.sliderItem = [
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B-2', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B-2', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B-2', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    ];
  }
   else if (this.count === -2) {
    this.sliderItem = [
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B-3', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B-3', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
      {faceImg: 'assets/main/slide_face.svg', name: 'Jennifer B-3', starImg: 'assets/main/star.svg', description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!'},
    ];
  }
  };

  askedBlockOne:boolean = false;
  askedBlockTwo:boolean = false;
  askedBlockThree:boolean = false;
  askedBlockFour:boolean = false;
  askedBlockFive:boolean = false;

  @ViewChild('askedItemsOne') askedItemsOne: ElementRef | undefined;
  @ViewChild('askedItemsTwo') askedItemsTwo: ElementRef | undefined;
  @ViewChild('askedItemsThree') askedItemsThree: ElementRef | undefined;
  @ViewChild('askedItemsFour') askedItemsFour: ElementRef | undefined;
  @ViewChild('askedItemsFive') askedItemsFive: ElementRef | undefined;


  constructor (private render: Renderer2) {}
  
  textPlusOne:string = '+';
  textPlusTwo:string = '+';
  textPlusThree:string = '+';
  textPlusFour:string = '+';
  textPlusFive:string = '+';





  visibAskedOne = () => {
      this.askedBlockOne = !this.askedBlockOne;

      if (this.askedItemsOne) {
        if (!this.askedBlockOne) {
          this.render.setStyle(this.askedItemsOne.nativeElement, 'background-color', '');
          this.textPlusOne = '+';
        } else {
          // Устанавливаем цвет фона, когда askedBlock === true
          this.render.setStyle(this.askedItemsOne.nativeElement, 'background-color', 'white');
          this.textPlusOne = '-'
        }
      }
  };
  visibAskedTwo = () => {
    this.askedBlockTwo = !this.askedBlockTwo;

    if (this.askedItemsTwo) {
      if (!this.askedBlockTwo) {
        this.render.setStyle(this.askedItemsTwo.nativeElement, 'background-color', '');
        this.textPlusTwo = '+';
      } else {
        // Устанавливаем цвет фона, когда askedBlock === true
        this.render.setStyle(this.askedItemsTwo.nativeElement, 'background-color', 'white');
        this.textPlusTwo = '-'
      }
    }
};
visibAskedThree = () => {
  this.askedBlockThree = !this.askedBlockThree;

  if (this.askedItemsThree) {
    if (!this.askedBlockThree) {
      this.render.setStyle(this.askedItemsThree.nativeElement, 'background-color', '');
      this.textPlusThree = '+';
    } else {
      // Устанавливаем цвет фона, когда askedBlock === true
      this.render.setStyle(this.askedItemsThree.nativeElement, 'background-color', 'white');
      this.textPlusThree = '-'
    }
  }
};
visibAskedFour = () => {
  this.askedBlockFour = !this.askedBlockFour;

  if (this.askedItemsFour) {
    if (!this.askedBlockFour) {
      this.render.setStyle(this.askedItemsFour.nativeElement, 'background-color', '');
      this.textPlusFour = '+';
    } else {
      // Устанавливаем цвет фона, когда askedBlock === true
      this.render.setStyle(this.askedItemsFour.nativeElement, 'background-color', 'white');
      this.textPlusFour = '-'
    }
  }
};
visibAskedFive = () => {
  this.askedBlockFive = !this.askedBlockFive;

  if (this.askedItemsFive) {
    if (!this.askedBlockFive) {
      this.render.setStyle(this.askedItemsFive.nativeElement, 'background-color', '');
      this.textPlusFive = '+';
    } else {
      // Устанавливаем цвет фона, когда askedBlock === true
      this.render.setStyle(this.askedItemsFive.nativeElement, 'background-color', 'white');
      this.textPlusFive = '-'
    }
  }
};
}
