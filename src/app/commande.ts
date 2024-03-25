export class Commande {
    items: CommandeItem[] = [];
    tooManyBoxesReached: boolean = false;
  }
  
  export class CommandeItem {
    constructor(public box: any, public quantity: number) {}
  }