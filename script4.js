function DeviceEz(electro,shop,product,cost,year,name){
    this.electro=electro;
    this.status=0;
    this.shop=shop;
    this.product=product;
    this.cost=cost;
    this.year=year;
    this.buyer=name;
}
DeviceEz.prototype.turnToogle=function(){
    if(this.electro){
        this.status=!this.status;
    }else{
        console.log('Прибор является не электронным');
    }
}
DeviceEz.prototype.check=function(){
    console.log(`===============================\n Продукт: ${this.product}\n Цена: ${this.cost}руб\n Год покупки: ${this.year}\n Покупатель: ${this.buyer}\n\n Состояние: ${this.status?'Включен':'Выключен'}\n Место покупки: ${this.shop}\n Электроприбор: ${this.electro?'Да':'Нет'}\n===============================`);
}

let phone=new DeviceEz(true, 'aliexpress.ru', 'Radmi 9s',18000,2020,'Максим')
let gamingComputer=new DeviceEz(true, 'М.Видио','Игровой компьютер',860000,2019,'Елена')
let chair=new DeviceEz(false, "Магазин мебели",'Стул',3000,2010,'Михаил')
phone.check();
phone.turnToogle();
phone.check();
gamingComputer.check();
chair.check();
