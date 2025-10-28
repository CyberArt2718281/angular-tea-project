import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
   answers: { title: string; description: string }[] = [
    {
      title: 'Собираете ли вы подарочные боксы?',
      description:
        'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
    },
    {
      title: 'Сколько у вас разновидностей чая?',
      description:
        'У нас широкий ассортимент: разные виды по сортам, вкусам и регионам происхождения. Подбор зависит от ваших предпочтений.',
    },
    {
      title: 'В какой срок осуществляется доставка?',
      description:
        'Доставка обычно занимает от 2 до 7 рабочих дней в зависимости от региона и выбранного способа доставки.',
    },
    {
      title: 'У вас обновляется ассортимент?',
      description:
        'Да, ассортимент периодически обновляется — появляются сезонные и лимитированные позиции.',
    },
    {
      title: 'Можно ли вернуть товар?',
      description:
        'Возврат возможен в соответствии с нашей политикой возврата. Свяжитесь с поддержкой для подробностей.',
    },
  ];
  constructor() { }
  getAnswers() {
    return this.answers;
  }
  addAnswer(title: string, description: string) {
    this.answers.push({title, description});
  }
}
